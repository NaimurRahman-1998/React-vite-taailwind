import { useContext } from "react";
import { COUNTER_CONTEXT } from "../../context/CounterContext";


const Counter = () => {
    const {count} = useContext(COUNTER_CONTEXT)
    return (
        <div>
            this is counter : {count}
        </div>
    );
};

export default Counter;