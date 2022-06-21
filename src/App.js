import React, { useState } from "react";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
function App() {
  let urunler =
    localStorage.getItem("urunler") === null
      ? localStorage.setItem("urunler", JSON.stringify([]))
      : JSON.parse(localStorage.getItem("urunler"));
  const [urun, setUrun] = useState(urunler);
  const [active,setActive]=useState(false);
  return (
    <div className="App">
      <Header urun={urun} setUrun={setUrun} active={active} setActive={setActive}/>
      <Contents urun={urun} setUrun={setUrun} active={active} />
      <Footer />
    </div>
  );
}

export default App;
