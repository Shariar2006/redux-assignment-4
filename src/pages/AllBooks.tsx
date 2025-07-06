import Books from '@/components/modules/books/Books'
import BooksTable from '@/components/modules/books/BooksTable'

export default function AllBooks() {
  return (
    <div className="py-14 space-y-10 px-4">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Explore Our Collection
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6 max-w-xl mx-auto">
          Discover knowledge, stories, and inspiration—one book at a time.
        </p>
      </div>
      <BooksTable />
    </div>
  )
}
