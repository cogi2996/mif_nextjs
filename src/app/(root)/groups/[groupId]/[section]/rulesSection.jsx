'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React, { useEffect, useRef } from 'react'

export default function MembersSection() {
    return (
        <Card className="w-full max-w-3xl mx-auto my-8 drop-shadow-lg">
            <CardContent>
                <div className="my-6 grid gap-2">
                    <p className="font-bold flex items-center">Quy tắc</p>
                    <p className="text-xs text-muted-foreground">Những quy định chung của nhóm</p>
                </div>
                <Separator />
                <div>
                    <Accordion type="multiple" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="rounded-lg h-fit p-2 hover:bg-muted my-4">
                                <div>
                                    1 . Quy tắc 1
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="rounded-lg h-fit p-2 hover:bg-muted my-4">
                                <div>
                                    2 . Quy tắc 2
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="rounded-lg h-fit p-2 hover:bg-muted my-4">
                                <div>
                                    3 . Quy tắc 3
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </CardContent>
        </Card>
    )
}