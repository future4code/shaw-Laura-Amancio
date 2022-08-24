import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {goToFeedPage} from "../routes/coordinator"

const useUnprotectdPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
           goToFeedPage(navigate)
        }
    }, [navigate])
} 

export default useUnprotectdPage