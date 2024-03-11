import Card from "../components/Card";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="topadd">
          <div className="container">
            <div className="text-center py-5">
              <h1 className="text-white">FootVista</h1>
              <p className="fs-1">
                Step into the world of style and comfort with FootVista
              </p>
              <p className="fs-2"> Where every step tells a story!</p>
            </div>
          </div>
        </div>
        <div className="products d-flex align-items-center justify-content-center gap-5 h-50 mt-4 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};
export default Home;
