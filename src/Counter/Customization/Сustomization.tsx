import React from 'react';
import CustomizationDisplay from './CustomizationDisplay';
import {Button} from '../Button/Button';
import s from './Customization.module.css'

type CustomizationPropsType = {
    newMaxValue: number
    newStartValue: number
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
    setCustomization: () => void
}

function Customization(props: CustomizationPropsType) {

    return (
        <div className={s.customisationBlock}>
            <CustomizationDisplay newMaxValue={props.newMaxValue} newStartValue={props.newStartValue}
                                  maxValueChange={props.maxValueChange}
                                  startValueChange={props.startValueChange}/>
            <Button title={'set'} callBack={props.setCustomization} disabled={
                props.newStartValue < 0 ? true : false ||
                props.newMaxValue < 0 ? true : false ||
                    props.newStartValue >= props.newMaxValue}/>
        </div>
    )
}

export default Customization;