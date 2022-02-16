import React, {createContext} from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const AppState = createContext(null)

export const AppStateProvider = ({children}) => {
    const [state, setState] = useState({})
    return (
        <AppState.Provider value={{state, setState}}>
            {children}
        </AppState.Provider>
    )
}

AppStateProvider.propTypes = {
    children: PropTypes.any.isRequired
}