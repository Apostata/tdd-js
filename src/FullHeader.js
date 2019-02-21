import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({
  title, subtitle, bgColor, textColor, font, bgImage,
}) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font,
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <header style={headerStyles}>
      {title && <h1>{title}</h1> /* se tem titulo mostra <h1/> */ }
      {subtitle && <h2>{subtitle}</h2> /* se tem titulo mostra <h1/> */ }
    </header>
  );
};


FullHeader.defaultProps = {
  title: null,
  subtitle: null,
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImage: '',
};

FullHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
  bgImage: PropTypes.string,
};

export default FullHeader;
