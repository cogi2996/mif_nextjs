import { Button } from "@/components/ui/button";
import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { groupRulesApi } from "@/services/groupRules";
import { groupsApi } from "@/services/groupsApi";
import { Loader2, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function DialogAddOrEditRuleToGroup({ groupId, rule, isOpen, setIsOpen, setRule }) {

    const t = useTranslations('Groups.DialogAddOrEditRule')

    const { handleSubmit, register, reset } = useForm();

    const addRuleMutation = groupRulesApi.mutation.useAddRuleToGroup(groupId)

    const updateRuleMutation = groupRulesApi.mutation.useUpdateRuleInGroup(groupId)

    useEffect(() => {
        if (rule) reset({
            ruleDescription: rule.ruleDescription
        })
    }, [rule])

    const onSubmit = (data) => {
        !rule
            ?
            addRuleMutation.mutate({ groupId, data }, {
                onSuccess: () => {
                    setIsOpen(false)
                    setRule('')
                    reset()
                }
            })
            :
            updateRuleMutation.mutate({ groupId, ruleId: rule.id, data }, {
                onSuccess: () => {
                    setIsOpen(false)
                    setRule('')
                    reset()
                }
            })
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="h-8 gap-1" size='sm' onClick={() => setIsOpen(true)}>
                    <Plus className="h-4 w-4" />
                    {rule ? t('edit') : t('add')}
                </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl ">
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
                    <DialogHeader>
                        <DialogTitle>{rule ? t('edit') : t('add')}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <p className="text-sm font-bold">{t('content')}</p>
                        <Textarea
                            {...register("ruleDescription", { required: true })}
                            className="w-full"
                            placeholder={t('content_placeholder')}
                            rows={5}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit"
                            disabled={addRuleMutation.isPending || updateRuleMutation.isPending}>
                            {(addRuleMutation.isPending || updateRuleMutation.isPending) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {t('button_submit')}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
