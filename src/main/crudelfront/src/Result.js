import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onsubmitDelete, onsubmitFilterlist } from "./Boad"

export const Result=(pro)=>{

    const navi=useNavigate()    

    const[shot,setShot]=useState(pro.show)

    return(
        <>
            <div className="container mt-5">
                <h1 className="text-success text-center display-5">Available Stock</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 p-3 shadow rounded-3">
                        {
                            (typeof(shot[0])==="string")?
                            <>
                                <div className="d-flex flex-row flex-nowrap overflow-auto">
                                    {
                                        shot.map((str)=>(
                                            <div className="card p-5 shadow rounded-5">
                                                <h1 className="card-title display-4">{str}</h1>
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                                
                            </>
                            :
                            <>
                                <div className="table-responsive">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Stock Id</th>
                                                <th>Stock Name</th>
                                                <th>Stock Brand</th>
                                                <th>Size of Monitor</th>
                                                <th>Stock Price</th>
                                                <th>Stock Type</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                shot.map((obj,pos)=>(
                                                    <tr>
                                                        <td>
                                                            <a className="btn btn-info" href={`/#/open/${obj.tvId}`}>
                                                                {obj.tvId}
                                                            </a>
                                                        </td>
                                                        <td>{obj.model}</td>
                                                        <td>{obj.brand}</td>
                                                        <td>{obj.cost}</td>
                                                        <td>{obj.size}</td>
                                                        <td>{obj.type}</td>
                                                        <td>
                                                            <a className="btn btn-outline-warning" href={`/#/modify/${obj.tvId}`}>
                                                                <i class="bi bi-box-arrow-up-right"></i>
                                                            </a>
                                                            <button className="btn btn-outline-danger" onClick={async()=>{
                                                                const tmp = await onsubmitDelete(obj.tvId)
                                                                alert(tmp.data)
                                                                navi("/#/view")
                                                            }}>
                                                                <i class="bi bi-eraser"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

