import { userData } from "../../DataBase/UserData";
import { admindata } from "../../DataBase/AdminData";
const initialUserData={
    data:userData,
    admindata:admindata,
    message:"",
    loggeduser:localStorage.getItem("username")
};

export const UserReducer=(state=initialUserData,action)=>{
    switch(action.type){

        case "ADD_USER":
            const userData=action.payload;

            return{
                ...state,
                data:
                [
                    ...state.data,
                    {
                        id:userData.id,
                        firstname:userData.firstname,
                        lastname:userData.lastname,
                        username:userData.username,
                        password:userData.password,
                        address:userData.address,
                        gender:userData.gender,
                        status:userData.status
                    }
                ]
            }

        case "DELETE_USER":
            const userid=action.id;
            const remainsData=state.data.filter((list)=>list.id!==userid);
            return{
                ...state,
                data:remainsData
            }

        case "UPDATE_USER":
            const uuid=action.id;
            const updateddata=action.payload;
            let currentuserindex=-1;
            const findindexofuser=state.data.filter((list,index)=>{
                if(list.id===uuid){
                    currentuserindex=index;
                    return list
                }
            });
            const uremainsData=state.data;
            const currentuser=uremainsData[currentuserindex];
            currentuser.firstname=updateddata.firstname;
            currentuser.lastname=updateddata.lastname;
            currentuser.username=updateddata.username;
            currentuser.address=updateddata.address;
            currentuser.gender=updateddata.gender;
            currentuser.status=updateddata.status;
            return{
                ...state,
                data:[...uremainsData]
                
            }
            
        case "LOGIN":
            const authdata=action.payload;
            const admin=state.admindata;
            const logedData=admin.filter((list)=>{
                if(list.username===authdata.username && list.password===authdata.password)
                    return list
            });
            if(logedData.length>0){
                localStorage.setItem("username",logedData.username)
            }
            return {
               ...state,
               message:"updated"
            }
            
        default:
            return state
    }
       
}