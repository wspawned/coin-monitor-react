import { Component } from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";

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
        <div>
            <div className="info" >

                <div className="square" >
                    <div className="icon-name" >
                        <img className="detail-icon" src={image} alt="icon" ></img>
                        <div>
                            <p className="rank" > Rank # {market_cap_rank} </p>
                            <p>  <b> { `${name} (${symbol}) ` }  </b> </p>
                        </div>
                    </div>

                    <div className="price-percent" >
                        <p className="current" > $ {Number(current_price).toLocaleString()} </p>
                        { (function() {
                            const value = Number(price_change_percentage_24h).toFixed(2);
                            return (
                                (value >=0 ) ? <p className="change" style={{color:"green"}} > { value + "%" } </p> :
                                <p className="change" style={{color:"red"}} > { value + "%" } </p>
                            )
                        } ) () }
                    </div>

                    <div className="max-min" >
                        <p> 24h Max <br/>  <b> $ { Number(high_24h).toLocaleString() }  </b> </p>
                        <p> 24h Min <br/>  <b>  $ { Number(low_24h).toLocaleString() } </b>   </p>
                    </div>
                </div>

                <div className="list" >
                    <div className="list-item" >
                        <p> Market Cap </p>
                        <p> $ { Number(market_cap).toLocaleString() } </p>
                    </div>
                    <div className="list-item" >
                        <p> Total Volume </p>
                        <p> $ { Number(total_volume).toLocaleString() } </p>
                    </div>
                    <div className="list-item" >
                        <p> Fully Diluted Valuation </p>
                        <p> $ { Number(fully_diluted_valuation).toLocaleString() } </p>
                    </div>
                </div>

                <div className="list" >
                    <div className="list-item" >
                        <p> Circulating Supply </p>
                        <p> { Number(circulating_supply).toLocaleString() } </p>
                    </div>
                    <div className="list-item" >
                        <p> Total Supply </p>
                        <p> { Number(total_supply).toLocaleString() } </p>
                    </div>
                    <div className="list-item" >
                        <p> Max Supply </p>
                        <p> { Number(max_supply).toLocaleString() } </p>
                    </div>
                </div>
                
            </div>

            <div className="chart" >
                <Chart 
                 id = {this.props.params.id}
                />
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