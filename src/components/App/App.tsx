import React, {useState} from "react"
import s from './App.module.scss'
import {Link, Outlet} from "react-router-dom"
import pngImage from '@/assets/dragon-icon.png'
import jpgImage from '@/assets/973wkeMrusukEbzJybh77cwSJZ9p2I1FCryQy0SG.jpeg'
import SvgImage from '@/assets/info-icon.svg'

const todo = (a: number) => {
  console.log(a)
}

export const App = () => {
  const [count, setCount] = useState(0)

  //
  // todo(188)
  //
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>Desktop platform</div>
  // }
  //
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>Mobile platform</div>
  // }

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div data-testid="app">
      {__ENV__ === 'development' && <strong>Development build</strong>}
      <h3 data-testid="platform">PLATFORM: {__PLATFORM__}</h3>
      <Link to="/about">about</Link>
      <br/>
      <Link to="/shop">shop</Link>
      <h3>{count}</h3>
      <button className={s.button} onClick={increment}>Inc</button>
      <Outlet/>
      <div>
        <img src={pngImage} alt="" width={100} height={100}/>
        <img src={jpgImage} alt="" width={100} height={100}/>
        <SvgImage width={25} height={25}/>
      </div>
    </div>
  )
}