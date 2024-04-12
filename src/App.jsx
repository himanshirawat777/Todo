import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './Slider'
import Todo from './Todo'
function App() {

  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }

  // const decrement = () =>{
  //   setCount(count - 1)
  // }

  // return (
  //   <>
  //   <button onClick={increment}>increment</button>
  //   <h1>{count}</h1>
  //   <button onClick={decrement}>decrement</button>
  //   <h3>{count}</h3>

  //   </>
  // )

  // ------------------------------------------------------


  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // })

  // return(
  //   <>
  //   <h1>I have rendered {count} times!</h1>
  //   </>
  // )

  // ------------------------------------------------------------

//   const [length, setLength] = useState(6)
//   const [numberAllow, setNumberAllow] = useState(false)
//   const [CharacteAllow, setCharacterAllow] = useState(false)
//   const [password, setPassword] = useState("")

//  const reGenrate = useCallback(() => {

//     let pass = "";

//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllow) {
//       str += '123456789'
//     }

//     if (CharacteAllow) {
//       str += "!@#$%^&*"
//     }

//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length)
//       pass += str[char]
//     }
//     setPassword(pass)

//   })

//   useEffect (() => {
//     reGenrate 
//   },[numberAllow, CharacteAllow])

//   return (
//     <>
//       <div className='main-div'>
//         <h1>Password Generator</h1>
//         <div className='input-box'>
//           <input type='text' value={password} readOnly />
//         </div>

//         <div className='password-option'>
//           <div className='number-allow'>
//             <input type='checkbox' onChange={() => setNumberAllow(prev => !prev)} name='' id='numberAllow' defaultChecked={numberAllow} />
//             <label htmlFor='number'>Number</label>
//           </div>
//           <div className='special-char-allow'>
//             <input type='checkbox'  onChange={() => setCharacterAllow(prev => !prev)} name='' id='characterAllow' defaultChecked={CharacteAllow} />
//             <label htmlFor='character'>Character</label>
//           </div>
//         </div>
//         <button onClick={reGenrate}>Generate password</button>

//       </div>
//     </>
//   );
// -------------------------------------------------------------------------------------

return(
  <>
  {/* <Slider/> */}
  <Todo/>

</>
  
)

}


export default App;

