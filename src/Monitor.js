/* eslint-disable */
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import columns from './Columns';

const Monitor = () => {

    const [param, setParam] = useState("");
    const[coins, setCoins] = useState([]);
    const[searchedCoin,setSearchedCoin] = useState([]);


    useEffect( () => {
        requestCoins();
    }, [] );

    async function requestCoins() {
        const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const json = await res.json();

        setCoins(json);
    }

    const searchFilter = (value) => {
        setParam(value.toLowerCase());
        const filtered = coins.filter( (coin) => { return (
            coin.name.toLowerCase().includes(value) || coin.symbol.toLowerCase().includes(value)
        ) } );
        setSearchedCoin(filtered);
    }


    return(
        <div className="monitor" >
            

            <div className="search" >
                <input 
                placeholder="Search a Coin"
                value= {param}
                onChange= { (e) => searchFilter(e.target.value) }
                ></input>

            </div>

            <div className='result' >
                <header className='result-header' >

                <Table
                    dataSource={ (param.length) ? searchedCoin : coins }
                    columns={columns()} >

                </Table>
                </header>
            </div>
        </div>
    )
}

export default Monitor;