import React from "react"
import book from "../src/assets/Images/landing/book.png"
import cup from "../src/assets/Images/landing/cup.png"
import pencil from "../src/assets/Images/landing/pencil.png"
import pens from "../src/assets/Images/landing/pens.png"
import scissors from "../src/assets/Images/landing/scissors.png"
import tape from "../src/assets/Images/landing/tape.png"
import "./Landing.css"



export default function Landing() {


 return (

  <div className="landing-grid">
   <img className="landing-pens" src={pens} />
   <img className="landing-scissors" src={scissors} />
   <div className="text-section-two">Scrapbook your ideas with stickers washi tape, pictures and your finest words or upload your own.</div>
   <div className="landing-book-container">
    <img className="landing-book" src={book} />
    <div className="text-section-three"> The Tales keeper is a space to relax create and inspire. Dig in!</div>
   </div>

   <img className="landing-pencil" src={pencil} />
   <img className="landing-tape" src={tape} />
   <div className="text-section-one">
    ← <br></br>Create or Resume your Tales</div>
   <img className="landing-cup" src={cup} />
  </div >

 )
}