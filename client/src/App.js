import { useEffect, useState } from "react";
import AgenceClub from "./components/AgenceClub";
import Auberge from "./components/Auberge";
import CardModal from "./components/CardModal";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import LieuxT from "./components/LieuxT";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import SignInModal from "./components/SignInModal";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/haubergs");
        console.log("response", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
        console.log("data", result);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        {/* Rentals */}
        <Rentals data={data} />
      </div>
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        {/* Rentals */}
        <Auberge data={data} />
      </div>
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        {/* Rentals */}
        <LieuxT data={data} />
      </div>
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        <AgenceClub data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
