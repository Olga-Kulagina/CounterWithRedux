import React from 'react'
import s from './Counter.module.css'
import Display from './Display/Display';
import {Button} from './Button/Button';
import {useDispatch,} from 'react-redux';
import {incrementCount, resetCount} from '../redux/counter-reducer';

type CounterPropsType = {
    currentValue: number
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {

    let dispatch = useDispatch()

    let incCount = () => {
        dispatch(incrementCount())
    }

    let reCount = () => {
        dispatch(resetCount())
    }

    return (
        <div className={s.counter}>
            <div className={s.display}>
                <Display count={props.currentValue} maxValue={props.maxValue} startValue={props.startValue}/>
            </div>
            <div className={s.buttonsPanel}>
                <Button title={'inc'} callBack={incCount}
                        disabled={props.currentValue === props.maxValue ? true : false}/>
                <Button title={'reset'} callBack={reCount} disabled={props.currentValue === 0 ? true : false}/>
            </div>
        </div>
    )
}
