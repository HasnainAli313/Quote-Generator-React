import { useState } from 'react'

function App() {
  const [quote, setQuote] = useState("Click to generate");

  function generateQuote(){
    let quotes = [
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
      "First, solve the problem. Then, write the code. - John Johnson",
      "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
      "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. - Muhammad Waseem",
      "The best error message is the one that never shows up. - Thomas Fuchs",
      "It's not a bug. It's an undocumented feature! - Anonymous",
      "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
      "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
      "The computer was born to solve problems that did not exist before. - Bill Gates",
      "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie"
    ];
    
    // getting random quote
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let quoteIndex = quotes[randomIndex]
    setQuote(quoteIndex);
  }
  return (
    <>
    <div className="container">
      <div className="box">
      <div className="quote">
       <p id='para' >{quote}</p>
      </div>
      <div className='button'>
       <button onClick={() => generateQuote()}>Generate</button>
      </div>
      </div>
    </div>
     
    </>
  )
}

export default App
