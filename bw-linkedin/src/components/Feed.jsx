import { useEffect, useState } from "react"



const Feed =()=>{
    const [feed, setFeed] = useState({})

    useEffect(()=>{
        fetchFeed()
    },[])

    const fetchFeed=async()=>{
        try {
            const url = "https://striveschool-api.herokuapp.com/api/posts/"
            
            const response = await fetch(url,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU"
                    }
                }
                )
                if(response.ok){
                    const news = await response.json()
                    console.log(news)
                    setFeed(news)
                }
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <></>
    )
}