import { Button } from '@/components/ui/button'
import type { IBook } from '@/types/book.interface'
import { Link } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";
import DeleteBook from './DeleteBook';

interface IProps {
    book: IBook
}

export default function BookCard({ book }: IProps) {

    return (
        <div className="rounded-lg p-4 shadow shadow-primary/90 bg-white">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-xs text-gray-600 my-1">by {book.author}</p>
            <p className="text-sm text-gray-500">{book.genre}</p>

            <p className="mt-2 text-sm text-gray-700">
                {book?.description && book?.description?.length > 50
                    ? `${book?.description?.slice(0, 50)}...`
                    : book.description}
            </p>

            <p className="mt-2">
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {book.available ? 'Available' : 'Not Available'}
                </span>
            </p>

            <div className="mt-4 flex gap-2">
                <Link to={`/books/${book?._id}`}><Button className="bg-primary">View</Button></Link>
                <Link to={`/edit-book/${book?._id}`}><Button className="border bg-white hover:bg-gray-100 text-black border-black"><CiEdit /></Button></Link>
<DeleteBook bookId={book?._id}/>
                <Link to={`/borrow/${book?._id}`}><Button variant="outline">Borrow</Button></Link>
            </div>
        </div>
    )
}
