/**
*
* RelationIco
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

/* eslint-disable jsx-a11y/no-static-element-interactions */
class RelationIco extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleClick = () => {
    const target = {
      name: 'params.nature',
      value: this.props.name,
      type: 'string',
    };

    this.props.handleChange({ target });
  }

  render() {
    return (
      <img src={this.props.ico} alt="ico" onClick={this.handleClick} className={styles.relationIco} />
    );
  }
}

RelationIco.propTypes = {
  handleChange: PropTypes.func,
  ico: PropTypes.any,
  name: PropTypes.string,
}

export default RelationIco;
