import axios from "axios"

const auth="murugan:kgmurugan"
const token=btoa(auth)

export const onsubmitCreate=async(obj)=>{
    try{
        const t=await axios.post(`/api/new`,obj,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}