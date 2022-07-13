import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Pencil, PencilFill } from 'react-bootstrap-icons'
import ProfileEdit from './ProfileEdit'
import MyExperience from './MyExperience'
import StaticElements from './StaticElements'



const Profile = () => {

    const [profileData, setProfileData] = useState({})

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/profile/me"
            const response = await fetch(url,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU"
                    }
                }
            )

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setProfileData(data)
            }
            else {
                console.log('Error fetching data')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <div className='main-section'>
                <div style={{ width: '100%', position: 'relative' }}>
                    <div className='bg'><img id='backgroundImage' src='https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg' alt='backgroundImage' /></div>
    
                    <img className='profile-img' src={profileData.image} alt='profileImage' />
                </div>
                <PencilFill className='bg-edit-icon' />
                
                <div className='details'>
                    {
                        profileData && <>
                           {/*  <Pencil  className='profile-edit'/> */}
                           <ProfileEdit profileData={profileData} className='profile-edit'/>
                            <h2>{profileData.name} {profileData.surname}</h2>
                            <h4>{profileData.title}</h4>
                            <p>{profileData.area}. <a href='#' style={{ color: '#0a66c2' }}><b>Contact info</b></a></p>
                            <a href='#' style={{ color: '#0a66c2' }}><b>Connections</b></a>
                            <div className='mt-2'>
                                <Button className='mr-2 profile-buttons' variant='primary'><b>Open To</b></Button>
                                <Button className='mr-2 profile-buttons' variant='outline-primary'><b>Add Profile Section</b></Button>
                                <Button className='mr-2 profile-buttons' variant='outline-secondary'><b>More</b></Button>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="about mt-3" style={{backgroundColor: 'white'}}>
                <h2>About</h2>
                <p>{profileData.bio}</p>
            </div>
            <div>
                <MyExperience/>
            </div>
            <div>
                <StaticElements/>
            </div>
        </Container>
    )
}

export default Profile