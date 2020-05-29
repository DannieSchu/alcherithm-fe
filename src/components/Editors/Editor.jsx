import React from 'react';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools.js';

const Editor = ({ code, handleCodeChange, readOnly = false }) => {

  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="javascript"
      theme="monokai"
      name="root"
      onChange={handleCodeChange}
      fontSize={15}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      width="100%"
      wrapEnabled={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        maxLines: 20,
        readOnly
      }}/>
  );
};

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  handleCodeChange: PropTypes.func,
  readOnly: PropTypes.bool
};

export default Editor;
