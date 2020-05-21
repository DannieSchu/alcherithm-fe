import React from 'react';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools.js';

const Editor = ({ code, handleCodeChange }) => {
// dynamically pass in the code 

  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="javascript"
      theme="monokai"
      name="root"
      // onLoad={this.onLoad}
      onChange={handleCodeChange}
      fontSize={10}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        maxLines: 15,
      }}/>
  );
};

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  handleCodeChange: PropTypes.func
//   not required so you can use this for the code and the test
};

export default Editor;
