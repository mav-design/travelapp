import { useGetTimesQuery } from "@app/redux/APIs/timeApi";

export function useTimeFetch(){
    
const data=useGetTimesQuery('time')
console.log(data);

return data
}