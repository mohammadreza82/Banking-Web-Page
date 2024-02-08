
import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import '../Pages/Home.css'
import Btc from "./../images/arz/usdt.svg"

function Trade() {
    const [data, setData] = useState([]);

    const getData = (data) => {

        fetch(`https://api.coinlore.net/api/tickers/`)
            .then((result) => result.json())
            .then((res) => {
                setData(res.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    const slicedItems = data.slice(0, 5)
    const slicedOne = data.slice(6, 11)
    const slicedTWo = data.slice(12, 17)

    return (
        <div>
            <Nav />
            <div className=" mt-5 d-flex justify-content-evenly text-center flex-wrap">
                <div className=" d-flex border flex-column p-5 gap-3 rounded-4 bg-white">
                    <p className="fs-5 fw-bolder text-start border-info border-5  border-start px-2 ">Hot List</p>
                    {
                        slicedItems.map((data, index) => {
                            return (
                                <span key={index} className=" d-flex justify-content-between gap-5 align-items-center">
                                    <div className="d-flex gap-2 ">
                                        <img src={Btc} width={50}></img>
                                        <div className="d-flex justify-content-center align-content-center flex-column">
                                            <h4>{data.name}</h4>
                                            <h5 className="text-secondary fs-5"> {data.nameid} </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center align-content-center ">
                                        <h5 className="text-card fs-5">${data.price_usd}</h5> 
                                        <h5>{data.percent_change_1h === "data.percent_change_1h >= 0 " ? (<p className="text-info">{data.percent_change_1h}</p>) : (<p className="text-danger">{data.percent_change_1h}</p>)}</h5>
                                    </div>
                                </span>
                            )
                        })
                    }
                </div>
                <div className="d-flex border flex-column p-5 gap-3 rounded-4  bg-white">
                    <p className="fs-5 fw-bolder text-start border-info border-5  border-start px-2 ">New Coins</p>
                    {
                        slicedOne.map((data, index) => {
                            return (
                                <span key={index} className=" d-flex justify-content-between gap-5 align-items-center">
                                <div className="d-flex gap-2 ">
                                <img src={Btc} width={50}></img>
                                    <div className="d-flex justify-content-center align-content-center flex-column ">
                                        <h4>{data.name}</h4>
                                        <h5 className="text-secondary fs-5"> {data.nameid} </h5>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-content-center ">
                                    <h5 className="text-card fs-5">${data.price_usd}</h5> 
                                    <h5>{data.percent_change_1h === "data.percent_change_1h >= 0 " ? (<p className="text-info">{data.percent_change_1h}</p>) : (<p className="text-danger">{data.percent_change_1h}</p>)}</h5>
                                </div>
                            </span>
                            )
                        })
                    }
                </div>
                <div className="d-flex border flex-column p-5 gap-3 rounded-4  bg-white">
                    <p className="fs-5 fw-bolder text-start border-info border-5  border-start px-2 ">Top Gainers</p>
                    {
                        slicedTWo.map((data, index) => {
                            return (
                                <span key={index} className=" d-flex justify-content-between gap-5 align-items-center">
                                    <div className="d-flex gap-2">
                                    <img src={Btc} width={50}></img>
                                        <div className="d-flex justify-content-center align-content-center flex-column ">
                                            <h4>{data.name}</h4>
                                            <h5 className="text-secondary fs-5"> {data.nameid} </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center align-content-center text-end">
                                        <h5 className="text-card fs-5">${data.price_usd}</h5> 
                                        <h5>{data.percent_change_1h === "data.percent_change_1h >= + " ? (<p className="text-info">{data.percent_change_1h}</p>) : (<p className="text-danger">{data.percent_change_1h}</p>)}</h5>
                                    </div>
                                </span>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default Trade;