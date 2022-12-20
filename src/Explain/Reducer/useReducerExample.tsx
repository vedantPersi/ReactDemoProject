import React, {useReducer} from 'react';

const useReducerExample = () => {

  function reducer(state:any, action:any) {

    if(action.type ===  'increment') {
      return { count: state.count + 1 }
    }else if(action.type === 'decrement') {
      return { count: state.count - 1 }
    }else {
      return state
    }
    
  }
  
  function Counter() {
    const [state, dispatch] = useReducer(reducer, 0)

    const increment = () => {
      dispatch({type: "increment"})
    }
  
    const decrement = () => {
      dispatch({type: "decrement"})
    }

    return (
      <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </>
    )
  }
}

export default useReducerExample;