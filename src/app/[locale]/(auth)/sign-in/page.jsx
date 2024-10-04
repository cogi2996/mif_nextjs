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
import { authApi } from '@/services/authApi'
import { setAuthState } from '@/redux/slices/authSlice'
import { useAppDispatch } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { PasswordInput } from '@/components/password-input'


export default function SignIn() {
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { register, handleSubmit, reset } = useForm({
        resolver: zodResolver(schemaLogin),
    })

    const mutation = authApi.mutation.useLogin(dispatch, router, setAuthState)

    const hanleLogin = (data) => {
        mutation.mutate(data);
        if (rememberMe) {
            const rememberLogin = {
                email: data.email,
                password: data.password,
                isRememberMe: true
            }
            localStorage.setItem('rememberLogin', rememberLogin)
        } else {
            localStorage.removeItem('rememberLogin')
        }
    }

    useEffect(() => {
        const rememberLogin = localStorage.getItem('rememberLogin')
        if (rememberLogin) {
            const { savedRememberMe, ...data } = rememberLogin
            reset(data)
            setRememberMe(savedRememberMe)
        }
    }, [])

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
