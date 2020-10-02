import React from 'react';
import Customization from './Сustomization';


export const CustomizationContainer = () => {
    let maxValueChange = (maxValue: number) => {
        alert('maxValueChange')
    }

    let startValueChange = (startValue: number) => {
        alert('startValueChange')
    }

    let setCustomization = () => {
        alert('setCustomization')
    }

    let setCount = () => {
        alert('setCount')
    }

    let setMax = () => {
        alert('setMax')
    }
    return (
        <Customization count={0} maxValue={7} startValue={0} setCount={setCount} setMax={setMax}
                       maxValueChange={maxValueChange}
                       startValueChange={startValueChange} setCustomization={setCustomization} />
    )
}

