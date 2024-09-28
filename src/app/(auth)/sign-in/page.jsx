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
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { loginApi } from '@/services/authApi'
import { setAuthState } from '@/redux/slices/authSlice'
import { useAppDispatch } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { PasswordInput } from '@/components/password-input'
import { getUserIdFromToken } from '@/lib/helper'


export default function SignIn() {
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { register, handleSubmit, setValue } = useForm({
        resolver: zodResolver(schemaLogin),
    })

    const mutation = useMutation({
        mutationFn: (data) => loginApi(data),
        onSuccess: (data) => {
            const id = getUserIdFromToken(data.access_token)

            const authState = {
                isLogin: true,
                accessToken: data.access_token,
                id,
            }

            dispatch(setAuthState(authState))
            toast.success('Đăng nhập thành công')
            router.push('/home');
        },
        onError: (error) => {
            toast.error('Email hoặc mật khẩu không đúng')
        }
    })

    const hanleLogin = (data) => {
        mutation.mutate(data);
        if (rememberMe) {
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
            localStorage.setItem('rememberMe', 'true')
        } else {
            localStorage.removeItem('email')
            localStorage.removeItem('password')
            localStorage.removeItem('rememberMe')
        }
    }

    useEffect(() => {
        const savedEmail = localStorage.getItem('email')
        const savedPassword = localStorage.getItem('password')
        const savedRememberMe = localStorage.getItem('rememberMe') === 'true'

        if (savedEmail) {
            setValue('email', savedEmail)
        }
        if (savedPassword) {
            setValue('password', savedPassword)
        }
        setRememberMe(savedRememberMe)
    }, [setValue])

    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-fit gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Đăng nhập</h1>
                    <p className="text-muted-foreground text-sm">
                        Nhập email của bạn bên dưới để đăng nhập vào tài khoản của bạn
                    </p>
                </div>
                <form onSubmit={handleSubmit(hanleLogin)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Nhập email"
                                required
                                {...register("email")}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Mật khẩu</Label>
                            </div>
                            <PasswordInput
                                id="password"
                                placeholder="Nhập mật khẩu"
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
                            <Label htmlFor="rememberMe">Ghi nhớ tôi</Label>
                            <ForgetPassword />
                        </div>
                        <Button type="submit" className="w-full">
                            Đăng nhập
                        </Button>
                        <div className="flex gap-2">
                            <Button variant="outline" className="w-full" type='button'>
                                Đăng nhập với Google
                            </Button>
                            <Button variant="outline" className="w-full" type='button'>
                                Đăng nhập với Facebook
                            </Button>
                        </div>
                    </div>
                </form>
                <div className="text-center text-sm">
                    Bạn chưa có tài khoản?{" "}
                    <Link href="/sign-up" className="underline">
                        Đăng ký
                    </Link>
                </div>
            </div>
        </div>
    )
}
