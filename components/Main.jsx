import React from "react"

export default function Main() {
        return <main>
                    <h1 className="logo-container">Simple Food Restaurant</h1>
                    <p className="info-container">We make simple food for simple people. Want a     sandwich?   You got it. A hot dog? Coming right up. Poached salmon eggs with    fire-roasted asparagus   fritters hand-glazed in locally-sourced artisanal honey?  Get out of here. Try the Fancy   Food Cafe across the street.
                    </p>
                    <div className="image-container">
                         <div className="image-wrapper">
                             <img className="hot-dog" src="images/hotdogs.jpg"/>
                         </div>
                         <div className="image-wrapper">
                             <img src="images/sandwich.jpg"/>
                         </div> 
                         <div className="image-wrapper">
                             <img src="images/hamburger.jpg"/>
                         </div>                                  
                    </div>
            </main>
    }