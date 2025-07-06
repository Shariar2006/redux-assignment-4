import { useGetSingleBookQuery } from "@/redux/api/baseApi"
import { useParams } from "react-router-dom"

export default function BookDetails() {

    const { id } = useParams<{ id: string }>()

    const { data, isLoading } = useGetSingleBookQuery(id)

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-8">

            <h1 className="text-3xl font-bold text-gray-800 mb-2">{data?.data?.title}</h1>
            <p className="text-gray-600 text-sm mb-6">ISBN: {data?.data?.isbn}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">Author:</h2>
                        <p className="text-gray-700">{data?.data?.author}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">Genre:</h2>
                        <p className="text-gray-700">{data?.data?.genre}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">Availability:</h2>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
              ${data?.data?.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {data?.data?.available ? 'Available' : 'Not Available'}
                        </span>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">Total Copies:</h2>
                        <p className="text-gray-700">{data?.data?.copies}</p>
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">Description:</h2>
                        <p className="text-gray-700">{data?.data?.description || 'No description provided.'}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">Created At:</h2>
                        <p className="text-gray-600">{new Date(data?.data?.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold">Last Updated:</h2>
                        <p className="text-gray-600">{new Date(data?.data?.updatedAt).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
