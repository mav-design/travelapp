import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const transportationApi =createApi({
    reducerPath:'transportationApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://my-json-server.typicode.com/mav-design/travelAppServer/'}),
    endpoints:(build)=>({
        getTransportation:build.query({
            query:()=>'transportation'
        })
    })
})

export const{useGetTransportationQuery}=transportationApi