interface ButtonProps {
  text: string;
}
function Button(props: ButtonProps) {
  return <p>{ props.text }</p>
}

export function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ok" />
    </div>
    
  )
}