import { useState } from 'react';
export default function Counter(options) {
    const [counter, setCounter] = useState(0)

    function countUp() {
        setCounter(counter +1);
    }
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={countUp}>Count Up</button>
        </div>
    )
}