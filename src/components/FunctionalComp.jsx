
const FunctionalComponent = (props) => {
  // console.log(props)
  
  return (
    <>
    <h1>Funtional {props.name}</h1>
    {props.children}
    </>
  )
};

export default FunctionalComponent;
