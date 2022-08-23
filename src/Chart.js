import { Line } from '@ant-design/plots';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';


const Chart = (props) => {
    const id = props.id;
    const now = Math.floor(Date.now()/1000 );
    const yearBefore = now - 31556926 ;

    const [prices,setPrices] = useState([]);

    useEffect( () => {
      requestPrices();
    }, [] );

    async function requestPrices()  {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${yearBefore}&to=${now}`
      );
      const json = await res.json();
      const allPrices =  json.prices.map( (element) => { 
        
        return (
        {"date": element[0], "price":element[1] } ) } ) ;
        setPrices(allPrices);
    } 
    

    const data = prices;

    const config = {
        data,
        padding: 'auto',
        xField: 'date',
        yField: 'price',
        xAxis: {
          type:"time",
          tickCount: 10,
        },
        yAxis: {
        },
      };


    return(
        <Line {...config} />
    )
}

export default Chart;