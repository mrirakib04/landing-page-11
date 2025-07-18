import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Products from "./components/Products";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto w-full">
      <Header></Header>
      <Stats></Stats>
      <Programs></Programs>
      <Products></Products>
      <Questions></Questions>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
