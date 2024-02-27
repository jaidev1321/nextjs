"use client"
export default function Details(params){
    console.log(params.params);
    return <>
        <h3>User Details</h3>
        <h4>ID : {params.params.details}</h4>
    </>
}