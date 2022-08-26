import { useState } from "react"
import { onsubmitCreate } from "./Boad"

export const Create=()=>{

    const[pack,setPack]=useState({
        "model":"",
        "brand":"",
        "cost":0,
        "size":0,
        "type":""
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setPack((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const onAdd=async()=>{
        const tmp=await onsubmitCreate(pack)
        alert(JSON.stringify(tmp.data))

    }

    const onCancel=()=>{
        setPack(()=>{
            return{
            "model":"",
            "brand":"",
            "cost":0,
            "size":0,
            "type":""
            }
        })
    }

    return(
        <>
            <div className="container mt-5">
                <h1 className="text-center text-primary"> Add New Stock in Television Stock Details</h1>
                <div className="row-justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 shadow p-4" style={{backgroundColor:'tan',borderRadius:'20px'}}>
                        <div className="row">
                            <label>Television Model</label>                        
                                <input value={pack.model} onChange={gather} type="text" name="model" placeholder="Model Name" className="form-control"></input>
                        </div>
                        <div className="row">
                            <label>Television Type</label>                        
                                <input value={pack.type} onChange={gather} type="text" name="type" placeholder="Model Type" className="form-control"></input>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <label>Television Cost</label>                        
                                    <input value={pack.cost} onChange={gather} type="text" name="cost" placeholder="Model Cost" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <label>Television Size</label>                        
                                    <input value={pack.size} onChange={gather} type="text" name="size" placeholder="Model Size" className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <label>Television Brand</label>                        
                                <input value={pack.brand} onChange={gather} type="text" name="brand" placeholder="Model Brand" className="form-control"></input>
                        </div>
                        <div className="row mt-3 justify-content-around">
                            <button className="btn btn-outline-danger col-1" onClick={onAdd}>
                            <i class="bi bi-life-preserver"></i>
                            </button>
                            <button className="btn btn-outline-success col-1" onClick={onCancel}>
                            <i class="bi bi-browser-firefox"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}