


export default function Secret(props) {
  function SecretMessage() {
    return <p>Seeeecreeeet!!!</p>;
  }
  
  function NormalMessage() {
    return <p>Hello!</p>;
  }

  return (
    <section>
      <span>{props.authorized ? <SecretMessage /> : <NormalMessage />}</span>
    </section>

  )
}