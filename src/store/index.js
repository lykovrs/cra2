import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../redux-modules'

export default function configureStore() {
  let enhancer
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({ timestamp: false, collapsed: true })
    enhancer = compose(applyMiddleware(logger))
  }

  const store = createStore(reducers, enhancer)

  return store
}
