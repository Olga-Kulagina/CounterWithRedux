import React from 'react';
import CustomizationDisplay from './CustomizationDisplay';
import {Button} from '../Button/Button';

type PropsType = {
    count: number
    maxValue: number
    startValue: number
    setCount: (count: number) => void
    setMax: (max: number) => void
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
    setCustomization: () => void
}

function Customization(props: PropsType) {

    return (
        <div>
            <CustomizationDisplay maxValue={props.maxValue} startValue={props.startValue}
                                  maxValueChange={props.maxValueChange}
                                  startValueChange={props.startValueChange}/>
            <Button title={'set'} callBack={props.setCustomization} disabled={false}/>
        </div>
    )
}

export default Customization;