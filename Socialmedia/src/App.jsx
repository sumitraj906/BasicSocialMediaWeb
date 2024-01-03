import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";
import Sidebar from "./assets/component/Sidebar";
import CreatePost from "./assets/component/CreatePost";
import PostList from "./assets/component/PostList";
import PostListProvider from "./assets/store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab}setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
      
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
