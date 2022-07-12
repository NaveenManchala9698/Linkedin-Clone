import Footer from "../Footer"
import Profile from "../Profile"
import Sidebar from "../Sidebar"


const Home = () => {
    return(
        <>
        <div className="d-flex hero-section">
          <div className="flex-grow-1">
            <Profile />
          </div>
          <div>
            <Sidebar />
          </div>
          
        </div>
        <div><Footer /></div>
        
    
        </>
    )
}

export default Home