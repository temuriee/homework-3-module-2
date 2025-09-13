import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const card1 = {
    title: "Design Your Startup’s Future in Style",
    description: "A high-quality solution for a beautiful startup website.",
  };
  const card2 = {
    title: "Turn Savings Into Startup Success",
    description:
      "Startups can save money on design and code and use those savings to develop the business.",
  };
  const card3 = {
    title: "Build Smarter with Startup Framework Forms",
    description:
      "Startup Framework includes great form options for your startup projects.",
  };
  return (
    <>
      <Header />
      <Hero />
      <div className="mergeCardContainer">
        <Card title={card1.title} description={card1.description} />
        <div className="middleCard">
          <Card title={card2.title} description={card2.description} />
        </div>
        <Card title={card3.title} description={card3.description} />
      </div>
    </>
  );
}

export default App;
