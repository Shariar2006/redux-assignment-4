import EditBookForm from '@/components/modules/books/EditBookForm'
import { useGetSingleBookQuery } from '@/redux/api/baseApi'
import { useParams } from 'react-router-dom'

export default function EditBook() {

    const { id } = useParams<{ id: string }>()

    const { data, isLoading } = useGetSingleBookQuery(id)

    if (isLoading) {
        return <p>Loading...</p>
    }

  return (
    <div className='py-8 px-4 max-w-2xl mx-auto space-y-4'>
      <h4 className='text-2xl text-center'>Edit Details of "{data?.data?.title}"</h4>
        <EditBookForm book={data?.data}/>
    </div>
  )
}
