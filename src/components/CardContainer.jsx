import { useEffect } from "react"

export default function CardContainer({data, setData}) {
    

    // 1. As soon as component loads, fetch data

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(res => res.json())
            // 2. Put data array in state variable
            .then((data) => setData(data))
            .catch(err => console.error(err))
    }, [])



    return (
        <>
            <div className="cardContainer">
                {// 3. Map data array in state variable
                data &&
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