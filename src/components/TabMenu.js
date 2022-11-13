import React from "react";
import { Item, SubItem } from "./MenuItem";
import { useState } from "react";

import LearnIcon from '../assets/icons/Learn.svg'
import StocksIcon from '../assets/icons/Stocks.svg'
import CryptoIcon from '../assets/icons/Crypto.svg'
import SuggestionsIcon from '../assets/icons/Suggestions.svg'

export default function() {
    const [tabIndex, setTabIndex] = useState(1)
    
    return (
        <div className="container">
            <Item onClick={() => setTabIndex(1)} className={tabIndex === 1? "tab active-tab": "tab"} visibileicon={LearnIcon} label="Education" />
            <SubItem label="Technical" />
            <SubItem label="Fundamental" />
            <Item onClick={() => setTabIndex(2)} className={tabIndex === 2? "tab active-tab": "tab"} icon={StocksIcon} label="Stocks" />
            <Item onClick={() => setTabIndex(3)} className={tabIndex === 3? "tab active-tab": "tab"} icon={CryptoIcon} label="Crypto" />
            <Item onClick={() => setTabIndex(4)} className={tabIndex === 4? "tab active-tab": "tab"} icon={SuggestionsIcon} label="Get Suggestions" />
        </div>
    )
}