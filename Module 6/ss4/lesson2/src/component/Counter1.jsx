import {useState} from "react";
import useIncrement from "./CounterComponent.jsx";

function counter1(){
    const [count, inCrease]=useIncrement(1);
    return(
        <>
            <div className="counter container d-flex flex-column align-items-center">
                <h2>Counter 1: {count}</h2>

                <button
                    className="btn btn-primary w-25 mt-3"
                    onClick={inCrease}
                >
                    Increment
                </button>
            </div>
        </>
    )
}
export default counter1;