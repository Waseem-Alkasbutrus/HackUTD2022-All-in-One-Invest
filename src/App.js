import logo from './logo.svg';
import './App.css';

import Definition from './components/Definition';
import GridContainer from './components/GridContainer';
import {Item, SubItem} from './components/MenuItem'

import APPL from'./json/APPL.json'
import AMZN from './json/AMZN.json'
import FXAIX from './json/FXAIX.json'
import GOOGL from './json/GOOGL.json'
import INTC from './json/INTC.json'
import JEPI from './json/JEPI.json'
import JNJ from './json/JNJ.json'
import JPST from './json/JPST.json'
import MA from './json/MA.json'
import META from './json/META.json'
import MSFT from './json/MSFT.json'
import NVDA from './json/NVDA.json'
import QQQ from './json/QQQ.json'
import SPY from './json/SPY.json'
import TSLA from './json/TSLA.json'
import V from './json/V.json'
import VOO from './json/VOO.json'
import VFAIX from './json/VFIAX.json'
import VSMPX from './json/VSMPX.json'

import BTC from './json/BTC-USD.json'
import DOGE from './json/DOGE-USD.json'
import ETH from './json/ETH-USD.json'
import SOL from './json/SOL-USD.json'
import XRP from './json/XRP-USD.json'
import Graph from './components/Graph';

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
