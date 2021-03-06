import InitialState from '../reducers/InitialState';

/**
 * @description reducer for password actions
 *
 * @param {object} state -state object
 * @param {object} action -action object
 *
 * @returns {object} returns state object
 */
const passwordReducer = (state = InitialState.password, action) => {
  switch (action.type) {
    case 'EMAIL_ERROR':
      return { ...state, emailError: action.emailError };
    case 'PASSWORD_UPDATED':
      return { ...state, passwordUpdated: action.passwordUpdated };
    case 'PASSWORD_UPDATE_ERROR':
      return { ...state, passwordUpdateError: action.error };
    default:
      return state;
  }
};
export default passwordReducer;
