import { Line } from '@ant-design/plots';
import { useEffect, useState } from 'react';


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
      let currentPrices = []
      json.prices.map( (element) => {
        currentPrices.push( {"date":element[0], "price":element[1] } ) ;
        setPrices( currentPrices )
      } )
    }


    const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 11 },
    { x: 4, y: 9 },
    { x: 5, y: 14 },
    { x: 6, y: 19 },
    { x: 7, y: 17 },
    { x: 8, y: 22 },
    { x: 9, y: 24 },
    { x: 10, y: 23 },
    { x: 11, y: 27 },
    { x: 12, y: 32 },
    { x: 13, y: 30 },
    { x: 14, y: 35 },
    { x: 15, y: 37 },
    { x: 16, y: 40 },
    ];

    const config = {
        data,
        width: 800,
        height: 400,
        autoFit: false,
        xField: 'x',
        yField: 'y',
        point: {
          size: 8,
          shape: 'diamond',
        },
        label: {
          style: {
            fill: '#aaa',
          },
        },
      };


    return(
        <Line {...config} />
    )
}

export default Chart;