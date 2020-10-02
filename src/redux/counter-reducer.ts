export type one = {
    startValue: number
    currentValue: number
    maxValue: number
}

const InitialState: one = {
    startValue: 0,
    currentValue: 0,
    maxValue: 5
}

export const counterReducer = (state: one = InitialState, action: any): one => {
    switch (action.type) {
        case 'INCREMENT_COUNT': {
            let stateCopy = {...state}
            let newCurrentValue = stateCopy.currentValue
            newCurrentValue++
            stateCopy.currentValue = newCurrentValue
            return stateCopy
        }
        case 'RESET_COUNT': {
            return {...state, currentValue: 0}
        }
        default:
            return state
    }
}

export const incrementCount = () => {
    return {type: 'INCREMENT_COUNT'}
}
export const resetCount = () => {
    return {type: 'RESET_COUNT'}
}