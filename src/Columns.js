
const columns = () => {
    return(
        [
            {
                title: "# Rank",
                dataIndex: "market_cap_rank",
                key:"key",
                sorter: (a,b) => {
                    if(a.market_cap_rank > b.market_cap_rank) return 1;
                    if(a.market_cap_rank < b.market_cap_rank) return -1;
                    return 0;
                }  
            },
    
            {
                title: "Logo",
                dataIndex: "image",
                key:"key",
                render: image => {
                    return(
                        <img src={image} alt="icon" ></img>
                    )
                }
            },
    
            {
                title: "Name",
                dataIndex: "name",
                key:"key"
            },
            {
                title: "Symbol",
                dataIndex: "symbol",
                key:"key",
                render: symbol => symbol.toUpperCase()
            },
            {
                title: "Price",
                dataIndex: "current_price",
                key:"key",
                sorter: (a,b) => {
                    if(a.current_price > b.current_price) return 1;
                    if(a.current_price < b.current_price) return -1;
                    return 0;
                },
                render: current_price => "$ " + Number(current_price).toLocaleString()
            },
            {
                title: "24h",
                dataIndex: "price_change_percentage_24h",
                key:"key",
                sorter: (a,b) => {
                    if(a.price_change_percentage_24h > b.price_change_percentage_24h) return 1;
                    if(a.price_change_percentage_24h < b.price_change_percentage_24h) return -1;
                    return 0;
                },
                render: price_change_percentage_24h => {
                    const value = Number(price_change_percentage_24h).toFixed(2);
                    return (
                        (value >=0 ) ? <p style={{color:"green"}} > {value + "%" } </p> :
                        <p style={{color:"red"}} > { value + "%" } </p>
                    )
                } ,

            },
            {
                title: "Volume",
                dataIndex: "total_volume",
                key:"key",
                sorter: (a,b) => {
                    if(a.total_volume > b.total_volume) return 1;
                    if(a.total_volume < b.total_volume) return -1;
                    return 0;
                },
                render: total_volume => "$ " + Number(total_volume).toLocaleString() 
            },
            {
                title: "Market Cap",
                dataIndex: "market_cap",
                key:"key",
                sorter: (a,b) => {
                    if(a.market_cap > b.market_cap) return 1;
                    if(a.market_cap < b.market_cap) return -1;
                    return 0;
                },
                render: market_cap => "$ " + Number(market_cap).toLocaleString()
            },
            {
                title: "Details",
                key:"key",
                render: payload => {
                    return(
                        <a href= {"details/" + payload.id } >Details</a>
                    )
                }
            }
        ]
    )
}

export default columns;