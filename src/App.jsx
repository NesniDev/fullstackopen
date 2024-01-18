import './App.css'
import Mensaje from "./Mensaje.jsx"

const Description = () =>{
  return <p>Esta es una app del curso Bootcamp Midu</p>
}

const App = () => {

  return (
    <div>
      <Mensaje color="red" message='Estoy haciendo' />
      <Mensaje color="yellow"message='un curso' />
      <Mensaje color="green" message='de react js' />
      <Description />
    </div>
  )
}

export default App
