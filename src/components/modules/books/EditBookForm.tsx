import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'
import { useUpdateBookMutation } from '@/redux/api/baseApi'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import type { IBook } from '@/types/book.interface'

interface IProps {
    book: IBook
}

export default function EditBookForm({ book }: IProps) {

    const navigate = useNavigate()
    const form = useForm({
        defaultValues: {
          title: book?.title,
          author: book?.author,
          genre: book?.genre,
          copies: book?.copies,
          isbn: book?.isbn,
          description: book?.description || '',
        },
      })

    const [updateBook, { isLoading }] = useUpdateBookMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await updateBook({id:book?._id, body:data})
        console.log(res)
        if (res.data?.success) {
            toast(res.data?.message)
            form.reset()
            navigate('/books')
        }
        console.log(data)
    }

    console.log(book)

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input required {...field} value={field.value || ''} placeholder='Title of book' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author name <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input required {...field} value={field.value || ''} placeholder='Author name' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Genre <span className='text-red-500'>*</span></FormLabel>
                            <Select required onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl className='w-full'>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a genre" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="FICTION">FICTION</SelectItem>
                                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="copies"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Copies <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input required type='number' {...field} min={0} value={field.value || 0} placeholder='Number of copies' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="isbn"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ISBN <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input required {...field} value={field.value || ''} placeholder='Enter ISBN' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about the book"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit">
                    {isLoading ? 'Please wait...' : 'Save Changes'}
                </Button>
            </form>
        </Form>
    )
}
