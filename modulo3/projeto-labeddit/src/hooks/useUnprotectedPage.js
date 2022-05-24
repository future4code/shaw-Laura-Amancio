import {useLayoutEffect} from 'react'
// React.useLayoutEffect = React.useEffect 
import { useNavigate } from 'react-router-dom';
import { goToFeedPage } from '../routes/condinators';

export const useUnprotectedPage = () =>{
    const navigate = useNavigate();

    useLayoutEffect(()=>{
        const token  = window.localStorage.getItem("token");
        if(token){
            goToFeedPage(navigate)
        }    
    },[navigate])
}