import { createContext } from 'react'
import { object } from 'prop-types'

export const AppInitialValues = {
	date: null,
	setState: () => object
}

const AppContext = createContext(AppInitialValues)

export default AppContext
