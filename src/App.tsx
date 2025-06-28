import { useState } from "react";
import "./App.css";
import ShareModal from "./components/ShareModal";
import HomeScreen from "./screens/HomeScreen/index";

const App = () => {
  const [count, setCount] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShareModalClick = () => {
    setShowShareModal(!showShareModal)
  };
  
  return (
    <>
      <HomeScreen />
      <ShareModal visible={showShareModal} />
    </>
  );
}

export default App;
