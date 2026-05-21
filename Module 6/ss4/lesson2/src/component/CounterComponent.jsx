import React, {useState} from "react";
function useIncrement  (addAmount) {
    const [count, setCount] = useState(0);
    function inCrease(){
        setCount(prev => prev + 1);
    }
    return [count, inCrease];
}
export default useIncrement;

