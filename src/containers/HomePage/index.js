import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setUsername } from './actions';
import { selectUsername, selectRepos } from './selectors';

import RepoList from './RepoList';

export class HomePage extends React.PureComponent {

  render() {
    const { repos } = this.props;

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
        <RepoList repos={repos} />
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
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
  repos: selectRepos()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
