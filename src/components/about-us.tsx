import React, { useState } from 'react';

export default function AboutUs() {
  const [input, setInput] = useState('');
  function _treat(e: React.ChangeEvent) {
    const { files }: { files: FileList | null } = e.target as HTMLInputElement;
    const fileListAsArray = files ? Array.from([...files]) : [];

    if (fileListAsArray) {
      setInput(URL.createObjectURL(fileListAsArray[0]));
    }
  }

  return (
    <div className="App">
      <input type="file" accept="image/*" multiple onChange={_treat} />

      <img src={input} />
    </div>
  );
}
