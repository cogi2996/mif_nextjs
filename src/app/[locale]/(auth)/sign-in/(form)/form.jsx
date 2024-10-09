'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ForgetPassword } from '@/components/forget-password'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaLogin } from '@/lib/schemas/auth.schema'
import { authApi } from '@/services/authApi'
import { setAuthState } from '@/redux/slices/authSlice'
import { useAppDispatch } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { PasswordInput } from '@/components/password-input'
import { getUserIdFromToken } from '@/lib/helper'
import Loading from '@/components/loading'

export default function FormLogin({ t }) {
    const [rememberMe, setRememberMe] = useState(false);

    const router = useRouter();
    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset } = useForm({
        resolver: zodResolver(schemaLogin),
    })

    useEffect(() => {
        const rememberLogin = JSON.parse(localStorage.getItem('rememberLogin'))
        console.log('🚀 ~ useEffect ~ rememberLogin:', rememberLogin)
        if (rememberLogin) {
            const { isRememberMe, ...data } = rememberLogin
            reset(data)
            setRememberMe(isRememberMe)
        }
    }, [])

    const mutation = authApi.mutation.useLogin()
    const hanleLogin = (data) => {
        mutation.mutate(data, {
            onSuccess: (data) => {
                const id = getUserIdFromToken(data.access_token)

                const authState = {
                    isLogin: true,
                    accessToken: data.access_token,
                    id,
                }
                dispatch(setAuthState(authState))
                router.push('/home');
            },
        });
        if (rememberMe) {
            const rememberLogin = {
                email: data.email,
                password: data.password,
                isRememberMe: true
            }
            localStorage.setItem('rememberLogin', JSON.stringify(rememberLogin))
        } else {
            localStorage.removeItem('rememberLogin')
        }
    }

    return (
        <>
            {mutation.isPending && <Loading />}
            <form onSubmit={handleSubmit(hanleLogin)}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">{t('email')}</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={t('email_placeholder')}
                            required
                            {...register("email")}
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">{t('password')}</Label>
                        </div>
                        <PasswordInput
                            id="password"
                            placeholder={t('password_placeholder')}
                            required
                            {...register("password")}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Checkbox
                            id="rememberMe"
                            checked={rememberMe}
                            onCheckedChange={setRememberMe}
                        />
                        <Label htmlFor="rememberMe">{t('remember_me')}</Label>
                        <ForgetPassword t={t} />
                    </div>
                    <Button type="submit" className="w-full">
                        {t('login_action')}
                    </Button>
                    <div className="flex gap-2">
                        <Button variant="outline" className="w-full" type='button'>
                            {t('login_with_google')}
                        </Button>
                        <Button variant="outline" className="w-full" type='button'>
                            {t('login_with_facebook')}
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}
