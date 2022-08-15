import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {

    constructor(props) {
        super(props);

        this.state= {}  ;
    }

    async componentDidMount() {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const json = await res.json();
        const info = json.filter( (coin) => this.props.params.id === coin.id )
        this.setState( info[0] )
    }

    render() {

        const {
            market_cap_rank, image, name, symbol, current_price, price_change_percentage_24h,
            high_24h, low_24h, market_cap, total_volume, fully_diluted_valuation,
        circulating_supply, total_supply, max_supply} = this.state ;

        return(
            <div className="info" >

                <div className="square" >
                    <div className="icon-name" >
                        <img className="detail-icon" src={image} alt="icon" ></img>
                        <div>
                            <p> Rank # {market_cap_rank} </p>
                            <p> { `${name} (${symbol}) ` } </p>
                        </div>
                    </div>

                    <div className="price-percent" >
                        <p> {current_price} </p>
                        <p> {price_change_percentage_24h} </p>
                    </div>

                    <div className="max-min" >
                        <p> 24h Max <br/> {high_24h} </p>
                        <p> 24h Min <br/> {low_24h} </p>
                    </div>
                </div>

                <div className="list" >
                    <div className="list-item" >
                        <p> Market Cap </p>
                        <p> {market_cap} </p>
                    </div>
                    <div className="list-item" >
                        <p> Total Volume </p>
                        <p> {total_volume} </p>
                    </div>
                    <div className="list-item" >
                        <p> Fully Diluted Valuation </p>
                        <p> {fully_diluted_valuation} </p>
                    </div>
                </div>

                <div className="list" >
                    <div className="list-item" >
                        <p> Circulating Supply </p>
                        <p> {circulating_supply} </p>
                    </div>
                    <div className="list-item" >
                        <p> Total Supply </p>
                        <p> {total_supply} </p>
                    </div>
                    <div className="list-item" >
                        <p> Max Supply </p>
                        <p> {max_supply} </p>
                    </div>
                </div>

            </div>
        )
    }
}

const WrappedDetails = () => {
    const params = useParams();

    return (
        <Details params = {params} />
    )
};

export default WrappedDetails;