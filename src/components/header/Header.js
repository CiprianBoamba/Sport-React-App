import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = ({title,icon}) => {
  return (
    <Fragment>
        <h1>
          <i className={icon}></i> {title}
        </h1>
       
    </Fragment>
  )
}

Header.defaultProps = {
  title: 'Sports Info',
  icon: 'fas fa-info'
}
Header.propTypes = {
  title:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,
}

export default Header
