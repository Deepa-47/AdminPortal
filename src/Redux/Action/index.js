export const adduser=(data)=>{
    return{
        type:"ADD_USER",
        payload:{
            id:new Date().getTime().toString(),
            firstname:data.firstname,
            lastname:data.lastname,
            username:data.username,
            password:data.password,
            address:data.address,
            gender:data.gender,
            status:data.status
        }
    }

}

export const deleteuser=(id)=>{
    return{
        type:"DELETE_USER",
        id
    }
}

export const updateuser=(id,data)=>{
    return{
        type:"UPDATE_USER",
        id,
        payload:{
            
            firstname:data.firstname,
            lastname:data.lastname,
            username:data.username,
            password:data.password,
            address:data.address,
            gender:data.gender,
            status:data.status
        }
    }
}

export const login=(username,password)=>{
    return{
        type:"LOGIN",
        payload:{
            username:username,
            password:password

        }
    }
}