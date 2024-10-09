import { QUERY_KEY } from "@/services/key"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { toast } from "react-toastify"

const { privateApi } = require("@/services/config")

const getRulesByGroupId = async (groupId) => {
    const res = await privateApi.get(`/groups/${groupId}/rules`)
    return res.data
}

const addRuleToGroup = async ({ groupId, data }) => {
    const res = await privateApi.post(`/groups/${groupId}/rules`, data)
    return res.data
}

const deleteRuleFromGroup = async ({ groupId, ruleId }) => {
    const res = await privateApi.delete(`/groups/${groupId}/rules/${ruleId}`)
    return res.data
}

const updateRuleInGroup = async ({ groupId, ruleId, data }) => {
    const res = await privateApi.put(`/groups/${groupId}/rules/${ruleId}`, data)
    return res.data
}

export const groupRulesApi = {
    query: {
        useGetRulesByGroupId(groupId) {
            return useQuery({
                queryKey: QUERY_KEY.groupRules(groupId),
                queryFn: ({ queryKey }) => getRulesByGroupId(queryKey[1])
            })
        }
    },
    mutation: {
        useAddRuleToGroup(groupId) {
            const queryClient = useQueryClient()
            const t = useTranslations('Toast')
            return useMutation({
                mutationFn: addRuleToGroup,
                onSuccess: () => {
                    toast.success(t('add_rule_successful'))
                    queryClient.invalidateQueries({ queryKey: QUERY_KEY.groupRules(groupId) })
                }
            })
        },
        useDeleteRuleFromGroup(groupId) {
            const queryClient = useQueryClient()
            const t = useTranslations('Toast')
            return useMutation({
                mutationFn: deleteRuleFromGroup,
                onSuccess: () => {
                    toast.success(t('delete_rule_successful'))
                    queryClient.invalidateQueries({ queryKey: QUERY_KEY.groupRules(groupId) })
                }
            })
        },
        useUpdateRuleInGroup(groupId) {
            const queryClient = useQueryClient()
            const t = useTranslations('Toast')
            return useMutation({
                mutationFn: updateRuleInGroup,
                onSuccess: () => {
                    toast.success(t('update_rule_successful'))
                    queryClient.invalidateQueries({ queryKey: QUERY_KEY.groupRules(groupId) })
                }
            })
        },
    },
}