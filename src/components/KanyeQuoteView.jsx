import React, { useEffect, useState } from "react";

export default function KanyeQuoteView() {

  const [quote, setQuote] = useState("");
  const [newData, setNewData] = useState([]);

  const addFav=(e)=>{
    e.preventDefault();
    const newFavor={quote:quote}
    setNewData=[newFavor]
  }


  let newQuote = () => {
    fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.quote)
      }
    )  
  }

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h2>{quote}</h2>
      <button onClick={newQuote}>Get Quote</button>
      <button type="button" onClick={addFav}>Add Favorite</button>
      <div>
      {newData.map((values)=>{
          return(
            <>
            <h2>{values}</h2>
            </>
          )
        })}
      </div>
    </section>
  );
}
