import { useState, useEffect } from "react"

export default function CardContainer() {
    const [data, setData] = useState([])

    // 1. As soon as component loads, fetch data

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(res => res.json())
            // 2. Put data array in state variable
            .then((cleanData) => setData(cleanData))
            .catch(err => console.error(err))
    }, [])


    const handleFormSubmit = e => {
        e.preventDefault()
        const formData = {}
        formData.title = e.target.title.value
        formData.content = e.target.content.value
        console.log(formData.title, formData.content)

        fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }

    return (
        <>
            <form action="" onSubmit={e => { handleFormSubmit(e) }}>

                <label htmlFor="title">
                    Title:
                    <input type="text" name="title" />
                </label>
                <label htmlFor="content">
                    Content:
                    <input type="text" name="content" />
                </label>

                <button type="submit">Add Blog Post</button>

            </form>

            <div className="cardContainer">
                {// 3. Map data array in state variable
                    data.map((singlePost, index) => {
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