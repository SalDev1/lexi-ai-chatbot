import React, { useState } from "react";
import SideDrawer from "../../components/SideDrawer";
import { Button } from "primereact/button";
import { FiSidebar, RiMenuLine, SlSettings } from "../../icons";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import "./style.css";

const HomeScreen = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <div
      style={{ backgroundColor: "#1B1A55", color: "white", display: "flex" }}
    >
      <div>
        <Button
          //   className="sidedrawer-button"
          onClick={() => setShowSideBar(!showSideBar)}
          pt={{
            root: {
              className: "sidedrawer-button",
              style: { border: "none", padding: "5.5px" },
            },
          }}
        >
          <RiMenuLine size={30} />
        </Button>
      </div>

      <div style={{flex : 1}}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* <Avatar
            label="V"
            size="large"
            style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
            shape="circle"
          /> */}
          <Button
            pt={{
              root: {
                className: "sidedrawer-button",
                style: { border: "none", padding: "5.5px" },
              },
            }}
          >
            <SlSettings size={30} />
          </Button>
        </div>

        <div>
          <h1>LexiAI</h1>
          <i>
            I can summarize text, answer to your questions with reasoning skills
            and can do a lot more.
          </i>
        </div>

        <InputText
          style={{
            width: "72%",
            padding: "20px",
            marginTop: "425px",
            backgroundColor: "#070F2B",
            border: "none",
            borderRadius: 50,
            color : 'lightgray',
          }}
          placeholder="What do you want to ask ?"
        />
      </div>

      <SideDrawer visible={showSideBar} setSideBarVisible={setShowSideBar} />
    </div>
  );
};

export default HomeScreen;
