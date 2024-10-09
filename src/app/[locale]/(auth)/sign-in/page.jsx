'use client'
import React from 'react'
import Link from "next/link"
import { useTranslations } from 'next-intl'
import FormLogin from '@/app/[locale]/(auth)/sign-in/(form)/form'

export default function SignIn() {
    const t = useTranslations('Login_register')
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-fit gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">{t('login_title')}</h1>
                    <p className="text-muted-foreground text-sm">
                        {t('login_description')}
                    </p>
                </div>
                <FormLogin t={t} />
                <div className="text-center text-sm">
                    {t('you_dont_have_account_yet')}{" "}
                    <Link href="/sign-up" className="underline">
                        {t('register_title')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
