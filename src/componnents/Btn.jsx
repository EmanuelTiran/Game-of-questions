import React from 'react'
import { TriviaStore } from './store/zuStand'

export default function Btn({nameForBtn}) {
    const count = TriviaStore(state => state.count)
    const setCount = TriviaStore(state => state.setCount)
    return (
        <button onClick={() => setCount(count + 1)}>{nameForBtn}</button>
    )
}
