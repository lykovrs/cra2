import { combineReducers } from 'redux'
import applicationslist from './applications-list'
import applicationForm from './application-form'

export default combineReducers({
  applicationslist,
  applicationForm,
})
