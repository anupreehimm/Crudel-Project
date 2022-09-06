import { useState } from "react"
import { onsubmitSignup } from "./Boad"

export const SignUp=()=>{

    const [sign,setSign]=useState({
        "empName":"",
        "username":"",
        "password":"",
        "mobileNo":0,
        "email":""
})
    const gather=(eve)=>{
        const{name,value}=eve.target
        setSign((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const onSign=async()=>{
        const t=await onsubmitSignup(sign)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
        
    }
    const OnRest=async()=>{
        setSign(()=>{
            return{
                "empName":"",
                "username":"",
                "password":"",
                "mobilNo":0,
                "email":""
            }

        })    
    }

    return(
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12 shadow rounded-5 p-4">
                        <div className="form-group">
                            <label>Employee Name</label>
                            <input type="text" name="employee" placeholder="Enter employee name" className="form-contorl" value={sign.empName} onChange={gather}></input>
                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" name="user" placeholder="Enter user name" className="form-contorl" value={sign.username} onChange={gather}></input>
                        </div>
                        <div className="form-group">
                            <label>password please</label>
                            <input type="password" name="password" placeholder="Enter your password" className="form-contorl" value={sign.password} onChange={gather}></input>
                        </div>
                        <div className="form-group">
                            <label>Employee mobileNo</label>
                            <input type="text" name="mobileno" placeholder="Enter employee mobileno" className="form-contorl" value={sign.mobileNo} onChange={gather}></input>
                        </div>  
                        <div className="form-group">
                            <label>Employee emailid</label>
                            <input type="text" name="email" placeholder="Enter employee email" className="form-contorl" value={sign.email} onChange={gather}></input>
                        </div>
                        <div className="mt-4 row justify-content-around">
                            <button className="col-1 btn btn-success" onClick={onSign}>
                                <i class="bi bi-person-circle"></i>
                            </button>
                            <button className="col-1 btn btn-dark" onClick={OnRest}>
                                <i class="bi bi-slash-circle"></i>
                            </button>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}