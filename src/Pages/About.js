import Nav from "../Components/Nav";
import { useEffect, useState } from 'react';
import './About.css'



const About = () => {
    const [trans, setTrans] = useState([]);
    const [destination_accounts, setDestination_accounts] = useState('');
    const [time, setTime] = useState('');
    let token = localStorage.getItem('token');


    const getData = () => {
        fetch("https://cacore.liara.run/bank/transactions", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'JWT ' + localStorage.getItem("Access")
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setTrans(result);
            })
            .catch(err => console.log('server error'));
    }



    // Second fetch

    const [amount, setAmount] = useState(0)
    const [destination_account, setDestination_account] = useState(0)

    const deposit = () => {
        var data = JSON.stringify({
            "amount": amount,
            "destination_account": destination_account
        });
        fetch("https://cacore.liara.run/bank/transactions/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'JWT ' + localStorage.getItem("Access")
            },
            body: data
        })
            .then(res => res.json())
            .then(resu => {
                console.log(resu);
            })
            .catch(err => console.log('server error'));


    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div id="intro">
            <Nav />
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-lg-5 mx-auto mt-5 ">
                        <div className="card  rounded-4 bg-transfer">
                            <div className="card-header rounded-4 bg-np bg">
                                <div className="np p-4 m-4 rounded-5 ">
                                    <div className="col-lg-8 mx-auto text-center mb-2">
                                        <h1 className="text-light"> Payment Form</h1>
                                    </div>
                                    <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                                        <li className="nav-item"> <a data-toggle="pill" href="#credit-card" className="nav-link active "> <i className="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                                        <li className="nav-item"> <a data-toggle="pill" href="#paypal" className="nav-link "> <i className="fab fa-paypal mr-2"></i> Paypal </a> </li>
                                        <li className="nav-item"> <a data-toggle="pill" href="#net-banking" className="nav-link "> <i className="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div id="credit-card" className="tab-pane fade show active pt-3">
                                     
                                            <div className="form-group">
                                                 <h6 classNameName="text">Card number</h6>
                                                <input  required className="form-control " type='Number' placeholder=' Account Number' onChange={(e) => setDestination_account(e.target.value)} /> </div>

                                            <div className="form-group">
                                                
                                                    <h6 classNameName="text">Money</h6>
                                               
                                                <div className="input-group"> <input className="form-control " required type='Number' placeholder=' Money ' onChange={(e) => setAmount(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group"> <label><span className="hidden-xs">
                                                        <h6>Expiration Date</h6>
                                                    </span></label>
                                                        <div className="input-group"> <input type="number" placeholder="MM" name="" className="form-control" required /> <input type="number" placeholder="YY" name="" className="form-control" required /> </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                        <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                                                    </label> <input type="text" required className="form-control" /> </div>
                                                </div>
                                            </div>
                                            <div className="card-footer"> <button type="button" className="btnn subscribe btn btn-primary btn-block shadow-sm" onClick={deposit}> Confirm Payment </button>
                                            </div>
                                      
                                    </div>
                                    <div id="paypal" className="tab-pane fade pt-3">
                                        <h6 className="pb-2">Select your paypal account type</h6>
                                        <div className="form-group "> <label className="radio-inline"> <input type="radio" name="optradio" checked /> Domestic </label> <label className="radio-inline"> <input type="radio" name="optradio" className="ml-5" />International </label></div>
                                        <p> <button type="button" className="btn btn-primary "><i className="fab fa-paypal mr-2"></i> Log into my Paypal</button> </p>
                                        <p className="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                    </div>
                                    <div id="net-banking" className="tab-pane fade pt-3">
                                        <div className="form-group "> <label for="Select Your Bank">
                                            <h6>Select your Bank</h6>
                                        </label>
                                            <select className="form-control" id="ccmonth">
                                                <option value="" selected disabled>--Please select your Bank--</option>
                                                <option>Bank 1</option>
                                                <option>Bank 2</option>
                                                <option>Bank 3</option>
                                                <option>Bank 4</option>
                                                <option>Bank 5</option>
                                                <option>Bank 6</option>
                                                <option>Bank 7</option>
                                                <option>Bank 8</option>
                                                <option>Bank 9</option>
                                                <option>Bank 10</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <p> <button type="button" className="btn btn-primary "><i className="fas fa-mobile-alt mr-2"></i> Proceed Payment</button> </p>
                                        </div>
                                        <p className="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-6 mt-5 ms-auto" style={{height:500 , overflow:'scroll'}}>{
                        trans.map((item, index) => {
                            return (
                                <div key={index} className="bg-transfer d-flex gap-5 border-bottom ">
                                    <h4 id="fw" className="p-2 text-dark">Amount :{item.amount}</h4>
                                    <h3 id="fw" className="p-2 text-dark">To Cart :{item.destination_account}</h3>
                                    <h3 id="fw" className="p-2 text-dark d-flex gap-3 align-content-center"> Operation : {item.operation === 'send' ? (<div className="bg-bankg rounded-3 p-1">Send</div>) :(<div className="bg-danger rounded-3 p-1">Erorre</div>)}</h3>
                                </div>
                            )
                        })
                    }</div>
                </div>
            </div>
        </div>
    )
}
export default About;