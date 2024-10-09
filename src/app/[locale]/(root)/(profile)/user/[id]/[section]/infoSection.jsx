import { CardInfoUser } from '@/app/[locale]/(root)/(profile)/user/[id]/(component)/card-info-user'
import { DialogEditProfile } from '@/app/[locale]/(root)/(profile)/user/[id]/(component)/dialog-edit-profile'
import Loading from '@/components/loading'
import { userApi } from '@/services/userApi'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'

export default function InfoSection({ id }) {
    const [openDialogEdit, setOpenDialogEdit] = useState(false)

    const { data: infoUser, isLoading } = userApi.query.useGetUserInfoById(id)

    const t = useTranslations('Profile.User')

    if (isLoading) return <Loading />

    return (
        <>
            <CardInfoUser setOpenDialogEdit={setOpenDialogEdit} infoUser={infoUser} t={t} />
            <DialogEditProfile openDialogEdit={openDialogEdit} setOpenDialogEdit={setOpenDialogEdit} infoUser={infoUser} t={t} />
        </>
    )
}

