import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Nav() {
    const [loggedIn, setLoggedIn] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('myUser')

        if (userLocalStorage) {
            setLoggedIn(true)
        }
    }, [])

    const goToLogin = () => {
        nav('/home')
    }

    const handleLogOut = () => {
        localStorage.clear()
        nav('/')
    }

    return (
        <header>
            <ul>
                <li>
                    <a href="/home" >
                        Home
                    </a>
                </li>
                {!loggedIn &&
                    <li>
                        <a href="/"><button onClick={goToLogin}>
                            Log In
                        </button></a>
                    </li>
                }
                {loggedIn &&
                    <>
                        <li>
                            <a href="/post">
                                Add Post
                            </a>
                        </li>
                        <li>
                            <button onClick={handleLogOut}>LogOut</button>
                        </li>
                    </>}
            </ul>
        </header>
    )
} 