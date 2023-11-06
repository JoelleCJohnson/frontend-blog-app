import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"

export default function Login() {
    const navigate = useNavigate()
    const { login, setLogin, data, setData } = useContext(UserContext)

    useEffect(()=> {
       if (login === true){
        navigate('/home')
       }
    }, [login])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch('http://localhost:8080/', {
            method : 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(user => {
                console.log('user -->', user.message)
                if(user.message === 'Unsuccessful'){
                    setLogin(false)
                } else {
                    setLogin(true)
                    //localstorage
                    localStorage.setItem('userLogin', JSON.stringify(formData))
                }
            })
            .catch(console.error)
        
        // navigate('/home')
    }

    return (
        <div>

            <h2>Please Log In:</h2>

            <form action="submit" onSubmit={handleFormSubmit} >

                <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="" />
                </label>

                <br />

                <label htmlFor="password">
                    Password:
                    <input type="password" name="password" />
                </label>

                <button type="submit">Log in</button>

            </form>
        </div>
    )
}