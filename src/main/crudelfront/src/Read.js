import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onsubmitRead } from "./Boad"

export const Read=()=>{
    
    const {key}=useParams()

    const [single,setSingle]=useState({})

    const onRead=async()=>{
        alert(key)
        const tmp= await onsubmitRead(key)
        setSingle(tmp.data)
    }

    useEffect(()=>{
        onRead()
    },[])
    return(
        <>
            <div className="alert alert-primary text-center">
                <h1 className="alert-heading text-center">Television Details </h1>
                    <div className="row justify-content-center">
                        <p>{single.tvId}</p>
                        <p>{single.model}</p>
                        <p>{single.brand}</p>
                        <p>{single.cost}</p>
                        <p>{single.size}</p>
                        <p>{single.type}</p>
                    </div>

            </div>
            
        </>
    )

}