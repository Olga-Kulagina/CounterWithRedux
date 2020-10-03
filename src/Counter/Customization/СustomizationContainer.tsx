import React from 'react';
import Customization from './Сustomization';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {one, setCustomization, setNewMaxValue, setNewStartValue} from '../../redux/counter-reducer';


export const CustomizationContainer = () => {

    let dispatch = useDispatch()

    let counter = useSelector<AppRootStateType, one>(state => state.counter)

    let maxValueChange = (newMaxValue: number) => {
        dispatch(setNewMaxValue(newMaxValue))
    }

    let startValueChange = (newStartValue: number) => {
        dispatch(setNewStartValue(newStartValue))
    }

    let onButtonSetCustomizationClick = () => {
        dispatch(setCustomization())
    }

    return (
        <Customization newMaxValue={counter.newMaxValue} newStartValue={counter.newStartValue}
                       maxValueChange={maxValueChange}
                       startValueChange={startValueChange} setCustomization={onButtonSetCustomizationClick}/>
    )
}

