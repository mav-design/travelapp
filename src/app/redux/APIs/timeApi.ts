import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const timeApi =createApi({
    reducerPath:'timeApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://my-json-server.typicode.com/mav-design/travelAppServer/'}),
    endpoints:(build)=>({
        getTimes:build.query({
            query:(name)=>{
                console.log(name);

             return `/${name}`  
            }
        })
    })
})

export const{useGetTimesQuery}=timeApi