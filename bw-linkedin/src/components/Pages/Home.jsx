import Footer from "../Footer"
import Feed from "../Feed"
import Sidebar from "../Sidebar"

const Home = () => {
    return(
        <>
        <div className="d-flex hero-section">
          <div className="flex-grow-1">
            <Feed/>
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