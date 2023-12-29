import './App.css';
import React, { useState,useEffect } from 'react';
import NewsGrid from './components/NewsGrid';
import Menu from './components/Menu';

function App() {
  const[items, setItems] = useState([])
  const[active, setActive] = useState(1)
  const[category, setCategory] = useState("general")

  useEffect(() =>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=51da1d70190a43eab977c310dd8194b0`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])
  
  return (
    <div className="App">
      <h1 className="title">See the latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  );
}

export default App;
