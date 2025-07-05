import { useGetBooksQuery } from "@/redux/api/baseApi"

export default function Books() {

    const { data, isLoading } = useGetBooksQuery(undefined, {
        pollingInterval: 30000,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    })

    console.log(data)

    if(isLoading){
        return <h1>loading...</h1>
    }

  return (
    <div className="py-20">
        fdasd
    </div>
  )
}
