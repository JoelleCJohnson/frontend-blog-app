import { useContext, useEffect } from "react"
import { UserContext } from "../App"

export default function CardContainer() {
    const { blogPosts, setBlogPosts } = useContext(UserContext)
    const {login } = useContext(UserContext)

    // 1. As soon as component loads, fetch data

    useEffect(() => {
        fetch('https://blog-app-api-eolcmezqwa-uc.a.run.app/home')
            .then(res => res.json())
            // 2. Put data array in state variable
            .then((data) => setBlogPosts(data))
            .catch(err => console.error(err))
    }, [])



    return (
        <>
            <div className="cardContainer">
                {blogPosts.map((singlePost, index) => {
                    // 4. Return jsx from the map
                    return (
                        <div className="singleCard" key={singlePost._id}>
                            <img src={`https://source.unsplash.com/random/${index}`} alt="" srcSet="" />
                            <h2>Title: {singlePost.title}</h2>
                            <p>{singlePost.content}</p>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}