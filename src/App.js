import React, { useEffect, useState } from "react";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhatsApp from "./components/icons/whats app icon/WhatsApp";
import ToTop from "./components/icons/to top icon/ToTop";
import Error from "./pages/error/Error";

function handleContextMenu(event) {
  event.preventDefault();
}

function App() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  const mainTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(mainTheme);

  // useEffect(() => {
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  // useEffect(() => {
  //   document.onkeydown = function (e) {
  //     // disable F12 key
  //     if (e.keyCode === 123) {
  //       return false;
  //     }
  //     // disable I key
  //     if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
  //       return false;
  //     }
  //     // disable J key
  //     if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
  //       return false;
  //     }
  //     // disable U key
  //     if (e.ctrlKey && e.keyCode === 85) {
  //       return false;
  //     }
  //   };
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <WhatsApp />
        <ToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
