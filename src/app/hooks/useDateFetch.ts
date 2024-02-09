import { useGetTimesQuery } from "@app/redux/APIs/timeApi";

export function useDateFetch(){
    
const {data}=useGetTimesQuery('')
return data
}