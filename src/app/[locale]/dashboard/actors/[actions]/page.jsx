'use client';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DatePickerPopover } from '@/components/date-picker-popover';
import { X } from 'lucide-react';
import { schemaActor } from '@/lib/schemas/actor.schema';
import { useMutation, useQuery } from '@tanstack/react-query';
import { actorApi } from '@/services/actorApi';
import { toast } from 'react-toastify';
import { useParams, useSearchParams } from 'next/navigation';

export default function ActionsActor() {
    const [idEdit, setIdEdit] = useState(false)
    const searchParams = useSearchParams();

    const { data: actor, isLoading: isLoading } = actorApi.query.useGetActorById(idEdit, !!idEdit)
    useEffect(() => {
        const id = searchParams.get('id')
        if (id) setIdEdit(id)
    }, [])

    useEffect(() => {
        if (actor) {
            reset({
                name: actor.name,
                dateOfBirth: actor.dateOfBirth,
                bio: actor.bio,
                awards: actor.awards.map((award) => ({
                    name: award.name,
                    date: award.date,
                })),
            });
        }
    }, [actor]);

    const {
        register,
        handleSubmit,
        control,
        reset,
    } = useForm({
        resolver: zodResolver(schemaActor),
        defaultValues: {
            name: '',
            dateOfBirth: undefined,
            bio: '',
            profilePictureUrl: '',
            awards: [{ name: '', date: undefined }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'awards',
    });

    const createActorMutation = actorApi.mutation.useCreateActor()

    const updateActorMutation = useMutation({
        mutationFn: (data) => update
    })



    const onSubmit = (data) => {
        idEdit ? '' : createActorMutation.mutate(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
            <div className='flex justify-between'>
                <p className='text-2xl font-bold'>Create Actor</p>
                <Button type='submit'>Submit</Button>
            </div>

            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-4'>
                    <p className='text-sm whitespace-nowrap font-semibold pb-2'>Name Actor</p>
                    <Input {...register('name')} required />
                </div>
                <div className='col-span-1'>
                    <p className='text-sm font-semibold pb-2'>Day of birth</p>
                    <Controller
                        control={control}
                        name='dateOfBirth'
                        render={({ field }) => (
                            <DatePickerPopover {...field}
                                selected={field.value ?? undefined} onSelect={field.onChange} />
                        )}
                    />
                </div>
            </div>

            <div>
                <p className='text-sm pb-2 font-semibold'>Bio</p>
                <Textarea {...register('bio')} />
            </div>

            <div>
                <p className='text-sm pb-2 font-semibold'>Avatar</p>
                <Input type='file' {...register('profilePictureUrl')} />
            </div>

            <div>
                <p className='text-sm pb-2 font-semibold'>Awards</p>
                {fields.map((field, index) => (
                    <div key={field.id} className='grid grid-cols-5 gap-4 mb-2'>
                        <div className='col-span-3'>
                            <Input
                                {...register(`awards.${index}.name`)}
                                placeholder='Award Name'
                            />
                        </div>
                        <div className='flex col-span-2 items-center gap-2'>
                            <Controller
                                control={control}
                                name={`awards.${index}.date`}
                                render={({ field }) => (
                                    <DatePickerPopover
                                        selected={field.value ?? undefined}
                                        onSelect={field.onChange}
                                    />
                                )}
                            />
                            <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='outline'
                                onClick={() => remove(index)}
                            >
                                <X className='h-4 w-4' />
                                <span className='sr-only'>Remove Award</span>
                            </Button>
                        </div>
                    </div>
                ))}
                <Button
                    variant='outline'
                    onClick={() => append({ name: '', date: undefined })}
                    className='w-fit'
                >
                    Add Award
                </Button>
            </div>
        </form>
    );
}
