import { useContext, useEffect } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom"

export default function Signup() {
const {setLogin, login} = useContext(UserContext)
 const navigate = useNavigate()

    useEffect(()=> {
        const userLS = localStorage.getItem('userLogin')
        if(!userLS){
            setLogin(false)
        }}, [])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch('https://blog-app-api-eolcmezqwa-uc.a.run.app/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(user => { 
                if (user.message === "User already exists with this email"){
                    setLogin(false)
                } else {
                    setLogin(true)
                }
        })
            .catch(console.error)
    }
    return (
        <>
        <h2 >Please Sign Up:</h2>
        <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="email">
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label htmlFor="password">
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Sign up</button>
        </form>
        </>
    )
}