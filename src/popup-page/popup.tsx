import React, {FC, useEffect, useState} from 'react';
import {render} from 'react-dom';

interface IProps {
  
}

export const Popup: FC<IProps> = () => {

  const [content, setContent] = useState('N/A');

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {content}
    </div>
  );
}

render(<Popup />, document.getElementById("popup"));
