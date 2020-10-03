import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {Counter} from './Counter';
import {incrementCount, one, resetCount} from '../redux/counter-reducer';


export const CounterContainer = () => {

    let dispatch = useDispatch()
    let counter = useSelector<AppRootStateType, one>(state => state.counter)

    let incCount = () => {
        dispatch(incrementCount())
    }

    let reCount = () => {
        dispatch(resetCount())
    }

    return (
        <Counter currentValue={counter.currentValue}
                 maxValue={counter.maxValue}
                 startValue={counter.startValue}
                 newMaxValue={counter.newMaxValue}
                 newStartValue={counter.newStartValue}
                 incCount={incCount}
                 reCount={reCount}
        />
    )
}
