import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgetPassword({ t }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Label
          className="ml-auto text-sm underline"
        >
          {t('forget_password_title')}
        </Label>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('forget_password_title')}</DialogTitle>
          <DialogDescription>
            {t('forget_password_description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="displayName" className="text-right">
              {t('email')}
            </Label>
            <Input
              id="email"
              placeholder={t('email')}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{t('forget_password_action')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


