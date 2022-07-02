import { legacy_createStore as createStore} from "redux";


const intial = {
    users : [],
    loggedUsers : null,
}

const reducer = (state = intial,action) =>{
    switch(action.type){
        case "SIGNUP" : 
        return {
            ...state,
            users : [...state.users,action.payload]
        }
        default:
            return state;
    }
}

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )
    