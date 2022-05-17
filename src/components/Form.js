import {useReducer} from 'react';
import React from 'react';






const initialState ={
    firstName: {
        value: '',
        error: ''
    },
    lastName: {
        value: '',
        error: ''
    },
    email: {
        value: '',
        error: ''
    }
};


// Action Types
const reducer =(state, action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME_VALUE':
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
        case 'SET_FIRST_NAME_ERROR':
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    error:action.payload
                }
            }
            case 'SET_LAST_NAME_VALUE':
                return {
                    ...state,
                    lastName: {
                        ...state.lastName,
                        value: action.payload
                }
            }
            case 'SET_LAST_NAME_ERROR':
                return {
                    ...state,
                    lastName: {
                        ...state.lastName,
                        error:action.payload
                }
                
            }
            case 'SET_EMAIL_VALUE':
                return {
                    ...state,
                    email: {
                        ...state.email,
                        value: action.payload
                }
            }
            case 'SET_EMAIL_ERROR':
                return {
                    ...state,
                    email: {
                        ...state.email,
                        error: action.payload
                }
            }
        default:
            return state;
        
        
        } 
}


export default () => {
    
    
    const [state, dispatch] = useReducer(reducer, initialState);
// We call the useReducer hook, passing in our reducer function and the initial state

    const handlefirstNameChange =(e) =>{
        if(e.target.value.length < 2) {
            dispatch({
                type: 'SET_FIRST_NAME_ERROR',
                payload: 'First name must be at least 2 characters'
            });
        }else {
            dispatch({
                type: 'SET_FIRST_NAME_ERROR',
                payload: ''
            });
        }
        dispatch ({
            type: 'SET_FIRST_NAME_VALUE',
            payload: e.target.value
    });
}

const handlelastNameChange =(e) =>{
    if(e.target.value.length < 3) {
        dispatch({
            type: 'SET_LAST_NAME_ERROR',
            payload: 'Last name must be at least 3 characters'
        });
    }else {
        dispatch({
            type: 'SET_LAST_NAME_ERROR',
            payload: ''
        });
    }
    dispatch ({
        type: 'SET_LAST_NAME_VALUE',
        payload: e.target.value
        });
    }

    const handleEmailChange =(e) =>{
        if(e.target.value.length < 8 ) {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: 'Email must be at least 8 characters'
            });
        }else {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: ''
            });
        }
        dispatch ({
            type: 'SET_EMAIL_VALUE',
            payload: e.target.value
        });
    }

    return (
        <div>
            <h1>Please enter your information</h1>
            <form>
                <div>
                    <label htmlFor="firstName">
                        <span>First Name: </span>
                        <input
                            id="firstName"
                            onChange={(e) => handlefirstNameChange(e)}
                        />
                    </label>
                    <p>{state.firstName.error}</p>
                </div>
                <div>
                    <label htmlFor="laststName">
                        <span>Last Name: </span>
                        <input
                            id="lastName"
                            onChange={(e) => handlelastNameChange(e)}
                        />
                    </label>
                    <p>{state.lastName.error}</p>
                </div>
                <div>
                    <label htmlFor="email">
                        <span>Email: </span>
                        <input
                            id="email"
                            onChange={(e) => handleEmailChange(e)}
                        />
                    </label>
                    <p>{state.email.error}</p>
                </div>
                <input type="submit" value="Submit" />



            </form>

        </div>
       
    )
        

}
