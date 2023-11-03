import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        localStorage.setItem('myUser', JSON.stringify(formData))
        navigate('/home')
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