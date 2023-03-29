import "./global.css";
import Header from "./components/common/Header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/home/home.css";
import "./components/common/footer.css";
import "./components/common/responsive.css";
import Footer from "./components/common/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter></BrowserRouter> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
