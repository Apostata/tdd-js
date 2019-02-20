import React from 'react';
import PropTypes from 'prop-types';

const Component = (props) => (
    <h1>Hello {props.name}!</h1>
);

Component.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Component;
