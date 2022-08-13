/* eslint-disable */

import 'antd/dist/antd.css';
import { Table } from 'antd';

const Result = () => {

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

    return (
        <div className='result' >
            <header className='result-header' >

                <Table
                dataSource={data}
                columns={columns} >

                </Table>
            </header>
        </div>
    )
}

export default Result;