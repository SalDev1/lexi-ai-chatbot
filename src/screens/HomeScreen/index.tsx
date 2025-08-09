import { useCallback, useState } from "react";
import SideDrawer from "../../components/SideDrawer";
import { Button } from "primereact/button";
import { FaArrowUp, RiMenuLine, SlSettings } from "../../icons";
import { InputText } from "primereact/inputtext";
import "./style.css";
import { ProgressSpinner } from "primereact/progressspinner";
import { ScrollPanel } from "primereact/scrollpanel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { callPromptApiService } from "../../api-service/service";

const HomeScreen = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [chatPrompt, setChatPrompt] = useState<string>("");
  const [chatPromptResponse, setChatPromptResponse] = useState<string>("");

  const [loader, setLoader] = useState<boolean>(false);

  const getChatPromptResponse = useCallback(
    async (inputText: string) => {
      const response = await callPromptApiService(inputText);
      setChatPromptResponse(response?.data?.result);
    },
    [inputText]
  );

  const resetFields = () => {
    setInputText("");
    setChatPrompt("");
    setChatPromptResponse("");
  };

  const handleTextSubmit = (e: any) => {
    e.preventDefault();
    resetFields();

    setChatPrompt(inputText);
    setTimeout(() => {
      getChatPromptResponse(inputText);
    }, 2500);
  };

  return (
    <div
      style={{
        backgroundColor: "#1B1A55",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
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

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {chatPrompt ? (
            <h1 style={{ paddingRight: "10px" }}>LexiAI</h1>
          ) : (
            <></>
          )}
          <Button
            pt={{
              root: {
                className: "sidedrawer-button",
                style: { border: "none", padding: "3.5px" },
              },
            }}
          >
            <SlSettings size={30} />
          </Button>
        </div>
      </div>

      <div style={{ flex: "0.5" }}>
        {loader ? (
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        ) : (
          <>
            {!chatPrompt && (
              <div>
                <h1>LexiAI</h1>
                <i>
                  I can summarize text, answer to your questions with reasoning
                  skills and can do a lot more.
                </i>
              </div>
            )}
            {chatPrompt && (
              <div
                style={{
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <ScrollPanel
                  style={{
                    padding: "25px",
                    backgroundColor: "#070F2B",
                    borderRadius: "10px",
                    marginTop: "10px",
                    textAlign: "left",
                    width: "75%",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "end",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        backgroundColor: "#3c3c3cff",
                        padding: "12.5px",
                        borderRadius: 50,
                      }}
                    >
                      {chatPrompt}
                    </p>
                  </div>
                  <div>
                    {chatPromptResponse ? (
                      <p>{chatPromptResponse}</p>
                    ) : (
                      <SkeletonTheme
                        baseColor="#202020"
                        highlightColor="#bbb8ffff"
                        width="85%"
                      >
                        <p>Generating response .....</p>
                        <Skeleton count={2} />
                      </SkeletonTheme>
                    )}
                  </div>
                </ScrollPanel>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ flex: "0.25" }}>
        <form
          style={{
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "45px",
          }}
        >
          <InputText
            style={{
              width: "70%",
              padding: "20px",
              backgroundColor: "#070F2B",
              border: "none",
              borderRadius: 50,
              color: "lightgray",
            }}
            placeholder="What do you want to ask ?"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <Button
            style={{
              backgroundColor: "white",
              border: "none",
              padding: "5px",
              borderRadius: 50,
              marginLeft: "5px",
            }}
            onClick={(e) => {
              handleTextSubmit(e);
            }}
          >
            <FaArrowUp size={30} color="#1B1A55" />
          </Button>
        </form>
      </div>

      <SideDrawer visible={showSideBar} setSideBarVisible={setShowSideBar} />
    </div>
  );
};

export default HomeScreen;
