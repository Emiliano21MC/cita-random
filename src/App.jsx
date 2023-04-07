import { useState } from "react";
import './App.css'
import ContainerInfo from "./components/ContainerInfo";
import db from './db/db.json'

const images = ["vg1", "vg2", "vg3", "vg4"];
function App() {
  
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  }

  const [quote, setQuote] = useState(getRandomItem(db))
  const [vgimage, setVgimage] = useState(getRandomItem(images))
  const handleNewQuote = () => {
    setQuote(getRandomItem(db))
  }
  const handleNewVgImage = () => {
    setVgimage(getRandomItem(images));
  }

  return (
    <div className={`App ${vgimage}`}>

      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} handleNewVgImage={handleNewVgImage}/>

      

    </div>
  )
}

export default App
