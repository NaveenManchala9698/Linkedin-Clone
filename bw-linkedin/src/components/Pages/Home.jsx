import Footer from "../Footer";
import Feed from "../Feed";
import Sidebar from "../Sidebar";
import Post from "../Post";
import NewsFeedProfile from "../NewsFeedProfile";

const Home = () => {
  return (
    <>
      <div className="d-flex hero-section">
        <div>
          <NewsFeedProfile />
        </div>
        <div className="flex-grow-1">
          <Post />
          <Feed />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
