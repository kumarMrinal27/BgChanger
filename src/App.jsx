import { useState } from 'react'
import ColorButtons from './ColorButtons';

function App() {
  let yellow = '#ffc800';
  const [color, setColor] = useState(yellow)

  return (
    <>
      <ColorButtons />
    </>
  )
}

export default App
