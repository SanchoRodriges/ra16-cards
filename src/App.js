import Card from "./components/Card";
import CardBody from "./components/CardBody";
import CardImg from "./components/CardImg";

function App() {

  const card = {
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    btnText: 'Go somewhere',
    btnLink: '#',
  }

  return (
    <div className="App">
      <Card>
        <CardImg src='https://picsum.photos/300/200' />
        <CardBody data={card} />
      </ Card>

      <Card>
        <CardBody data={card} />
      </ Card>
    </div>
  );
}

export default App;