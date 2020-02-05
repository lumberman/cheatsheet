import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const defaultCode = '// type your code... \n'

const CodeEditor = () => {
  const options = {
    // selectOnLineNumbers: true,
    // roundedSelection: false,
    readOnly: false,
    // cursorStyle: 'line',
    // automaticLayout: false
  };

  return (
    <MonacoEditor
      width="100%"
      height="300"
      language="javascript"
      theme="vs-dark"
      value={defaultCode}
      options={options}
    />
  );
}

export default CodeEditor;
