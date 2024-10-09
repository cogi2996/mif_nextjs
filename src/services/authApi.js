import { publicApi } from "@/services/config"
import { useMutation } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { toast } from "react-toastify"

const register = async (data) => {
    const res = await publicApi.post('auth/register', data)
    return res.data
}

const login = async (data) => {
    const res = await publicApi.post('auth/login', data)
    return res.data
}

export const authApi = {
    mutation: {
        useLogin() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: login,
                onSuccess: () => {
                    toast.success(t('login_successful'))
                },
                onError: () => {
                    toast.error(t('login_failed'))
                }
            })
        }
    }
}