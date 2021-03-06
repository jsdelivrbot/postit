import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validateSignUpInput from '../../../server/shared/validateSignUpInput';
import { signupLoading, signupUser } from '../../actions/userAuthActions';
import SignupForm from './SignupForm';

/**
 *
 * @class Signup
 *
 * @extends { React.Component }
 */
export class Signup extends React.Component {

  /**
   * @description Creates an instance of Signup
   *
   * @param {object} props -react props object
   *
   * @returns {void} -return nothing
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { errors: {} };
  }
  /**
   * @description handles onChange event
   *
   * @param {object} event -event object
   *
   * @returns {void} -returns nothing
   */
  handleChange(event) {
    const value = event.target.value.trim();
    const name = event.target.name;
    this.setState({ [name]: value });
  }
   /**
   * @description handles submit event
   *
   * @param {object} event -event objet
   *
   * @returns {void} -returns nothing
   */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {} });
    const { errors, isValid } = validateSignUpInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    } else {
      this.props.setLoading(true);
      this.props.signupUser(this.state, this.props.history);
    }
  }
  /**
   * @description renders component
   *
   * @returns {jsx} -jsx representation of the component
   */
  render() {
    return (
      <SignupForm
        loading={this.props.isLoading}
        error={this.props.error}
        errors={this.state.errors}
        validate={this.validateInput}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
/**
 * @description Maps state to props
 *
 * @param {object} state -application state
 *
 * @returns {object} -returns part of the state
*/
const mapStateToProps = state => (
  {
    user: state.authReducer.user,
    error: state.authReducer.signupError,
    isLoading: state.itemLoadingReducer.signupLoading,
  }
);

/**
 * @description Maps dispatch to props
 *
 * @param {function} dispatch -dispatch function
 *
 * @returns {object} -actions to be dispatched
 */
const mapDispatchToProps = dispatch => (
  {
    signupUser: (user, history) => {
      dispatch(signupUser(user, history));
    },
    setLoading: (bool) => {
      dispatch(signupLoading(bool));
    },
  }
);
Signup.propTypes = {
  user: PropTypes.object,
  isLoading: PropTypes.bool,
  setLoading: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  error: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
