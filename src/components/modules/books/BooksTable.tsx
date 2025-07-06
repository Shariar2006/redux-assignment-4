import { useGetBooksQuery } from '@/redux/api/baseApi'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { IBook } from '@/types/book.interface'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'
import DeleteBook from './DeleteBook'

export default function BooksTable() {

    const { data, isLoading } = useGetBooksQuery(undefined, {
        pollingInterval: 30000,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    })

    console.log(data)

    if (isLoading) {
        return <h1>loading...</h1>
    }

    return (
        <Table>
            <TableCaption>A list of all books.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Book Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Total Copies</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className='text-right'>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data.data.map((book: IBook) => (
                        <TableRow key={book._id}>
                            <TableCell className="font-medium">{book?.title}</TableCell>
                            <TableCell>{book?.author}</TableCell>
                            <TableCell>{book?.genre}</TableCell>
                            <TableCell>{book?.isbn}</TableCell>
                            <TableCell>
                                {book?.description && book?.description?.length > 50
                                    ? `${book?.description?.slice(0, 50)}...`
                                    : book.description}
                            </TableCell>
                            <TableCell className='text-center'>{book?.copies}</TableCell>
                            <TableCell>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
              ${book?.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {book?.available ? 'Available' : 'Not Available'}
                                </span>
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2 justify-end items-center">
                                    <Link to={`/books/${book?._id}`}><Button className="bg-primary">View</Button></Link>
                                    <Link to={`/edit-book/${book?._id}`}><Button className="border bg-white hover:bg-gray-100 text-black border-black"><CiEdit /></Button></Link>
                                    <DeleteBook bookId={book?._id}/>
                                    <Link to={`/borrow/${book?._id}`}><Button variant="outline">Borrow</Button></Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
