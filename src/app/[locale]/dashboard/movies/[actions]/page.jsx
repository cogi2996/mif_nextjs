'use client'
import { CountrySelect } from '@/components/country-select';
import { DatePickerPopover } from '@/components/date-picker-popover';
import { FancyMultiSelect } from '@/components/fancy-multi-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { schemaMovie } from '@/lib/schemas/movie.schema';
import { movieApi } from '@/services/movieApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { X } from 'lucide-react';
import React, { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function ActionsMovie() {
    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schemaMovie),
        defaultValues: {
            title: '',
            description: '',
            genreIds: [],
            releaseDate: undefined,
            directorId: [],
            castIds: [],
            posterUrl: '',
            trailerUrl: '',
            duration: '',
            country: '',
            budget: undefined,
            awards: [{ name: '', date: undefined }],
        },
    });
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleSelectionChange = (selected) => {
        setValue('genreIds', selected.map(option => option.value));
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'awards',
    });

    const { data: movieCategories } = categoryApi.query.useGetAllmovieCategories()
    const createMovieMutation = movieApi.mutation.useCreateMovieMutation()

    const onSubmit = (data) => {
        createMovieMutation.mutate(data)
    };

    const genres = movieCategories?.map(category => {
        return {
            value: category.id,
            label: category.categoryName,
        }
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
            <div className='flex justify-between'>
                <p className='text-2xl font-bold'>Create Movie</p>
                <Button type='submit'>Submit</Button>
            </div>

            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-4'>
                    <p className='text-sm font-semibold pb-2'>Title</p>
                    <Input {...register('title')} required />
                </div>
                <div className='col-span-1'>
                    <p className='text-sm font-semibold pb-2'>Release Date</p>
                    <Controller
                        control={control}
                        name='releaseDate'
                        render={({ field }) => (
                            <DatePickerPopover
                                selected={field.value ?? undefined}
                                onSelect={field.onChange}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <p className='text-sm pb-2 font-semibold'>Description</p>
                <Textarea {...register('description')} />
            </div>

            <div className='grid grid-cols-9 gap-4'>
                <div className='col-span-7'>
                    <p className='text-sm font-semibold pb-2'>Genre</p>
                    <FancyMultiSelect
                        values={genres}
                        initialSelected={[]}
                        onSelectionChange={handleSelectionChange} />
                </div>
                <div>
                    <p className='text-sm font-semibold pb-2'>Country</p>
                    <CountrySelect {...register('country')} />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-2'>
                    <p className='text-sm pb-2 font-semibold'>Poster</p>
                    <Input
                        type='file' {...register('posterUrl')}
                    // {...register('posterUrl', {
                    //     onChange: (e) => {
                    //         const file = e.target.files[0];
                    //         if (file) {
                    //             const url = URL.createObjectURL(file);
                    //             return url;
                    //         }
                    //     }
                    // })}
                    />
                </div>

                <div className='col-span-2'>
                    <p className='text-sm pb-2 font-semibold'>Trailer URL</p>
                    <Input {...register('trailerUrl')} />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>

                <div className=''>
                    <p className='text-sm font-semibold pb-2'>Duration</p>
                    <Input {...register('duration')} required />
                </div>

                <div className=''>
                    <p className='text-sm font-semibold pb-2'>Budget</p>
                    <Input
                        type='number'
                        {...register('budget', {
                            setValueAs: (v) => v === "" ? undefined : parseFloat(v),
                        })}
                        required
                    />
                </div>

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

