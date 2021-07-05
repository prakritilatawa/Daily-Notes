import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/Header/header";
import "./bootstrap.min.css";
import LandingPage from "./screens/LandingPage/LandingPage";
const App = () => (
  <>
    <Header />
    <main>
      <LandingPage></LandingPage>
    </main>
    <Footer />
  </>
);

export default App;
