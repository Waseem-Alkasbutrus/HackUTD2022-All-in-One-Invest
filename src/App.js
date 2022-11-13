import './App.css';

import Definition from './components/Definition';
import GridContainer from './components/GridContainer';
import { useState } from 'react';
import {Item, SubItem} from './components/MenuItem'

import APPL from'./json/APPL.json'
import AMZN from './json/AMZN.json'
import FXAIX from './json/FXAIX.json'
import GOOGL from './json/GOOGL.json'
import INTL from './json/INTC.json'
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
import VFIAX from './json/VFIAX.json'
import VSMPX from './json/VSMPX.json'

import BTC from './json/BTC-USD.json'
import DOGE from './json/DOGE-USD.json'
import ETH from './json/ETH-USD.json'
import SOL from './json/SOL-USD.json'
import XRP from './json/XRP-USD.json'
import Graph from './components/Graph';

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
          <Item clickFunc={() => setTabIndex(2)} active={tabIndex === 2? "tab active-tab": "tab"} icon={StocksIcon} label="Stocks" />
          <Item clickFunc={() => setTabIndex(3)} active={tabIndex === 3? "tab active-tab": "tab"} icon={SuggestionsIcon} label="Get Suggestions" />
      </div>

      <div className={tabIndex === 1? '.content-div': 'hidden-content-div'}>
        <GridContainer>
          <Definition term="Open" definition="The opening price is the price at which a security first trades upon the opening of an exchange on a trading day." />
          <Definition term="Close" definition="The closing price is the raw price or cash value of the last transacted price in a security before the market officially closes for normal trading." />
          <Definition term="High" definition="The highest intraday price of a stock in the most recent (or current) trading session." />
          <Definition term="Low" definition="The lowest intraday price of a stock in the most recent (or current) trading session." />
          <Definition term="Volume" definition="Volume is simply the number of shares traded in a particular stock, index, or other investment over a specific period of time." />
          <Definition term="P/E" definition="The price-to-earnings ratio is the ratio for valuing a company that measures its current share price relative to its earnings per share (EPS). A high P/E ratio could mean that a company's stock is overvalued, or that investors are expecting high growth rates in the future. A P/E ratio holds the most value to an analyst when compared against similar companies in the same industry or for a single company across a period of time." />
          <Definition term="Market Cap" definition="Market capitalization refers to the total dollar market value of a company's outstanding shares of stock. To calculate a company's market cap, multiply the number of outstanding shares by the current market value of one share. Market cap is often used to determine a company's size, then evaluate the company's financial performance to other companies of various sizes." />
          <Definition term="52 Week High" definition="The 52-week high is the highest price at which a security, such as a stock, has traded during the time period that equates to one year." />
          <Definition term="52 Week Low" definition="The 52-week low is the lowest price at which a security, such as a stock, has traded during the time period that equates to one year." />
          <Definition term="Average Volume" definition="Average daily trading volume (ADTV) is the average number of shares traded within a day in a given stock. Sizable volume increases signify something is changing in the stock that is attracting more interest. This could be bearish or bullish depending on which way the price is heading. Decreasing volume shows interest is waning, but even declining volume is useful because when higher volume returns there is often a strong price push as well." />
          <Definition term="Yield" definition="Yield refers to the earnings generated and realized on an investment over a particular period of time. It's expressed as a percentage based on the invested amount, current market value, or face value of the security. Higher yields are perceived to be an indicator of lower risk and higher income, but a high yield may not always be a positive, such as the case of a rising dividend yield due to a falling stock price." />
          <Definition term="Beta" definition="Beta (β) is a measure of the volatility—or systematic risk—of a security or portfolio compared to the market as a whole (usually the S&P 500). Stocks with betas higher than 1.0 can be interpreted as more volatile than the S&P 500. Beta data about an individual stock can only provide an investor with an approximation of how much risk the stock will add to a (presumably) diversified portfolio." />
          <Definition term="EPS" definition="Earnings per share (EPS) is calculated as a company's profit divided by the outstanding shares of its common stock. The resulting number serves as an indicator of a company's profitability. A higher EPS indicates greater value because investors will pay more for a company's shares if they think the company has higher profits relative to its share price." />
          <Definition term="Simple Moving Average (SMA)" definition="Simple moving averages calculate the average of a range of prices by the number of periods within that range. It is a technical indicator that can aid in determining if an asset price will continue or if it will reverse a bull or bear trend." />
          <Definition term="Exponential Moving Average (EMA)" definition="Exponential moving averages (EMAs) are designed to see price trends over specific time frames, such as 50 or 100 days. Compared to simple moving averages, EMAs give greater weight to recent (more relevant) data." />
          <Definition term="Bollinger Bands" definition="Bollinger BandsÂ® are a technical analysis tool developed by John Bollinger for generating oversold or overbought signals. The upper and lower bands are typically 2 standard deviations +/- from a 20-day simple moving average (which is the center line), but they can be modified. When the price continually touches the upper Bollinger Band, it can indicate an overbought signal while continually touching the lower band indicates an oversold signal." />
        </GridContainer>
      </div>

      <div className={tabIndex === 2? '.content-div': 'hidden-content-div'}>
        <CardList>
          <ItemCard file={APPL} ticker={Stocks[0].ticker} name={Stocks[0].name} price={Stocks[0].price} change={Stocks[0].change}/>
          <ItemCard file={AMZN} ticker={Stocks[1].ticker} name={Stocks[1].name} price={Stocks[1].price} change={Stocks[1].change}/>
          <ItemCard file={FXAIX} ticker={Stocks[2].ticker} name={Stocks[2].name} price={Stocks[2].price} change={Stocks[2].change}/>
          <ItemCard file={GOOGL} ticker={Stocks[3].ticker} name={Stocks[3].name} price={Stocks[3].price} change={Stocks[3].change}/>
          <ItemCard file={INTL} ticker={Stocks[4].ticker} name={Stocks[4].name} price={Stocks[4].price} change={Stocks[4].change}/>
          <ItemCard file={JEPI} ticker={Stocks[5].ticker} name={Stocks[5].name} price={Stocks[5].price} change={Stocks[5].change}/>
          <ItemCard file={JNJ} ticker={Stocks[6].ticker} name={Stocks[6].name} price={Stocks[6].price} change={Stocks[6].change}/>
          <ItemCard file={JPST} ticker={Stocks[7].ticker} name={Stocks[7].name} price={Stocks[7].price} change={Stocks[7].change}/>
          <ItemCard file={MA} ticker={Stocks[8].ticker} name={Stocks[8].name} price={Stocks[8].price} change={Stocks[8].change}/>
          <ItemCard file={META} ticker={Stocks[9].ticker} name={Stocks[9].name} price={Stocks[9].price} change={Stocks[9].change}/>
          <ItemCard file={MSFT} ticker={Stocks[10].ticker} name={Stocks[10].name} price={Stocks[10].price} change={Stocks[10].change}/>
          <ItemCard file={NVDA} ticker={Stocks[11].ticker} name={Stocks[11].name} price={Stocks[11].price} change={Stocks[11].change}/>
          <ItemCard file={QQQ} ticker={Stocks[12].ticker} name={Stocks[12].name} price={Stocks[12].price} change={Stocks[12].change}/>
          <ItemCard file={SPY} ticker={Stocks[13].ticker} name={Stocks[13].name} price={Stocks[13].price} change={Stocks[13].change}/>
          <ItemCard file={TSLA} ticker={Stocks[14].ticker} name={Stocks[14].name} price={Stocks[14].price} change={Stocks[14].change}/>
          <ItemCard file={V} ticker={Stocks[15].ticker} name={Stocks[15].name} price={Stocks[15].price} change={Stocks[15].change}/>
          <ItemCard file={VFIAX} ticker={Stocks[16].ticker} name={Stocks[16].name} price={Stocks[16].price} change={Stocks[16].change}/>
          <ItemCard file={VOO} ticker={Stocks[17].ticker} name={Stocks[17].name} price={Stocks[17].price} change={Stocks[17].change}/>
          <ItemCard file={VSMPX} ticker={Stocks[18].ticker} name={Stocks[18].name} price={Stocks[18].price} change={Stocks[18].change}/>
        </CardList>
      </div>

      <div className={tabIndex === 3? '.content-div': 'hidden-content-div'}>
        <p>There are 3 main categories to divide people based on the survey results.</p>
        <p>Low Risk/Low Reward/Low Research: Passive ETFS, Tech Stock (Large Market Cap)</p>
        <p>VOO, QQQ, APPL, MSFT</p>
        <p>High Risk/High Reward/High Research: Semiconductor, Internet Retail, Drug Manufacturing, Banks</p>
        <p>NVDA, INTC, AMZN, JNJ, PFE, V, BAC</p>
        <p>High Risk/High Reward/Low Research: Active ETFS, Mutual Funds</p>
        <p>VSMPX, VFIAX, FXAIX, JPST, JEPI</p>
      </div>
    </div>
  );
}

export default App;
