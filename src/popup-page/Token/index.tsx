import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context-provider";

function Token() {

  // const [address, setAddress] = useState("")
  // const [token, setToken] = useState("")

  const { token, setToken, address, setAddress, account } = useContext(Context);

  return (<div className="">
    <div className="flex items-center gap-4 animate-fade animate-delay-[200ms]">
      <span className="max-w-[70px] w-[70px] truncate">Адрес СRM</span><input value={address} onChange={e => setAddress(prev => { chrome.storage.local.set({ "address": e.target.value }); return e.target.value })} placeholder="https://app.salesap.ru/" type="text" className="border-solid border-main border-opacity-20 border-0 border-b py-1 outline-none focus:border-opacity-100 transition-all flex-1" />
    </div>
    <div className="flex items-center gap-4 animate-fade animate-delay-[250ms]">
      <span className="max-w-[70px] w-[70px] truncate">Токен</span><input value={token} onChange={e => setToken(prev => { chrome.storage.local.set({ token: e.target.value }); return e.target.value })} placeholder="https://app.salesap.ru/" type="text" className="border-solid border-main border-opacity-20 border-0 border-b py-1 outline-none focus:border-opacity-100 transition-all flex-1" />
    </div>
    <div className="grid grid-cols-3">
      <div>
        <div>Роль: <span>{ }</span></div>
        <div>e-mail: <span>{ }</span></div>
      </div>
      <div>
        <div>user: <span>{ }</span></div>
        <div>user: <span>{ }</span></div>
        <div>user: <span>{ }</span></div>
      </div>
      <div>
        <div>Подписка: <span>{ }</span></div>
        <div>user: <span>{ }</span></div>
        <div>user: <span>{ }</span></div>
      </div>
    </div>

  {JSON.stringify(account)}

  </div>)
}

export default <Token />