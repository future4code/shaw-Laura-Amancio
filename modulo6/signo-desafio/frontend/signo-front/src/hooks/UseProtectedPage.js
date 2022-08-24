import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {goToLoginPage} from "../routes/coordinator"

const useProtectdPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token || token === null){
           goToLoginPage(navigate)
        }
    }, [navigate])
} 

export default useProtectdPage