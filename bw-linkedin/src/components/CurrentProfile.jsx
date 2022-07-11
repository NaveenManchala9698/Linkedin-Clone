import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"


const CurrentProfile = () => {

    const [currentProfileData, setCurrentProfileData] = useState({})
    let { id } = useParams()

    useEffect(() => {
        fetchCurrentData()
    }, [id])

    const fetchCurrentData = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/profile/{userId}"

            const response = await fetch(url,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU"
                    }
                }
            )

            if(response.ok) {
                const data = await response.json()
                console.log(data)
                setCurrentProfileData(data)
            }
            else {
                console.log("Error Fetching Data!")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        </>
    )
}

export default CurrentProfile