import axios from "axios"
// const m="murugan:kgmurugan"
// const token=btoa(m)

export const onSubmitLogout=async()=>{
    try{
        const t = await axios.get(`/login?logout`)
        sessionStorage.removeItem('user')
        return
    }catch(err){
        alert(err)
    }
}

export const onSubmitLogin=async(object)=>{
    const credentials=object.username+":"+object.password
    const tok=btoa(credentials)
    try{
        const t = await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${tok}`
            }
        })
        if(t.data){
            sessionStorage.setItem("user",tok)
            return;
        }
    }catch(err){
        alert(err)
    }
}

export const onsubmitSignup=async(obj)=>{
    try{
        const t=await axios.post(`/api/Signup/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}
export const onsubmitUpdateCond=async(obj)=>{
    try{
        const t=await axios.put(`/api/ups/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t

    }
    catch(err){
        alert(err)
    }
}
export const onsubmitDeleteCond=async(obj)=>{
    try{
        const t=await axios.delete(`/api/deleall/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}
export const onsubmitFilterlist=async(object)=>{
    try{
        if(object.cost!=0&&object.brand==""&&object.type==""&&object.model=="")
        {
            const t= await axios.get(`/api/byamount/${object.cost}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.removeItem('user')}`
                }
        
            })
            return t
        }
        else if(object.cost==0&&object.brand!=""&&object.type!=""&&object.model=="")
        {
            const t= await axios.get(`/api/bytwo/${object.brand}/${object.type}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.removeItem('user')}`
                }
        
            })
             return t
        }
        else if(object.cost==0&&object.brand==""&&object.type==""&&object.model!="")
        {
            const t= await axios.get(`/api/bysome/${object.model}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.removeItem('user')}`
                }
            })
            return t
        }
        else
        {
            return{"err":"Invalid filter"}
        }
    }
    catch(err){
        alert(err)
    }

}

export const onsubmitDelete=async(ref)=>{
    try{
        const t=await axios.delete(`/api/dele/${ref}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}
export const onsubmitUpdate=async(obj)=>{
    try{
        const t=await axios.put(`/api/up`, obj,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}

export const onsubmitRead=async(id)=>{
    try{
        const t=await axios.get(`/api/${id}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onsubmitList=async()=>{
    try{
        const t=await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}
export const onsubmitCreate=async(obj)=>{
    try{
        const t=await axios.post(`/api/new`,obj,{
            headers:{
                "Authorization":`Basic ${sessionStorage.removeItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}