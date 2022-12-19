import { useState } from "react";
import { getRandomInt } from "./App";
import Anser from "./Anser";

const Addition = () => {
    const [count, setCount] = useState<number>(0);
    const a = getRandomInt(99);
    const b = getRandomInt(99);

    const anserDone = () => {
        setCount(count + 1);
    };

    return (
        <div className="wapper">
            {a} - {b} ={` `}
            <Anser anser={a - b} anserDone={anserDone} />
            <span className="total-done">Total: {count} correct answers</span>
        </div>
    );
};
export default Addition;
