import { DARK__MODE_TOGGLE } from "../actions/DarkModeAction"

interface DarkModeProps {
    isEnabled: boolean
}
const initialState: DarkModeProps = {
    isEnabled: false
}

const DarkReducer = (state = initialState, action: { type: string }): DarkModeProps => {
    switch (action.type) {
        case DARK__MODE_TOGGLE:
            return {
                ...state, isEnabled: !state.isEnabled
            }
        default:
            return state
    }
}

export default DarkReducer