import "./global.css";
import Header from "./components/common/Header";
import "./pages/home/home.css";
import "./components/common/footer.css";
// import "./components/common/responsive.css";
import Footer from "./components/common/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
