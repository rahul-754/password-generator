import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const[password,setPassword] = useState("");
  const[length,setLength] = useState(6);
  const[numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  let generatePass = () => {
      let pass ="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str+="1234567890"
      if(charAllowed) str+="!@#$$%^&*"
      for(let i=1;i<=length;i++){
        let ch = Math.floor(Math.random() * str.length);
        pass+=str.charAt(ch);
      }
      setPassword(pass);
  }
  useEffect(()=>{
generatePass()
  },[length,numberAllowed,charAllowed])


  return (
    <div className="flex items-start justify-center w-full h-screen bg-slate-800 pt-10">
      <div className="w-[700px] h-[300px] bg-slate-300 ">
        <input className='w-3/4 h-10 rounded-xl ml-[70px] ' type={showPassword ? "text" : "password"}  value={password} placeholder='Password'  readOnly/>
        <button className='bg-blue-400 w-10 h-10 rounded-lg'>Copy</button>
       <div>
       <input  className='cursor-pointer'type='range' min={6} max={20} value={length} onChange={(e) =>{setLength(e.target.value)}} ></input>
        <label  >Length : {length}</label>
        </div>
        <div>
          <input type="checkbox"  defaultChecked={numberAllowed} 
          onChange={() => {
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label >Checknumbers</label>
        </div>
        <div>
          <input type="checkbox"  defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label >specialchars</label>

        </div>
        <button
          className="bg-green-400 w-20 h-10 rounded-lg mt-4"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default App;
