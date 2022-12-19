import Addition from "./Addition";
import Subtraction from "./Subtraction";
import "./App.css";

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

function App() {
    return (
        <div className="App">
            <h1>Mental Calculation of Random Number</h1>
            <div className="container">
                <div className="col addition">
                    <h2>Addition</h2>
                    <Addition />
                </div>
                <div className="col addition">
                    <h2>Subtraction</h2>
                    <Subtraction />
                </div>
            </div>
        </div>
    );
}

export default App;
