import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://type.fit/api/quotes");
      setQuotes(res.data[Math.trunc(Math.random() * res.data.length)]);
    };
    fetchData();
  }, []);

  const newQuote = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) =>
        setQuotes(res.data[Math.trunc(Math.random() * res.data.length)])
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="App">
        <h2>Get motivated!</h2>
        <div>
          <h3>{quotes.text}</h3>
          <p>{quotes.author === null ? "🤷‍♀️" : quotes.author}</p>
        </div>
        <button onClick={newQuote}>Click Me!</button>
      </div>
    </div>
  );
}

export default App;
