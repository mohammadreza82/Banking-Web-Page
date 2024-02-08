import Nav from "../Components/Nav";
import { useState, useEffect } from "react";
import Play from '../images/Play.png'
import apple from '../images/Apple.png'
import Poster from '../images/Poster.png'
import log from "../images/pngtree-concept-banking-logo-png-image_712961_prev_ui (1).png";
import "./Home.css"
import topic from "./../images/topic.png"

//custom.scss
import "./main.scss";
import { StarFill, StarHalf, Stars } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";




const Home = () => {
    //first fetch
    const [data, setData] = useState([''])
    let token = localStorage.getItem('token');
    const navigate = useNavigate();

    const getData = () => {

        fetch("https://cacore.liara.run/auth/users/me/", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'JWT ' + localStorage.getItem("Access")
            }
        })
            .then(response => response.json())
            .then(result => {
                setData(result.email)
            })
            .catch(err => console.log('server error'))


    }


    //Second fetch
    const [account, setAccount] = useState('')
    const [amount, setAmount] = useState('')

    const getTransactions = () => {
        fetch(`https://cacore.liara.run/bank/asset`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'JWT ' + localStorage.getItem("Access")
            }
        })
            .then(res => res.json())
            .then(resu => {
                setAccount(resu.account);
                setAmount(resu.amount)

            })
            .catch(err => console.log('server error'));
    }

    useEffect(() => {
        getData();
        getTransactions();
        console.log("runnig...");
    }, []);

    return (
        <div>
            <Nav />
            <section>
                <div className="container bg-white ">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-6 text-center text-md-start align-center mt-5">
                            <h3>
                                <div className="display-5 text-black">Welcome<p className="text-bankg fw-bolder ff">{data}</p></div>
                                <div className="display-3 lead my-1 mt-5 text-bold text-black fontwe ff">Best way </div>
                                <div className="display-3 lead my-1 text-bold text-black ff">to tracking </div>
                                <div className="display-3 lead mb-4 text-bankg fw-bolder font"> money</div>
                            </h3>
                            <p className="lead text-althide ff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere recusandae, corrupti placeat, animi illum, similique reiciendis eum non ratione beatae ea quam voluptate magnam consequatur aliquam repudiandae veniam dolore.
                            </p>

                            <div className="d-flex justify-content-evenly mt-4">
                                <div className="btn btn-info">
                                    <div className=""><img src={apple} width={60} /></div>
                                    <div className="d-flex flex-column"><p className="text-light">download on App Store</p></div>
                                </div>
                                <div className="btn btn-info">
                                    <div className=""><img src={Play} width={60} /></div>
                                    <div className="d-flex flex-column"><p className="text-light">download on Play Store</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center col-sm-9 mt-3 ml-5 ">
                            <div className="d-flex justify-content-center text-black mt-5 w-100 ">
                                <div className="card p-2  py-3 code shadow px-5">
                                    <div className="d-flex justify-content-between align-items-center"><img src={log} width="50" height="50" /><img src="https://i.imgur.com/SsTSozr.png" width="40" /></div>
                                    <div className="mt-3">
                                        <h3 className="text-golden"> {account}</h3>
                                        <div className="text-light "><p>Your Amount :{amount}$</p></div>
                                    </div>

                                    <div className="d-flex justify-content-between card-details mt-3 mb-3">
                                        <div className="d-flex flex-column text-warning">
                                        </div>
                                        <div className="d-flex flex-row gap-5 px-3">
                                            <div className="d-flex flex-column"><span className="text-altlight">Card Holder</span><span className="text-warning">MohammadReza</span></div>
                                            <div className="d-flex flex-column"><span className="text-altlight">Expired</span><span className="text-warning">12/24</span></div>
                                            <div className="d-flex flex-column fs-15"><span className="text-altlight">CVV2</span><span className="text-warning">857</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center ">
                                <img src={Poster} width={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing" class=" bg-light mt-5 ">
                <div class="container-lg ">
                    <div class="text-center my-2 pt-5">
                        <h2>Pricing plans</h2>
                        <p class="lead text-muted">Choose a pricing plan to suit you</p>
                    </div>

                    <div class="row py-5  align-items-center justify-content-center g-0">
                        <div class="col-8 col-lg-4 col-xl-3">
                            <div class="card border-0">
                                <div class="card-body text-center py-4">
                                    <h3 class="card-title ">Starter Edition</h3>
                                    <p class="lead card-subtitle ff">Banking download only</p>
                                    <p class="display-5 text-primary my-4 fw-bold">@12.99</p>
                                    <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisicing elit. Provident quas, recusandae consectetur voluptas praesentium aliquam.
                                    </p>
                                    <a href="#" class="btn btn-outline-primary mt-3 btn-lg">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-9 col-lg-4">
                            <div class="card border-golden border-2">
                                <div class="card-header text-center text-golden">Most Popular</div>
                                <div class="card-body text-center py-5">
                                    <h4 class="card-title">Complete Edition</h4>
                                    <p class="lead card-subtitle ff">Banking download & all updates</p>
                                    <p class="display-4 my-4 text-golden fw-bold">$18.99</p>
                                    <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisicing elit. Provident quas, recusandae consectetur voluptas praesentium aliquam.
                                    </p>
                                    <a href="#" class="btn btn-outline-golden btn-lg mt-3">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-8 col-lg-4 col-xl-3">
                            <div class="card border-0">
                                <div class="card-body text-center py-4">
                                    <h3 class="card-title">Starter Edition</h3>
                                    <p class="lead card-subtitle ff">Banking download only</p>
                                    <p class="display-5 text-primary my-4 fw-bold">@24.99</p>
                                    <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisicing elit. Provident quas, recusandae consectetur voluptas praesentium
                                        aliquam.
                                    </p>
                                    <a href="#" class="btn btn-outline-primary mt-3 btn-lg">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="topics">
                <div class="container-md">
                    <div class="text-center">
                        <h2>Inside The Book...</h2>
                        <p class="lead text-muted">A quick glance at the topics you'll learn</p>
                    </div>
                    <div class="row my-5 g-5 justify-content-center align-items-center">
                        <div class="col-6 col-lg-4">
                            <img src={topic}  class="img-fluid " alt="" />
                        </div>

                        <div class="col-lg-6">


                            <div class="accordion container" id="chapters" >
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1">
                                        <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                                            Chapter 1 - Your First Web Page
                                        </button>
                                    </h2>
                                    <div class="accordion-collapse collapse show" data-bs-parent="#chapters"
                                        aria-labelledby="heading-1" id="chapter-1">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae ipsam
                                                cupiditate velit, suscipit sapiente saepe. Cupiditate, beatae illo! Sapiente
                                                recusandae magnam quia dolorum labore!</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae ipsam
                                                cupiditate velit, suscipit sapiente saepe. Cupiditate, beatae illo! Sapiente
                                                recusandae magnam quia dolorum labore!</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-2">
                                        <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
                                            Chapter 2 - Your First Web Page
                                        </button>
                                    </h2>
                                    <div class="accordion-collapse collapse " data-bs-parent="#chapters"
                                        aria-labelledby="heading-2" id="chapter-2">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae ipsam
                                                cupiditate velit, suscipit sapiente saepe. Cupiditate, beatae illo! Sapiente
                                                recusandae magnam quia dolorum labore!</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae ipsam
                                                cupiditate velit, suscipit sapiente saepe. Cupiditate, beatae illo! Sapiente
                                                recusandae magnam quia dolorum labore!</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-3">
                                        <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#chapter-3" aria-expanded="true" aria-controls="chapter-3">
                                            Chapter 3 - Your First Web Page
                                        </button>
                                    </h2>
                                    <div class="accordion-collapse collapse " data-bs-parent="#chapters"
                                        aria-labelledby="heading-3" id="chapter-3">
                                        <div class="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae ipsam
                                                cupiditate velit, suscipit sapiente saepe. Cupiditate, beatae illo! Sapiente
                                                recusandae magnam quia dolorum labore!</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae ipsam
                                                cupiditate velit, suscipit sapiente saepe. Cupiditate, beatae illo! Sapiente
                                                recusandae magnam quia dolorum labore!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="reviews" className="bg-altlight">
                <div className="container-lg">
                    <div className="text-center pt-3">
                        <h2 className="text-bankg"><Stars className="text-golden mr-3" size={40} />Bank Reviews</h2>
                        <p className="lead text-althide">What my Customer have said about the Bank...</p>
                    </div>
                    <div className="row justify-content-center py-4">
                        <div className="col-lg-8  ">
                            <div className="list-group ">
                                <div className="list-group-item py-3 ">
                                    <div className="pb-2">
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                    </div>
                                    <h5 className="mb-1 text-bankg">A most buy for every aspiring Web Dev</h5>
                                    <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maiores
                                        debitis adipisci esse eligendi at repudiandae eos explicabo consectetur animi.</p>
                                    <small>Review By Mmd</small>
                                </div>
                            </div>
                            <div className="list-group">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                    </div>
                                    <h5 className="mb-1 text-bankg">A most buy for every aspiring Web Dev</h5>
                                    <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maiores
                                        debitis adipisci esse eligendi at repudiandae eos explicabo consectetur animi.</p>
                                    <small>Review By Mmd</small>
                                </div>
                            </div>
                            <div className="list-group">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarFill className="text-golden" size={20} />
                                        <StarHalf className="text-golden" size={20} />
                                    </div>
                                    <h5 className="mb-1 text-bankg">A most buy for every aspiring Web Dev</h5>
                                    <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maiores
                                        debitis adipisci esse eligendi at repudiandae eos explicabo consectetur animi.</p>
                                    <small>Review By Mmd</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
export default Home;