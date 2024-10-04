import { getUserIdFromToken } from "@/lib/helper"
import { publicApi } from "@/services/config"
import { useMutation } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { toast } from "react-toastify"

export const registerApi = async (data) => {
    const res = await publicApi.post('auth/register')
    return res.data
}

export const login = async (data) => {
    console.log('🚀 ~ login ~ data:', data)
    const res = await publicApi.post('auth/login', data)
    return res.data
}

export const authApi = {
    mutation: {
        useLogin(dispatch, router, setAuthState) {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: (data) => login(data),
                onSuccess: (data) => {
                    const id = getUserIdFromToken(data.access_token)

                    const authState = {
                        isLogin: true,
                        accessToken: data.access_token,
                        id,
                    }

                    dispatch(setAuthState(authState))
                    toast.success(t('login_successful'))
                    router.push('/home');
                },
                onError: () => {
                    toast.error(t('login_failed'))
                }
            })
        }
    }
}