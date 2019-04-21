import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';

const User = ({ user }) => {

  if (!user) return null;

  return (
    <React.Fragment>
      <h2>User Details</h2>
      <List>
      {user &&
        Object.keys(user).map(function(key) {
          if (key === 'profile_image_url') return <li key={key}><img src={user[key]} alt="user profile" /></li>;
          return <li key={key}>{key}: {user[key]}</li>;
        })
      }
      </List>
    </React.Fragment>
  )
}

User.propTypes = {
  user: PropTypes.any
};

export default User;
