import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setUsername } from './actions';
import { selectUsername, selectUser, selectError } from './selectors';

import User from './User';
import Error from './Error';

export class HomePage extends React.PureComponent {

  render() {
    const { user, error } = this.props;

    return (
      <React.Fragment>
        <h2>Hello World</h2>
        <form onSubmit={this.props.onSubmitForm}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {error && <Error error={error} />}
        {!error && <User user={user} />}
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  user: PropTypes.any,
  error: PropTypes.string
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(setUsername(evt.target.name.value))
    }
  }
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  user: selectUser(),
  error: selectError()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
