// #region Global Imports
import { createStore, applyMiddleware } from 'redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// #endregion Global Imports

// #region Local Imports
import Reducers from './Reducers'
// #endregion Local Imports

export const makeStore = () => {
  return createStore(
    Reducers,
    composeWithDevTools(applyMiddleware()),
  )
}
