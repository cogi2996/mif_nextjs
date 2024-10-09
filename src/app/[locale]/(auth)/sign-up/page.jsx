import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ForgetPassword } from '@/components/forget-password'
import { useTranslations } from 'next-intl'

export default function SignUp() {
    const t = useTranslations('Login_register')
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-fit gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">{t('register_title')}</h1>
                    <p className="text-muted-foreground text-sm">
                        {t('register_description')}
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="fullName">{t('fullName')}</Label>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder={t('fullName_placeholder')}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">{t('email')}</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={t('email_placeholder')}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">{t('password')}</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder={t('password_placeholder')}
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">{t('repeat_password')}</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder={t('repeat_password_placeholder')}
                            required
                        />
                    </div>

                    <div className="flex gap-2">
                        <ForgetPassword t={t} />
                    </div>
                    <Button type="submit" className="w-full">
                        {t('register_action')}
                    </Button>
                    <div className="flex gap-2">
                        <Button variant="outline" className="w-full">
                            {t('login_with_google')}
                        </Button>
                        <Button variant="outline" className="w-full">
                            {t('login_with_facebook')}
                        </Button>
                    </div>
                </div>
                <div className="text-center text-sm">
                    {t('you_have_account_yet')}{" "}
                    <Link href="sign-in" className="underline">
                        {t('login_title')}
                    </Link>
                </div>
            </div>
        </div>
    )
}

