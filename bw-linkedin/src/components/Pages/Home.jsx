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
        <div className="flex-grow-1" style={{ maxWidth: "35rem" }}>
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
