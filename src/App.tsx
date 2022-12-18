import Addition from "./Addition";
import "./App.css";

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

function App() {
    return (
        <div className="App">
            <h1>Mental Calculation</h1>
            <div className="addition">
                <Addition />
            </div>
        </div>
    );
}

export default App;
