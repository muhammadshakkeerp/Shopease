import { DARK__MODE_TOGGLE } from "../actions/DarkModeAction"

interface DarkModeProps {
    isEnabled: boolean
}
const initialState: DarkModeProps = {
    isEnabled: localStorage.getItem('darkModeEnabled') === 'true'
}

const DarkReducer = (state = initialState, action: { type: string }): DarkModeProps => {
    let   newEnabledState = false;
    switch (action.type) {
        case DARK__MODE_TOGGLE:
             newEnabledState = !state.isEnabled;
            localStorage.setItem("darkModeEnabled", newEnabledState.toString())
            return {
                ...state, isEnabled: newEnabledState
            }
        default:
            return state
    }
}

export default DarkReducer