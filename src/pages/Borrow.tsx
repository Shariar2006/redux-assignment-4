import BorrowForm from "@/components/modules/borrow/BorrowForm"
import { useGetSingleBookQuery } from "@/redux/api/baseApi"
import { useParams } from "react-router-dom"

export default function Borrow() {

    const { id } = useParams<{ id: string }>()

    const { data, isLoading } = useGetSingleBookQuery(id)

    if (isLoading) {
        return <p>Loading...</p>
    }

    console.log(data.data)

    return (
        <div className="py-8 max-w-2xl mx-auto space-y-6 px-4">
            <div className="text-center">
                <h3 className="text-3xl">{data?.data?.title}</h3>
                <>
                    {
                        data?.data?.available ? <></> : <p className="text-red-500">You can't borrow this book</p>
                    }
                </>
            </div>
            <BorrowForm book={data.data} />
        </div>
    )
}
