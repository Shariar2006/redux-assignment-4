import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'
import type { IBook } from '@/types/book.interface'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { useCreateBorrowMutation } from '@/redux/api/baseApi'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

interface IProps {
    book: IBook
}

export default function BorrowForm({ book }: IProps) {
    const navigate = useNavigate()
    const form = useForm()

    const [createBorrow, { isLoading }] = useCreateBorrowMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const borrowData = {
            ...data,
            book: book?._id
        }
        console.log(borrowData)

        const res = await createBorrow(borrowData)
        console.log(res)
        if (res.data.success) {
            toast(res.data.message)
            form.reset()
            navigate('/borrow-summary')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} max={book.copies} min={0} value={field.value || ''} placeholder='Number of copies' />
                            </FormControl>
                            <p className='text-sm text-gray-500'>Available copies: {book.copies}</p>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dueDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Due date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date()
                                        }
                                        captionLayout="dropdown"
                                    />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                />

                <Button disabled={!book?.available} className={`${!book.available ? 'cursor-not-allowed' : ''} `} type="submit">{isLoading ? 'Please wait...' : 'Borrow'}</Button>
            </form>
        </Form>
    )
}
