/* eslint-disable */
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import columns from './Columns';

const Result = () => {

    const[coins, setCoins] = useState([]);

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

    return (
        <div className='result' >
            <header className='result-header' >

                <Table
                dataSource={coins}
                columns={columns()} >

                </Table>
            </header>
        </div>
    )
}

export default Result;

/*
const data = [
    {
        name:"name1",
        age:10,
        address:"address1",
        key:"1"
    },

    {
        name:"name2",
        age:20,
        address:"address2",
        key:"2"
    },
    
    {
        name:"name3",
        age:30,
        address:"address3",
        key:"3"
    }
    
]

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key:"key",
        render: name => {
            return(
                <a> {name} </a>
            )
        }
    },
    {
        title: "Age",
        dataIndex: "age",
        key:"key",
        sorter: (a,b) => a.age - b.age
    },
    {
        title: "Address",
        dataIndex: "address",
        key:"key"
    },
]

*/