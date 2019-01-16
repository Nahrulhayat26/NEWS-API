import { BERITA } from './actionTypes'


const initialState = {
    berita: []
}

const reducers = (state = initialState, action) => {
    if (action.type === BERITA) {
        return {
            ...state,
            berita: action.payload
        }
    }
    return state
}

export default reducers