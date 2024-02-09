import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tourApi =createApi({
    reducerPath:'tourApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://my-json-server.typicode.com/mav-design/travelAppServer/'}),
    endpoints:(build)=>({
        getTours:build.query({
            query:()=>'tours'
        })
    })
})

export const{useGetToursQuery}=tourApi