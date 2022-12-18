import { useState } from "react";
import { getRandomInt } from "./App";
import Anser from "./Anser";

const Addition = () => {
    const [reload, setReload] = useState<boolean>(false);
    const a = getRandomInt(99);
    const b = getRandomInt(99);

    const anserDone = () => {
        setReload(!reload);
    };

    return (
        <div className="wapper">
            {a} + {b} ={` `}
            <Anser anser={a + b} anserDone={anserDone} />
        </div>
    );
};
export default Addition;
