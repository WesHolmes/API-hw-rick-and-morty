import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title";
import Info from "./Info";
import Entry from "./Entry";
import Footer from "./Footer";

export default function App() {
  const [number, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const numberOfC = encodeURIComponent(number.toLowerCase());
    const url = `https://rickandmortyapi.com/api/character/${numberOfC}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [number]);

  return (
    <div className="App">
      <Title name="Rick And Morty API Application" />
      <Entry action={setName} />
      <Info number={number} data={data} />
      <Footer name="API app. By: Westley Holmes" />
    </div>
  );
}
