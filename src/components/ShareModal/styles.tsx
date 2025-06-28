const useStyle = () => {
  return {
    container: {
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    shareModalStyles: {
      root: {
        position: "absolute",
        background: "#141414",
        zIndex: 10,
        top: -500,
        borderRadius: 10,
        border: 0,
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
      },
      copyContainer: {
        // border: "1px solid blue",
        background: "rgb(0,0,0,0.7)",
      },
      title: {
        color: "white",
        // fontStyle: "italic",
      },
    },
  };
};

export default useStyle;
