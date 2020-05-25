import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  render() {
    const { language, value } = this.props;
    
    return (
      <Prism language={language} style={duotoneLight}>
        {value}
      </Prism>
    );
  }
}

export default CodeBlock;
