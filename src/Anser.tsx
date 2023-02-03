import { useState, FormEvent, KeyboardEvent } from "react";
import _ from "lodash";

function Anser(props: { anser?: number; anserDone?: () => void }) {
    const { anser, anserDone } = props;

    const [result, setResult] = useState<number | string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleChange = (e?: FormEvent<HTMLInputElement>) => {
        if (e && e.currentTarget.value === "") setResult("");
        else e && setResult(_.toNumber(e.currentTarget.value));
    };

    const handleKeyDown = (e?: KeyboardEvent<HTMLInputElement>) => {
        console.log(e);

        if (e?.code === "Enter" || e?.code === "NumpadEnter") {
            if (anser === result) {
                setIsCorrect(true);
                setTimeout(() => {
                    setResult("");
                    setIsCorrect(false);
                    _.isFunction(anserDone) && anserDone();
                }, 1000);
            }
        }
    };

    return (
        <span className="result-wapper">
            <input
                className="input-control"
                value={result}
                type="number"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {isCorrect && (
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M9.5,14.4393398 L16.9393398,7 C17.232233,6.70710678 17.7071068,6.70710678 18,7 C18.2928932,7.29289322 18.2928932,7.76776695 18,8.06066017 L9.5,16.5606602 L6,13.0606602 C5.70710678,12.767767 5.70710678,12.2928932 6,12 C6.29289322,11.7071068 6.76776695,11.7071068 7.06066017,12 L9.5,14.4393398 Z"></path>
                </svg>
            )}
        </span>
    );
}

export default Anser;
