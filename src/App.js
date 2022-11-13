import './App.css';

import Definition from './components/Definition';
import GridContainer from './components/GridContainer';
import { useState } from 'react';
import {Item, SubItem} from './components/MenuItem'

import LearnIcon from './assets/icons/Learn.svg'
import StocksIcon from './assets/icons/Stocks.svg'
import CryptoIcon from './assets/icons/Crypto.svg'
import SuggestionsIcon from './assets/icons/Suggestions.svg'
import ItemCard from './components/ItemCard';
import CardList from './components/CardList';

import Stocks from './Stocks.json'

function App() {
  const [tabIndex, setTabIndex] = useState(1)

  return (
    <div className='app-div'>
      <div className="menu-div">
          <Item clickFunc={() => setTabIndex(1)} active={tabIndex === 1? "tab active-tab": "tab"} icon={LearnIcon} label="Education" />
          <SubItem label="Technical" />
          <SubItem label="Fundamental" />
          <Item clickFunc={() => setTabIndex(2)} active={tabIndex === 2? "tab active-tab": "tab"} icon={StocksIcon} label="Stocks" />
          <Item clickFunc={() => setTabIndex(3)} active={tabIndex === 3? "tab active-tab": "tab"} icon={CryptoIcon} label="Crypto" />
          <Item clickFunc={() => setTabIndex(4)} active={tabIndex === 4? "tab active-tab": "tab"} icon={SuggestionsIcon} label="Get Suggestions" />
      </div>

      <div className={tabIndex === 1? '.content-div': 'hidden-content-div'}>
        <GridContainer>
          <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
          <Definition term="Raj" definition="Raj is the fucking g bro" />
          <Definition term="Raj" definition="Raj is the fucking g bro" />
          <Definition term="Raj" definition="Raj is the fucking g bro" />
          <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
          <Definition term="Raj" definition="Raj is the fucking g bro" />
          <Definition term="Ur Mom" definition="Your mom is very very large its hard to even fit her in this card lmfao" />
          <Definition term="Intrinsic Value" definition="One of the primary assumptions behind fundamental analysis is that a stock's current price often does not fully reflect the value of the company when compared to publicly available financial data. A second assumption is that the value reflected from the company's fundamental data is more likely to be closer to the true value of the stock." />
        </GridContainer>
      </div>

      <div className={tabIndex === 2? '.content-div': 'hidden-content-div'}>
        {/* <CardList>
          <ItemCard ticker={Stocks[0].ticker} name={Stocks[0].name} price={Stocks[0].price} change={Stocks[0].change}/>
        </CardList> */}
      </div>
    </div>
  );
}

export default App;
