import logo from './logo.svg';
import './App.css';

import Definition from './components/Definition';
import GridContainer from './components/GridContainer';
import {Item, SubItem} from './components/MenuItem'

function App() {
  return (
    <div>
      <div>
        <Item icon="./" label="Education" />
        <SubItem label="Technical" />
        <SubItem label="Fundamental" />
      </div>
      <GridContainer>
        <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
        <Definition term="Raj" definition="Raj is the fucking g bro" />
        <Definition term="Raj" definition="Raj is the fucking g bro" />
        <Definition term="Raj" definition="Raj is the fucking g bro" />
        <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
        <Definition term="Raj" definition="Raj is the fucking g bro" />
        <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
        <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
      </GridContainer>
    </div>
  );
}

export default App;
