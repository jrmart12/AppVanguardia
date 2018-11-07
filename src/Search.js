
import React from 'react';
import PropTypes from 'prop-types';
import HeaderSearch from './HeaderSearch.js';

const Search = ({ onSubmitUsername }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    if (onSubmitUsername && username) {
      onSubmitUsername(username);
    }
  };

  return (
    <div>
      <HeaderSearch/> 
      <div className="container">
        <section className="search six offset-by-three columns">
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSubmitUsername: PropTypes.func
};

export default Search;