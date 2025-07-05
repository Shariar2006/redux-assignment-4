import { Button } from '@/components/ui/button'
import type { IBook } from '@/types/book.interface'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface IProps {
    book: IBook
}

export default function BookCard({book}: IProps) {
    return (
        <div className="rounded-lg p-4 shadow shadow-primary/90 bg-white">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="text-sm text-gray-500">{book.genre}</p>

            <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {book.description}
            </p>

            <p className="mt-2">
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {book.available ? 'Available' : 'Not Available'}
                </span>
            </p>

            {/* Optional Action Buttons */}
            <div className="mt-4 flex gap-2">
                <Button className="bg-primary">View</Button>
                <Button className="border bg-white hover:bg-white text-black border-black"><CiEdit /></Button>
                <Button className="border bg-white hover:bg-white text-red-500 border-red-500 "><RiDeleteBin6Line /></Button>
            </div>
        </div>
    )
}
