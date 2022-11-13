import logo from './logo.svg';
import './App.css';

import Definition from './components/Definition';
import GridContainer from './components/GridContainer';
import {Item, SubItem} from './components/MenuItem'

import LearnIcon from './assets/icons/Learn.svg'
import StocksIcon from './assets/icons/Stocks.svg'
import CryptoIcon from './assets/icons/Crypto.svg'
import SuggestionsIcon from './assets/icons/Suggestions.svg'


function App() {
  return (
    <div className='app-div'>
      <div className='menu-div'>
        <Item icon={LearnIcon} label="Education" />
        <SubItem label="Technical" />
        <SubItem label="Fundamental" />
        <Item icon={StocksIcon} label="Stocks" />
        <Item icon={CryptoIcon} label="Crypto" />
        <Item icon={SuggestionsIcon} label="Get Suggestions" />
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
