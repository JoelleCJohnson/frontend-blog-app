import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"

export default function AddPost() {
    const nav = useNavigate()
    const { setBlogPosts } = useContext(UserContext)
    const { login } = useContext(UserContext)

    const handleFormSubmit = e => {
        e.preventDefault()
        const formData = {}
        formData.title = e.target.title.value
        formData.content = e.target.content.value


        fetch('https://blog-app-api-eolcmezqwa-uc.a.run.app/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => setBlogPosts(data))
            .catch(err => console.error(err))

        nav("/home")
    }

    return (
        <form action="" onSubmit={e => { handleFormSubmit(e) }}>
            <label htmlFor="title">
                Title:
                <input type="text" name="title" />
            </label>
            <br />
            <label htmlFor="content">
                Content:
                <input type="text" name="content" />
            </label>
            <br />
            <button type="submit">Add Blog Post</button>

        </form>

    )
}