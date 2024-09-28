import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

export default function ConfirmDeleteDialog({ element }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {element}
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg w-fit">
                <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                </DialogHeader>
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpenDialog(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={onConfirmDelete}>
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
