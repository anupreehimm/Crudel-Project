import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onsubmitDeleteCond } from "./Boad"

export const Remove=()=>{
    const navi=useNavigate()

    const[rem,setRem]=useState("")

    const collect=(eve)=>{
        setRem(eve.target.value)
    }

    const onDel=async()=>{
        const t= await onsubmitDeleteCond(rem)
        alert(JSON.stringify(t.data))
        navi("/view")
    }

    return(
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12" style={{backgroundColor:"Violet"}}>
                        <div className="form-group">
                            <label>Type for Stock Remove</label>
                            <input type="text" name="type" placeholder="Type of television" value={rem} onChange={collect} className="form-control" />
                            </div>
                            <button className="col-3 mt-2 btn btn-danger" onClick={onDel}>
                            <i class="bi bi-journal-x"></i>        
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}