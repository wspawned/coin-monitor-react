/* eslint-disable */
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import columns from './Columns';

const localCache = new Set() ;

const Monitor = () => {

    const [param, setParam] = useState("");
    const[coins, setCoins] = useState([]);
    const[searchedCoin,setSearchedCoin] = useState([]);
    const[favCoin,setFavCoin]= useState([]);
    const [favOpen,setFavOpen] = useState(false);

    function favClick(id) {
        if(localCache.has(id)) {
            localCache.delete(id);
            console.log(localCache);
        } else {
            localCache.add( id ) ;
            let index = 200;
            for (const coin of coins) { if(coin.id === id) { index = coins.indexOf(coin) } };
            setCoins( prevState => {
                prevState[index].isFav = true;
                console.log(prevState);
                return ( prevState );
            } )
        }
    }

    function toggleFav() { 
        if(localCache.length) {setFavOpen(!favOpen)} 
    };

    useEffect( () => {
        if(favOpen === true) {
            setCoins(localCache);
        } else {
            requestCoins();

        }
    }, [favOpen] )
    

    // useEffect( () => {
    //     requestCoins();
    // }, [] );

    async function requestCoins() {
        const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const json = await res.json();

        setCoins( json.map( (item) => { return ( {...item, isFav:false } ) } )   );
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
            

            <div className="search-favorites" >
                <input 
                placeholder="Search a Coin"
                value= {param}
                onChange= { (e) => searchFilter(e.target.value) }
                ></input>

                <button className='favorites'
                onClick={ () => toggleFav() }
                > favorites </button>
            </div>

            <div className='result' >
                <header className='result-header' >

                <Table
                    dataSource={ (param.length) ? searchedCoin : coins }
                    columns={columns( favClick )} >

                </Table>
                </header>
            </div>
        </div>
    )
}

export default Monitor;