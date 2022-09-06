import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onsubmitDelete, onsubmitList } from "./Boad"

export const List=()=>{

    const navi=useNavigate()

    const[stock,Setstock]=useState([])

    const onList=async()=>{
        const tmp=await onsubmitList()
        Setstock(tmp.data)
    }

    useEffect(()=>{
        onList()
    },[])

    return(
        <>
           <div className="continer mt-4">
                <h1 className="text-danger text-center display-4">Available Stock are: </h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10 col-sm-12" style={{backgroundColor:"MediumSeaGreen"}}>
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap">
                                    <thead>
                                            <th>Stock Id</th>
                                            <th>Stock Name</th>
                                            <th>Stock Brand</th>
                                            <th>Stock Cost</th>
                                            <th>Stock Size</th>
                                            <th>Stock type</th>
                                            <th>Actions</th>
                                    </thead>
                                    <tbody>
                                        {
                                            stock.map((obj,pos)=>(
                                                <tr>
                                                    <td>
                                                        <a className="btn btn-success" href={`/#/open/${obj.tvId}`}>
                                                            {obj.tvId}
                                                        </a>
                                                    </td>
                                                        <td>{obj.model}</td>
                                                        <td>{obj.brand}</td>
                                                        <td>{obj.cost}</td>
                                                        <td>{obj.size}</td>
                                                        <td>{obj.type}</td>                                                        
                                                    <td>
                                                        <a className="btn btn-outline-primary "href={`/#/modify/${obj.tvId}`}>
                                                            <i class="bi bi-card-checklist">Change</i>
                                                        </a>
                                                        <button className="btn btn-outline-dark" onClick={async()=>{
                                                            const tmp=await onsubmitDelete(obj.tvId)
                                                            alert(tmp.data)
                                                            navi("/#/view")                                                    
                                                            }}>
                                                            <i class="bi bi-folder-x">Delete </i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

           </div>
        </>
    )

}