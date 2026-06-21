import Header from "./components/Header/Header.jsx";
import Hero from "./components/Main/Hero-section/Hero.jsx";
import Cards from "./components/Main/Cards-section/Cards.jsx";
import News from "./components/Main/News-section/News.jsx";
import Gallery from "./components/Main/Gallery-section/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { AppWrapper } from "./App.styled";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Hero />
      <main style={{ flex: 1 }}></main>
      <Cards />
      <News />
      <Gallery />
      <Footer />
    </AppWrapper>
  );
}

export default App;
