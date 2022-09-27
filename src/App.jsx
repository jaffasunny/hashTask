import MainBody from "./components/MainBody/MainBody";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";
import { Box, Button, Drawer } from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";
import { FormatAlignLeft } from "@mui/icons-material";

function App() {
  const [state, setState] = useState({
    left: false,
  });
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className='app'>
      {windowSize.width <= 425 ? (
        <>
          <Button
            onClick={toggleDrawer("left", true)}
            sx={{ justifyContent: "center", alignItems: "start", mt: 2 }}>
            <FormatAlignLeft />
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)} className='app__sidebarDrawer'>
            <Box className='app__sidebar' sx={{ pt: 3 }}>
              <Sidebar />
            </Box>
          </Drawer>
        </>
      ) : (
        <Box className='app__sidebar' sx={{ pt: 3 }}>
          <Sidebar />
        </Box>
      )}

      <Box className='app__mainBody' sx={{ pt: 3 }}>
        <MainBody />
      </Box>
    </main>
  );
}

export default App;
