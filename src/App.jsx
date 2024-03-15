import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-store";

function App() {
  const [SelectedTab, setSe] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar SelectedTab={SelectedTab} setSele={setSe} />

          <div className="block">
            <Header />
            {SelectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
