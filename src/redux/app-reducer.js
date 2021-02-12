import {getUserLocation} from './geo-reducer'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'})
}

//thunk creators

export const initializeApp = () => (dispatch) => {
    if (!sessionStorage.getItem('authUser')) {
        const authUser = {
            name: null,
            googleId: null,
            avatar: null,
            isAuth: false
        }

        sessionStorage.setItem('authUser',JSON.stringify(authUser))
    }

    dispatch(getUserLocation())
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}

export default appReducer