"use client"

import React, { useState } from 'react'
import IconNewFeedback from '../icons/IconNewFeedback'
import SelectDropdown from '../select-dropdown/SelectDropdown'
import { PRODUCT_FILTERS_LIST, PRODUCT_STATUS_LIST } from '@/constants'
import SelectButton from '../select-dropdown/SelectButton'
import { useForm } from 'react-hook-form'
import { ProductSchemaType, productSchema } from '@/validations/productSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import InputErrorMessage from './InputErrorMessage'
import Button from '../ui/Button'
import { BasicResponse, CreateProductResponseType, EditProductFeedbackResponseType, ProductModelType } from '@/types'
import IconEditFeedback from '../icons/IconEditFeedback'
import DeleteProductBtn from '../buttons/DeleteProductBtn'
import { useMutation } from '@tanstack/react-query'
import { createProductFeedback, editProductFeedback } from '@/actions/productActions'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import CancelBtn from '../buttons/CancelBtn'

type Props = {
    product?: ProductModelType;
}

function CreateProductForm({ product }: Props) {
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
    const [categoryItem, setCategoryItem] = useState(product ? product.category : PRODUCT_FILTERS_LIST[0])
    const [statusDropdownOpen, setStatusDropdownOpen] = useState(false)
    const [statusItem, setStatusItem] = useState(product ? product.status : PRODUCT_STATUS_LIST[0])
    const { handleSubmit, register, formState: { errors }, setValue } = useForm<ProductSchemaType>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: product ? product.title : "",
            details: product ? product.details : "",
            category: product ? product.category : PRODUCT_FILTERS_LIST[0],
            status: product ? product.status : PRODUCT_STATUS_LIST[0],
        }
    })
    const router = useRouter();
    const { userId } = useAuth();
    const { mutate: handleCreateProductFeedback, isPending } = useMutation({
        mutationFn: createProductFeedback,
        onSuccess: (result: BasicResponse<CreateProductResponseType>) => {
            if (result.data) {
                toast.success(result.message)
                router.push(`/product/${result.data._id}`)
            }
        },
        onError: (result: BasicResponse<CreateProductResponseType>) => {
            toast.error(result.error)
        }
    });

    const { mutate: handleEditProductFeedback, isPending: isPendingEdit } = useMutation({
        mutationFn: editProductFeedback,
        onSuccess: (result: BasicResponse<EditProductFeedbackResponseType>) => {
            if (result.data) {
                toast.success(result.message)
                router.push(`/product/${result.data._id}`)
            }
        },
        onError: (result: BasicResponse<EditProductFeedbackResponseType>) => {
            toast.error(result.error)
        }
    });

    function handleSetCategoryItem(item: string) {
        setCategoryItem(item)
        setValue("category", item)
    }

    function handleSetStatusItem(item: string) {
        setStatusItem(item)
        setValue("status", item)
    }

    function onSubmit(data: ProductSchemaType) {
        console.log(data)
        if (!product) {
            handleCreateProductFeedback({
                product: data,
                creatorId: userId!
            })
            return;
        }

        handleEditProductFeedback({
            product: data,
            creatorId: userId!,
            productId: product._id,
        })
    }

  return (
    <div className='container-4 relative pt-5 space-y-6'>
        <div className='absolute -top-7 left-7'>
            {product ? <IconEditFeedback /> : <IconNewFeedback />}
        </div>
        <h1 className='text-3 font-bold text-dark-2'>{product ? `Editing '${product.title}'` : "Create New Feedback"}</h1>
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

            {product && (
                <div className='flex flex-col'>
                    <label className='label-1'>Update Status</label>
                    <span className='input-help-text-1'>Change feature state</span>
                    <div className='relative'>
                        <SelectButton activeItem={statusItem} setDropdownOpen={setStatusDropdownOpen} />
                        <SelectDropdown dropdownList={PRODUCT_STATUS_LIST} dropdownOpen={statusDropdownOpen} setDropdownOpen={setStatusDropdownOpen} activeItem={statusItem} setActiveItem={handleSetStatusItem} topOffset={60} />
                    </div>
                </div>
            )}

            <div className='flex flex-col'>
                <label htmlFor="details" className='label-1'>Feedback Detail</label>
                <span className='input-help-text-1'>Include any specific comments on what should be improved, added, etc.</span>
                <Textarea id='details' name='details' register={register} errors={errors.details} />
                <InputErrorMessage errors={errors.details} />
            </div>

            <div className='flex flex-col gap-4 md:flex-row-reverse md:justify-between mt-3'>
                <div className='flex flex-col md:flex-row-reverse gap-4'>
                    <Button type='submit' disabled={isPending || isPendingEdit}>{isPending || isPendingEdit ? "Submitting..." : product ? "Save Changes" : "Add Feedback"}</Button>
                    <CancelBtn />
                </div>
                <div className='flex flex-col md:flex-row'>
                    {product && (
                        <DeleteProductBtn productId={product._id}>Delete</DeleteProductBtn>
                    )}
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreateProductForm