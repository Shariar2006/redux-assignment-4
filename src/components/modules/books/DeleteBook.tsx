import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useDeleteBookMutation } from '@/redux/api/baseApi';
import { toast } from 'sonner';
import { RiDeleteBin6Line } from 'react-icons/ri'

interface IProp {
    bookId: string
}

export default function DeleteBook({ bookId }: IProp) {

    const [deleteBook, { isLoading }] = useDeleteBookMutation()

    const handleDelete = async (id: string) => {
        console.log(id)
        const res = await deleteBook(id)
        if (res.data?.success) {
            toast(res.data?.message)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger><Button className="border bg-white hover:bg-red-50 text-red-500 border-red-500 "><RiDeleteBin6Line /></Button></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(bookId)}>{isLoading ? 'Please wait...' : 'Continue'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
