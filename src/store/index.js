import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../redux-modules'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'applications-list',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export default function configureStore() {
  let enhancer
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({ timestamp: false, collapsed: true })
    enhancer = compose(applyMiddleware(logger))
  }

  const store = createStore(persistedReducer, enhancer)

  return store
}
