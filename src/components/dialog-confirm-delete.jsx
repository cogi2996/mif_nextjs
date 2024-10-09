'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

let setDialogState, onDialogResult;
export function confirmDelete(message, callback) {
    if (setDialogState) {
        setDialogState({
            isOpen: true,
            message: message,
            result: null,
        });
        onDialogResult = callback;
    }
}

export default function DialogConfirmDelete() {
    const t = useTranslations('DialogConfirmDelete')

    const [dialogState, setDialogStateInternal] = useState({
        isOpen: false,
        message: '',
        result: null,
    });

    setDialogState = setDialogStateInternal;

    const handleConfirm = (result) => {
        setDialogStateInternal({
            ...dialogState,
            isOpen: false,
            result,
        });
        onDialogResult(result);
    };


    return (
        <Dialog open={dialogState.isOpen} onOpenChange={() => handleConfirm(false)}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>{t('confirm_delete')}</DialogTitle>
                </DialogHeader>
                <p>{dialogState.message || t('message_default')}</p>
                <DialogFooter>
                    <Button variant="outline" onClick={() => handleConfirm(false)}>{t('button_cancel')}</Button>
                    <Button variant="destructive" onClick={() => handleConfirm(true)}>{t('button_submit_delete')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
