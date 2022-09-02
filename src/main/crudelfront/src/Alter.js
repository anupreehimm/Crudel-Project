import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onsubmitUpdateCond } from "./Boad"


export const Alter=()=>{

    const navi=useNavigate()

    const[brn,setBrn]=useState("")

    const collect=(eve)=>{
        setBrn(eve.target.value)
    }
    const onDis=async()=>{
        await onsubmitUpdateCond(brn)
        navi("/view")

    }

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-5 shadow rounded-5">
                        <div className="form group">
                            <label>Brand to provide discount</label>
                            <input type="text" name="brand" placeholder="Brand name" value={brn} onChange={collect} className="form-control" />
                        </div>
                        <button className="col-3 mt-2 btn btn-info" onClick={onDis}>
                            <i class="bi bi-caret-up-square-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
           
}