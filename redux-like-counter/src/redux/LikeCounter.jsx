
import {createStore} from 'redux'
import reducer from './reducer'
import { useState } from 'react';
import { IncrementLike,DecrementLike } from './actions';

const store = createStore(reducer)

export default function LikeCounter() {

    const [count, setCount] = useState(store.getState().count)

    const handleIncrement = () => {
        store.dispatch(IncrementLike())
        setCount(store.getState().count)
      };
      
      const handleDecrement = () => {
        store.dispatch(DecrementLike())
        setCount(store.getState().count)
      };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}