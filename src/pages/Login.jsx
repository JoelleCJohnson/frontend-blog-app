import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"

export default function Login() {
    const navigate = useNavigate()
    const { login, setLogin, data, setData } = useContext(UserContext)

    useEffect(() => {
        if (login === true) {
            navigate('/home')
        }
    }, [login])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch('https://blog-app-api-eolcmezqwa-uc.a.run.app', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(user => {
                console.log('user -->', user.message)
                if (user.message === 'Unsuccessful') {
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
        <>
            <h2>Please Log In:</h2>
            <div className="loginContainer">


                <form action="submit" onSubmit={handleFormSubmit} className="loginForm">

                    <div className="inputGroup">
                        <label htmlFor="email" className="emailLabel">
                            Email:
                            <input type="email" name="email" id="" />
                        </label>
                    </div>

                    <br />
                    <br />

                    <div className="inputGroup">
                        <label htmlFor="password">
                            Password:
                            <input type="password" name="password" />
                        </label>
                    </div>

                    <button type="submit" className="loginButton">Log in</button>

                </form>
            </div>
        </>
    )
}