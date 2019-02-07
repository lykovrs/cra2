const ADD = 'applicationslist/ADD'

const initialState = []

function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case ADD: return [ ...state, payload ]
    default: return state
  }
}

export function addApplication(application) {
  return {
    type: ADD,
    payload: application
  }
}

export default reducer
