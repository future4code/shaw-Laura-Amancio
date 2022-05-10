import {useLayoutEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { goToLoginPage } from '../routes/condinators';

export const useProtectedPage = () =>{
    const navigate = useNavigate();

    useLayoutEffect(()=>{
        const token  = window.localStorage.getItem("token");
        if(!token){
            goToLoginPage(navigate)
        }    
    },[navigate])
}