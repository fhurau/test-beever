import React, { useState } from "react";

export default function PersonalQuoteView() {
     
  const [form, setForm] = useState("")
  const [newForm, setNewForm] = useState([])

  const submitData=(e)=>{
    e.preventDefault();
    const newData={form:form}
    setNewForm([...newForm,newData])
    setForm("");
  }

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={submitData}>
        <input
        type="text"
        value={form}
        onChange={(e)=> setForm(e.target.value)}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {newForm.map((values)=>{
          return(
            <>
            <h2>{values.form}</h2>
            </>
          )
        })}
      </div>
    </section>
  );
}
