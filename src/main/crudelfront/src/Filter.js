import { useState } from "react"
import { onsubmitFilterlist } from "./Boad"
import { Result } from "./Result"

export const Filter=()=>{

    const[resultview,setResultview]=useState(false)
    const[tmpresult,setTmpresult]=useState([])

    const[fil,setfil]=useState({
        "cost":0,
        "brand":"",
        "model":"",
        "type":""
    })

    const collect=(eve)=>{
        const{name,value}=eve.target
        setfil((old)=>
        {
            return{
                ...old,
                [name]:value               
            }
        }) 

    }

    const doFilter=async()=>{
        const t=await onsubmitFilterlist(fil)
        if(t.data)
        {
            if(t.data!="err")
            {
                setResultview(true)
                setTmpresult(t.data)
            }
            else{
                alert(t.data)
                setResultview(false)
            }
           
        }
        else{
            setResultview(false)
        }

    }
    return(
        <>
            {
                (resultview)?
                <>
                    <Result show={tmpresult}/>                    
                </>
                :
                <>
                    <div className="container mt-5">
                        <h1 className="text-center display-5 text-success">ShortListed Data</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-16">
                                <div className="form group ">
                                    <label>Filter By cost</label>
                                        <input onChange={collect} value={fil.cost} className="form-control" name="cost" placeholder="Enter the price for filter" type="text"></input>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <label>Filter By Brand</label>
                                        <input onChange={collect} value={fil.brand} className="form-control" name="brand" placeholder="Enter the brand for filer" type="text-success"></input>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <label>Filter By Type</label>
                                        <input onChange={collect} value={fil.type} className="form-control" name="type" placeholder="Enter the type for filter" type="text-primary"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Filter By Model</label>
                                    <input onChange={collect} value={fil.model} className="form-control" name="model" placeholder="Enter the model for filter" type="text-secondary"></input>
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <button className="btn btn-outline-info" onClick={doFilter}>
                                        <i class="bi bi-sort-down">Filter</i> 
                                    </button>
                                </div>                      

                            </div>

                        </div>

                    </div>
                </>
        
            }
        </>
    )
}