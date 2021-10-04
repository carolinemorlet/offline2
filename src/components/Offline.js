import { useState, useEffect } from 'react';
import {
    Textarea,
    Input,
    Btn,
    Title,
    Wrapper,
    Wrapper2,
} from './styledComponents';

const Offline = () => {
  const [files, setFiles] = useState('');

  useEffect(() => {
    let local = localStorage.getItem('JSON');
    local && setFiles(JSON.parse(local));
  }, [files]);

  const handleChange = (e) => {
    let fileReader  = new FileReader();
    let file = e.target.files[0];

    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
  };

  const onSave = () => {
    localStorage.setItem('JSON', JSON.stringify(files));
    alert('file saved');
  };

  const onQuite = () => {
    localStorage.removeItem('JSON');
    setFiles('');
    alert('file deleted');
  };

  return (
    <Wrapper>
      <Title>Projet Pwa</Title>
      <label>
        <Input  type="file" onChange={handleChange}/>
      </label>

      {files && (
        <Textarea
          style={{ 'margin-top': '20px'}}
          rows="30"
          cols="43"
          value={files}
          readOnly
        ></Textarea>
      )}
      <Wrapper2>
        <Btn  onClick={onSave}>Sauvegarder</Btn>
        <Btn primary onClick={onQuite}>Quitter</Btn>
      </Wrapper2>
    </Wrapper>
  );
};

export default Offline;
