import React from "react";
import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import "react-datepicker/dist/react-datepicker.css"

function convertEpochToSpecificTimezone(timeEpoch, offset){
  let d = new Date(timeEpoch);
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);  //This converts to UTC 00:00
  let nd = new Date(utc + (3600000*offset));
  
  return nd.toLocaleString();
}

function dataGenerator(company) {
    let companyData = []
    
    console.log(company)

    //key for each price
    for (let i = 1556582400000; i <= 1668124800000; i = i + 86400000) {
      let dailyCompanyData = {
        
        date: convertEpochToSpecificTimezone(i, 0),
        unix: i,
        Close: company.Close[i],
        SMA: company.SMA_100[i],
        EMA: company.EMA_100[i],
        UpperBand: company.Upperband[i],
        LowerBand: company.Lowerband[i]
    
      };
      companyData.push(dailyCompanyData);
    }

    return companyData
}

export default function Graph(props) {
    let dates = dataGenerator(props.companyFile)

    console.log(props.companyFile)
    
    return (
    <div className='container'>
      <header>
        <div>
          <LineChart
            width={1500}
            height={750}
            // This is the variable to be changed
            data={dates}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey = 'date' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              connectNulls
              type='line'
              dataKey="Close"
              stroke="#ff0000"
              dot={false}
            />

            {/* SMA_100 */}
            {/* <Line
              connectNulls
              type="monotone"
              dataKey="SMA"
              stroke="#0000ff"
              dot={false}
            /> */}
            {/* EMA_100 */}
            <Line
              connectNulls
              type="monotone"
              dataKey="EMA"
              stroke="#00ff00"
              dot={false}
            />

            {/* BBANDS */}

            {/* <Line
              connectNulls
              type="line"
              dataKey="UpperBand"
              stroke="#918e8e"
              dot={false}
            />
            <Line
              connectNulls
              type="line"
              dataKey="LowerBand"
              stroke="#918e8e"
              dot={false}
            /> */}

          </LineChart>
        </div>
        
      </header>
    </div>
  );
}
