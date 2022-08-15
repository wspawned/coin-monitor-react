
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
            },
            {
                title: "Price",
                dataIndex: "current_price",
                key:"key",
                sorter: (a,b) => {
                    if(a.current_price > b.current_price) return 1;
                    if(a.current_price < b.current_price) return -1;
                    return 0;
                } 
            },
            {
                title: "24h",
                dataIndex: "price_change_percentage_24h",
                key:"key",
                sorter: (a,b) => {
                    if(a.price_change_percentage_24h > b.price_change_percentage_24h) return 1;
                    if(a.price_change_percentage_24h < b.price_change_percentage_24h) return -1;
                    return 0;
                } 
            },
            {
                title: "Volume",
                dataIndex: "total_volume",
                key:"key",
                sorter: (a,b) => {
                    if(a.total_volume > b.total_volume) return 1;
                    if(a.total_volume < b.total_volume) return -1;
                    return 0;
                } 
            },
            {
                title: "Market Cap",
                dataIndex: "market_cap",
                key:"key",
                sorter: (a,b) => {
                    if(a.market_cap > b.market_cap) return 1;
                    if(a.market_cap < b.market_cap) return -1;
                    return 0;
                }
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