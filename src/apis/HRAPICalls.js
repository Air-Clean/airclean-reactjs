
import { BRANCH, EMPLOYEE } from "../modules/HRModule";

// employee
export const callEmployeeList=({current})=>{
    let requestURL;

    if(current !== undefined || current !== null){
        requestURL =`http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee?offset=${current}`;

    }else{
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee`;
    }

    console.log('callEmployeeList 동작함')
    console.log(requestURL)

    console.log(window.localStorage.getItem('accessToken'))

    return async (dispatch,getState)=>{
        console.log('sdfadsfadslfkj;ldkj;ldakjf;alkdf')
        const result = await fetch(requestURL,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                Accept: '*/*',
                Authorization: 'Bearer ' + window.localStorage.getItem('accessToken'),
            },
        }).then(res=>res.json())

        if(result.status === 200){
            console.log('callEmployeeList 조회 성공 ',result)

            dispatch({type : EMPLOYEE , payload : result.data })
        }
    }
}

export function callSoftDeleteEmployee({deleteMember}){

    console.log(JSON.stringify(deleteMember))
    console.log("callSoftDeleteEmployee 동작")
    console.log("parameter 값",deleteMember)
    
    return async (dispatch,getState)=>{
        console.log("여기 들어옴?")
        const requestUrl = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/soft-delete`;

        console.log(requestUrl)
        const result = await fetch(requestUrl,{
            method : 'PUT',
            headers :{
                'Content-Type' : 'application/json',
                Accept: "*/*",
                Authorization : 'Bearer '+window.localStorage.getItem('accessToken'),
            },
            body : JSON.stringify(deleteMember)
        }).then(res=>res.json())

        if(result.status ===200){
            console.log('삭제성공')
            dispatch({type : EMPLOYEE , payload : result.data})
        }
    }


}

export function modifyEmployee({formData ,employeeCode}){
    
    
    console.log('[formdata ]', formData.get("memberId"))
        console.log('[formdata ]', formData.get("memberName"))
        console.log('[formdata ]', formData.get("dept"))
        console.log('[formdata ]', formData.get("position"))
        console.log('[formdata ]', formData.get("isPass"))
        console.log('[formdata ]', formData.get("phone"))
        console.log('[formdata ]', formData.get("email"))
        console.log('[formdata ]', formData.get("address"))
        console.log('[formdata ]', formData.get("image"))

    return async (dispatch,getState)=>{
        
        const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/${employeeCode}`
        
        console.log('url 주소',requestURL);

        const result = await fetch(requestURL,{
            method : "PUT",
            headers : {
                Accept : '*/*',
                Authorization : "Bearer "+window.localStorage.getItem('accessToken')
            },
            body : formData
        }).then(res=>res.json())

        if(result.status===200){
            console.log('수정성공')
            dispatch({type : EMPLOYEE, payload : result.data})
        }
        
    }


}

export function registEmployee({form}){
    
    console.log('registEmployee 동작')

    

    return async (dispacth , getState) =>{
        const requestUrl = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee`;
        console.log(requestUrl)

        const result = fetch(requestUrl,{
            method : "POST",
            headers : {
                Accept : '*/*',
                Authorization : "Bearer "+window.localStorage.getItem('accessToken')
            },
            body : form
        })

        if(result.status === 200){
            dispacth({type : EMPLOYEE , payload : result.data})
        }
    }
}

export function softDeleteEmployee({current,amount}){
    console.log('softDeleteEmployee 동작')

    let requestURL= null;
    
    if(current){

        if(amount){
            requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/unstatus?offset=${current}&amount=${amount}`
        }
        else{
            requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/unstatus?offset=${current}`
        }
    }else{
        if(amount){
            requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/unstatus?amount=${amount}`
        }
        else{
            requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/unstatus`
        }
       
    }

    return async (dispatch,getStatae) =>{
        const result= await fetch(requestURL,{
            method : "GET",
            headers : {
                'Content-Type' : "application/json",
                Accept : "*/*",
                Authorization : "Bearer "+window.localStorage.getItem('accessToken')
            }
        }).then(res=>res.json())
        
        if(result.status===200){
            dispatch({type: EMPLOYEE , payload : result.data})
        }
    }
}

export function callEmployeeDeleteApi({killMember}){
    console.log('callEmployeeDeleteApi 동작함',killMember)

    const requestUrl = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee`
    return async (dispatch, getState) =>{

        const result = await fetch(requestUrl,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                Accept : '*/*',
                Authorization : "Bearer "+window.localStorage.getItem('accessToken')
            },
            body : JSON.stringify(killMember)
        }).then(res=>res.json())

        if(result.status===200){
            dispatch({type : EMPLOYEE , payload : result.data})
        }
    }
}

export function callEmployeeBackApi({saveMember}){
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/employee/status`;

    console.group("callEmployeeBackApi url",requestURL)
    return async (dispatch, getState) =>{
        const result = await fetch(requestURL,{
            method : "PUT",
            headers : {
                'Content-Type' : 'application/json',
                Accept : '*/*',
                Authorization : 'Bearer '+window.localStorage.getItem('accessItem')
            },
            body : JSON.stringify(saveMember)
        }).then(res=>res.json())

        if(result.status===200){
            console.log('되살리기 성공')
            dispatch({type : EMPLOYEE , payload : result.data})
        }
    }
}


// branch

export const callBranchList=({current})=>{
    let requestURL;

    if(current !== undefined || current !== null){
        requestURL =`http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/branch?offset=${current}`;

    }else{
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/branch`;
    }

    console.log('callBranchList 동작함')

    return async (dispatch,getState)=>{
        
        const result = await fetch(requestURL,{
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                Accept: '*/*',
                Authorization: 'Bearer ' + window.localStorage.getItem('accessToken'),
            },
        }).then(res=>res.json())

        if(result.status === 200){
            console.log('callEmployeeList 조회 성공 ',result)

            dispatch({type : BRANCH , payload : result.data })
        }
    }
}