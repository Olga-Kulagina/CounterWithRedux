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
    newMaxValue: number
    newStartValue: number
    incCount: () => void
    reCount: () => void
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.counterBlock}>
            <div className={s.display}>
                <Display currentValue={props.currentValue} maxValue={props.maxValue} startValue={props.startValue}
                         newMaxValue={props.newMaxValue} newStartValue={props.newStartValue}/>
            </div>
            <div className={s.buttonsPanel}>
                <Button title={'inc'} callBack={props.incCount}
                        disabled={props.currentValue === props.maxValue ? true : false}/>
                <Button title={'reset'} callBack={props.reCount} disabled={props.currentValue === props.startValue ? true : false}/>
            </div>
        </div>
    )
}
