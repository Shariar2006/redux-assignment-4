import { useGetBooksQuery } from "@/redux/api/baseApi"
import BookCard from "./BookCard"
import type { IBook } from "@/types/book.interface"

export default function Books() {

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
        <div className="py-14 space-y-10">
            <div className="">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Explore Our Collection
                </h2>
                <p className="text-center text-gray-500 text-sm mb-6 max-w-xl mx-auto">
                    Discover knowledge, stories, and inspiration—one book at a time.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.data.map((book: IBook) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>

        </div>
    )
}
