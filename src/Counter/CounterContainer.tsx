import React from 'react'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {Counter} from './Counter';
import {one} from '../redux/counter-reducer';


export const CounterContainer = () => {

    let counter = useSelector<AppRootStateType, one>(state => state.counter)

    return (
        <Counter currentValue={counter.currentValue}
                 maxValue={counter.maxValue}
                 startValue={counter.startValue}
        />
    )
}
