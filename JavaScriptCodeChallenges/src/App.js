import logo from './logo.svg';
import './App.css';
//State Hooks let you use state without writing a class
import React, { useState } from 'react';
import Vegetarian from './challenges/Vegetarian';
import Clock from './challenges/Clock';
import Coffee from './challenges/Coffee';
import Book from './challenges/Book';
import Movie from './challenges/Movie';

function App() {
    //New state variable called 'result'; string type 
    const [result, setResult] = useState({
        book: "",

        movie: "",

        cofee: ""
    });

    const vegetarianItens = [
        {
            name: "Italian Chicken",
            isVegetarian: false
        },
        {
            name: "Penne with Wine",
            isVegetarian: true
        },
        {
            name: "Mushroom risotto",
            isVegetarian: true
        }
    ];

    function handleVegetarian() {
        Vegetarian(document.querySelector("#menu"), vegetarianItens);
    }

    function handleClock() {
        Clock(document.querySelector("#myClock"));
    }

    function handleCoffee() {
        setResult({ cofee: Coffee([1, 3, 5, 7]) });
    }

    function handleBook() {
        const CRACKING = new Book("CrackingTheCodeInterView",
                                  "Gayle McDowell",
                                  3);
        CRACKING.sell(2);

        setResult({ book: CRACKING.availability });
    }


    /*The Prototype chain:
     *JS uses objects to construct inheritance. Each object has a private property which links to another object
     *(this last object is known as its prototype). This prototype has another prototype of its own.
     *This chain continues until an object with a null prototype is reached.
     */
    /*This function is declared on the prototype, so each Movie's instance can use the
     *same prototype's function (there is no creation of copies for this function)
     */
    Movie.prototype.getOverview = function ()
    {
        return `${this.title}; ${this.genre} film by ${this.director}`;
    }

    function handleMovie() {
        const SPIDERMAN = new Movie("Spiderman",
            "Sam Raimi",
            "Action");

        setResult({ movie: SPIDERMAN.getOverview() });
    }

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <b>JavaScript</b>
        <b>Code Challenges:</b>
        <br />
        
        <table>
            <tbody>
                <tr>
                    <th>&nbsp;Exercises</th>
                    <th>&nbsp;Results</th>
                </tr>

                <tr>
                    <td className="firstWidth">
                        <button onClick={handleVegetarian}>
                            01-Vegetarian dinner
                        </button>
                    </td>
                    <td className="secondWidth">
                        <ul id="menu" />
                    </td>
                </tr>

                <tr>
                    <td className="firstWidth">
                        <button onClick={handleClock}>
                            02-Ticking clock
                        </button>
                    </td>
                    <td className="secondWidth">
                            {/*4 non-breaking spaces*/}
                            &emsp;<code id="myClock" />
                    </td>
                </tr>

                <tr>
                    <td className="firstWidth">
                        <button onClick={handleCoffee}>
                            03-Coffee calculations
                        </button>
                    </td>
                    <td className="secondWidth">
                        &emsp;<code>{result.cofee}</code>
                    </td>
                </tr>

                <tr>
                    <td className="firstWidth">
                        <button onClick={handleBook}>
                            04-Available books
                        </button>
                    </td>
                    <td className="secondWidth">
                        <label>
                            &emsp;<code>{result.book}</code>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className="firstWidth">
                        <button onClick={handleMovie}>
                            05-Movie object
                        </button>
                    </td>
                    <td className="secondWidth">
                        <label>
                            &emsp;<code>{result.movie}</code>
                        </label>
                    </td>
                </tr>

            </tbody>
        </table>
        <div>   
              
        </div>
      </header>
    </div>
  );
}

export default App;