'use client'
import DialogAddOrEditRuleToGroup from '@/app/[locale]/(root)/groups/[groupId]/[section]/(component)/dialog-add-rule'
import DialogConfirmDelete, { confirmDelete } from '@/components/dialog-confirm-delete'
import Loading from '@/components/loading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { groupRulesApi } from '@/services/groupRules'
import { MoreHorizontal } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function RulesSection({ isOwner, group }) {
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [rule, setRule] = useState('')
    const t = useTranslations('Groups')

    const { data: rules, isLoading } = groupRulesApi.query.useGetRulesByGroupId(group.id)
    const deleteRuleMutation = groupRulesApi.mutation.useDeleteRuleFromGroup(group.id)
    const hanleEditRule = (rule) => {
        setIsOpenAdd(true)
        setRule(rule)
    }

    const hanleDeleteRule = (rule) => {
        confirmDelete('', (result) => {
            if (result) {
                deleteRuleMutation.mutate({
                    groupId: group.id,
                    ruleId: rule.id,
                })
            }
        });

    }

    if (isLoading) return (<Loading />)
    return (
        <Card className="w-full max-w-3xl mx-auto my-8 drop-shadow-lg">
            <CardContent>
                <div className="my-6 grid gap-2">
                    <div className='flex justify-between'>
                        <p className="font-bold flex items-center">{t('rules')}</p>
                        {isOwner && <DialogAddOrEditRuleToGroup isOpen={isOpenAdd} setIsOpen={setIsOpenAdd} groupId={group.id} setRule={setRule} rule={rule} />}
                    </div>
                    <p className="text-xs text-muted-foreground">{t('rules_description')}</p>
                </div>
                <Separator />
                <div>
                    <Accordion type="multiple" collapsible className="w-full">
                        {
                            rules && rules.map((rule, index) => {
                                const number = Number(index) + 1

                                return (<AccordionItem
                                    value={`item-${number}`}
                                    key={number}
                                >
                                    <AccordionTrigger className="rounded-lg h-fit p-2 hover:bg-muted my-4">
                                        <div>
                                            {number} . {t('rules')} {number}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex justify-between'>
                                            <p className='text-justify p-2'>
                                                {rule.ruleDescription}
                                            </p>
                                            {
                                                isOwner &&
                                                <div>
                                                    <DropdownMenu modal={false}>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem onClick={() => hanleEditRule(rule)}>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => hanleDeleteRule(rule)}>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            }
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>)
                            })
                        }
                    </Accordion>
                </div>
                <DialogConfirmDelete />
            </CardContent>
        </Card>
    )
}