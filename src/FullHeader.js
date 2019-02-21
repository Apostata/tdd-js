import React from 'react';
import PropTypes from 'prop-types';
import {
  headerStyle, containerStyle, titleStyle, subTitleStyle, videoStyle,
} from './styles';

const FullHeader = ({
  title, subtitle, bgColor, textColor, font, bgImage, video,
}) => {
  const headerStylesCombined = {
    ...headerStyle,
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font,
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <header style={headerStylesCombined}>
      <div style={containerStyle}>
        {title && <h1 style={titleStyle}>{title}</h1> /* se tem titulo mostra <h1/> */ }
        {subtitle && <h2 style={subTitleStyle}>{subtitle}</h2> }
      </div>
      {video && <video style={videoStyle} autoPlay muted loop src={video} /> }
    </header>
  );
};


FullHeader.defaultProps = {
  title: null,
  subtitle: null,
  video: null,
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImage: '',
};

FullHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  video: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
  bgImage: PropTypes.string,
};

export default FullHeader;
