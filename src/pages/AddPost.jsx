export default function AddPost({setData}) {


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

    )
}