import { Sidebar } from "primereact/sidebar";
import { FiSidebar } from "react-icons/fi";

interface SideDrawerProps {
  visible: boolean;
  setSideBarVisible: (value: boolean) => void;
}

const SideDrawer = ({ visible, setSideBarVisible }: SideDrawerProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Sidebar
        visible={visible}
        onHide={() => setSideBarVisible(!visible)}
        style={{ backgroundColor: "#070F2B", padding: "24px"}}
        closeIcon={<FiSidebar size={30}/>}
      >
        <h2>LexiAI</h2>
        <div>
          <h5>Previous Chats</h5>
        </div>
      </Sidebar>
    </div>
  );
};

export default SideDrawer;
