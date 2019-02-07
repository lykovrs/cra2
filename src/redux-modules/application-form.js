

const EDIT = 'appication/EDIT'

const initialState = {
  formData: {
    title:''
  },
  status: null
}

function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case EDIT: return { ...state }
    default: return state
  }
}

export function editAppication({ field, value}) {
  return null
}

export default reducer
