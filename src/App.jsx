import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ProgressBar = ({progress, index}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    if(animatedProgress < progress){
      setTimeout(() => {
        setAnimatedProgress(animatedProgress + 1)
      }, 100)
    }
  }, [animatedProgress]);

  return (
    <p className='outer' key={index}>
      <div className='inner' style={{
        transform: `translateX(${animatedProgress - 100}%)`
      }}>
        {animatedProgress}%
      </div>
    </p>
  )
}

function App() {

  return (
    <>
        {
          [5,20,40,60,80,100].map((x, index) => {
            return <ProgressBar index={index} progress={x} />
          })
        }
    </>
  )
}

export default App
