
const columns = () => {
    return(
        [
            {
                title: "# Rank",
                dataIndex: "market_cap_rank",
                key:"key",
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
                key:"key"
            },
            {
                title: "Price",
                dataIndex: "current_price",
                key:"key"
            },
            {
                title: "24h",
                dataIndex: "price_change_percentage_24h",
                key:"key"
            },
            {
                title: "Volume",
                dataIndex: "total_volume",
                key:"key"
            },
            {
                title: "Market Cap",
                dataIndex: "market_cap",
                key:"key"
            },
            {
                title: "Details",
                key:"key",
                render: () => {
                    return(
                        <a>Details</a>
                    )
                }
            }
        ]
    )
}

export default columns;