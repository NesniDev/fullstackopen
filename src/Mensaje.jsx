
const Mensaje = (props) => {
  const message = props.message;
    return  <h1 style={{color:props.color}}>
              {props.message}
            </h1>
  }

  export default Mensaje
