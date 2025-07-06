import AddBookForm from '@/components/modules/books/AddBookForm'

export default function AddBook() {
  return (
    <div className='py-8 px-4 max-w-2xl mx-auto space-y-4'>
      <h4 className='text-2xl text-center'>Create a book</h4>
      <AddBookForm/>
    </div>
  )
}
