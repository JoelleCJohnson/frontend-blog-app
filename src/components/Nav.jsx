import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"

export default function Nav() {

    const { login, setLogin } = useContext(UserContext)
    
    const nav = useNavigate()

    const handleLogOut = () => {
        setLogin(false)
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
                {!login &&
                    <>
                        <li>
                            <a href="/signup">
                                    Sign Up
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                    Log in
                            </a>
                        </li>
                    </>
                }
                {login &&
                    <>
                        <li>
                            <a href="/post">
                                    Add Post
                            </a>
                        </li>
                        <li>
                            <button onClick={handleLogOut}>LogOut</button>
                        </li>
                    </>
                }
            </ul>
        </header>
    )
} 