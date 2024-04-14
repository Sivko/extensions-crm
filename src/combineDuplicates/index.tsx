import React, {FC, useEffect, useState} from 'react';
import {render} from 'react-dom';

export const CombineDublication = () => {

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    console.log("loadModal Window")
  }, []);

  return (
    <div className="">
      <div className=" fixed w-[60px] h-[60px] bottom-[20px] right-[30px] bg-lime-400" onClick={()=>setIsShow(true)}></div>
      {isShow && (<div className="fixed inset-0 bg-black opacity-50" onClick={()=>setIsShow(false)}></div>)}
    </div>
  );
}

export const initCombineDublication = () => render(<CombineDublication />, document.getElementById("CombineDublication"));
