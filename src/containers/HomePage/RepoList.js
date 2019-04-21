import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';

const RepoList = ({ repos }) => {

  if (!repos) return null;

  return (
    <React.Fragment>
      <h2>Repo List</h2>
      {repos &&
        <List>
          {repos.map(repo => (<li key={repo.name}>{repo.name}</li>))}
        </List>
      }
    </React.Fragment>
  )
}

RepoList.propTypes = {
  repos: PropTypes.any
};

export default RepoList;
