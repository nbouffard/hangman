'use client'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../../store/firstSlice'

const PageOne = () => {
  const counter = useSelector(state => state.myReducerNameInRedux.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default PageOne
