"use client"

import React, { useState } from 'react'
import IconNewFeedback from '../icons/IconNewFeedback'
import SelectDropdown from '../select-dropdown/SelectDropdown'
import { PRODUCT_FILTERS_LIST } from '@/constants'
import SelectButton from '../select-dropdown/SelectButton'
import { useForm } from 'react-hook-form'
import { ProductSchemaType, productSchema } from '@/validations/productSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import InputErrorMessage from './InputErrorMessage'

function CreateProductForm() {
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
    const [categoryItem, setCategoryItem] = useState(PRODUCT_FILTERS_LIST[0])
    const { handleSubmit, register, formState: { errors }, setValue } = useForm<ProductSchemaType>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: "",
            details: "",
            category: PRODUCT_FILTERS_LIST[0],
        }
    })

    function handleSetCategoryItem(item: string) {
        setCategoryItem(item)
        setValue("category", item)
    }

    function onSubmit(data: ProductSchemaType) {
        console.log(data)
    }

  return (
    <div className='container-4 relative pt-5 space-y-6'>
        <div className='absolute -top-7 left-7'>
            <IconNewFeedback />
        </div>
        <h1 className='text-3 font-bold text-dark-2'>Create New Feedback</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
                <label htmlFor="title" className='label-1'>Feedback Title</label>
                <span className='input-help-text-1'>Add a short, descriptive headline</span>
                <Input id='title' name='title' register={register} errors={errors.title} />
                <InputErrorMessage errors={errors.title} />
            </div>

            <div className='flex flex-col'>
                <label className='label-1'>Category</label>
                <span className='input-help-text-1'>Choose category for your feedback</span>
                <div className='relative'>
                    <SelectButton activeItem={categoryItem} setDropdownOpen={setCategoryDropdownOpen} />
                    <SelectDropdown dropdownList={PRODUCT_FILTERS_LIST} dropdownOpen={categoryDropdownOpen} setDropdownOpen={setCategoryDropdownOpen} activeItem={categoryItem} setActiveItem={handleSetCategoryItem} topOffset={60} />
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="details" className='label-1'>Feedback Detail</label>
                <span className='input-help-text-1'>Include any specific comments on what should be improved, added, etc.</span>
                <Textarea id='details' name='details' register={register} errors={errors.details} />
                <InputErrorMessage errors={errors.details} />
            </div>

            <div className='flex flex-col gap-4 mt-3'>
                <button type='submit' className='btn-2'>Add Feedback</button>
                <button type='button' className='btn-4'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CreateProductForm