import { useGetToursQuery } from "@app/redux/APIs/tourApi";

export function useTourFetch(){
    
const {data}=useGetToursQuery('')
return data
}