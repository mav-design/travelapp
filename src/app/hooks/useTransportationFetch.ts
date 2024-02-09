import { useGetTransportationQuery } from "@app/redux/APIs/transportationApi";

export function useTourFetch(){
    
const {data}=useGetTransportationQuery('')
return data
}