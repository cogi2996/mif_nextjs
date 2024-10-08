import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ForgetPassword } from '@/components/forget-password'

export default function SignUp() {
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-fit gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Đăng ký</h1>
                    <p className="text-muted-foreground text-sm">
                        Nhập thông tin của bạn bên dưới để đăng ký tài khoản
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="fullName">Họ và tên</Label>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="Nhập họ và tên"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Nhập email"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Mật khẩu</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Nhập lại mật khẩu</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            required
                        />
                    </div>

                    <div className="flex gap-2">
                        <ForgetPassword/>
                    </div>
                    <Button type="submit" className="w-full">
                        Đăng ký
                    </Button>
                    <div className="flex gap-2">
                        <Button variant="outline" className="w-full">
                            Đăng nhập với Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            Đăng nhập với Facebook
                        </Button>
                    </div>
                </div>
                <div className="text-center text-sm">
                    Bạn đã có tài khoản?{" "}
                    <Link href="sign-in" className="underline">
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    )
}

