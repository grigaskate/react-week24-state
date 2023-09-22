import '../style/App.css';
import Cards from './Cards/Cards'

const data=[
  {
    rate: '300',
    speed: '10',
    color: 'blue',
  },
  {
    rate: '450',
    speed: '50',
    color: 'pink',
  },
  {
    rate: '550',
    speed: '100',
    color: 'red',
  },
  {
    rate: '1000',
    speed: '200',
    color: 'yellow',
  },
]

function App() {
  return (
    <div className="container">
    < Cards arr={data}/>
    </div>
  );
}


export default App;

