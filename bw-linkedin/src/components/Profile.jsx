import { useState } from 'react'
import {Container, Row} from 'react-bootstrap'



const Profile = () => {

 const [profileData, setProfileData] = useState({})

 const fetchProfile = async() => {
try {
    const url = "https://striveschool-api.herokuapp.com/api/profile/"

    const response = await fetch(url)

if(response.ok) {
    const data = await response.json()
    console.log(data)
}
else {
    console.log('Error fetching data')
}

} catch (error) {
    console.log(error)
}
 }





    return(
   <Container>
    <Row>

    </Row>
   </Container>
    )
}

export default Profile