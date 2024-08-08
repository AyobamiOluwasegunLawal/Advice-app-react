import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const fetchData = await axios.get("https://api.adviceslip.com/advice");
      const { advice } = await fetchData.data.slip;
      setAdvice(advice);
    } catch (error) {
      setError("Sorry, we couldn't retrieve!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    fetchAdvice();
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="app">
      <div className="card">
        {loading ? <h1>Loading...</h1> : <h1>{advice}</h1>}
        <button onClick={handleClick}>GIVE ME AN ADVICE</button>
      </div>
    </div>
  );
};

export default App;
