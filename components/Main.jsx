import React from "react"
import Hotdog from "../images/hotdogs.jpg"
import Sandwich from "../images/sandwich.jpg"
import Wrapper from "../images/hamburger.jpg"

export default function Main() {
        return <main>
                    <h1 className="logo-container">Simple Food Restaurant</h1>
                    <p className="info-container">We make simple food for simple people. Want a     
                    sandwich? You got it. A hot dog? Coming right up. Poached salmon eggs with 
                    fire-roasted asparagus fritters hand-glazed in locally-sourced artisanal honey? 
                    Get out of here. Try the Fancy Food Cafe across the street.
                    </p>
                    <div className="image-container">
                         <div className="image-wrapper">
                             <img className="hot-dog" src={Hotdog}/>
                         </div>
                         <div className="image-wrapper">
                             <img src={Sandwich}/>
                         </div> 
                         <div className="image-wrapper">
                             <img src={Wrapper}/>
                         </div>                                  
                    </div>
            </main>
    }