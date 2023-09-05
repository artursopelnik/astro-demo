import { useStore } from '@nanostores/react';
import React, {useState, ReactNode} from 'react';
import isCounterTriggered from './utils/CounterStore'

interface Props {
    children: ReactNode
}

export default function Counter({children}: Props) {
    const $isCounterTriggered = useStore(isCounterTriggered);

    console.log()

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);

        isCounterTriggered.set(true)
    }

    return (
        <>
            <div>{children}</div>
            <button className="counter" onClick={handleClick}>
                You pressed me {count} times
            </button>
            {isCounterTriggered.get() && (
                <small className='triggered'>Counter is triggered</small>
            )}
        </>
    );
}