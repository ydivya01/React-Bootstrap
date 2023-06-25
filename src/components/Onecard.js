import React from 'react'
import details from '../details.json'
import card from  '../cardstyle.css'

export default function Onecard({ pm, users }) {
    return (


        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                    <h6 className="card-price text-center">{pm}<span className="period">/month</span></h6>
                    <hr></hr>
                    <ul className="fa-ul">
                        {details.filter(function (dp) {
                            return dp.Price == pm
                        }).map((value , index) => {
                            return <>
                                <li>< span className="fa-li"><i className={pm === value.Price ? "fas fa-check" : ""}></i></span>{value.User === "5 Users" || value.User === "Unlimited Users"? <b>{value.User}</b> : value.User}</li>
                                <li ><span className="fa-li"><i className={pm === value.Price ? "fas fa-check" : ""}></i></span>{value.storage}</li>
                                <li><span className="fa-li"><i className={pm === value.Price ? "fas fa-check" : ""}></i></span>{value.project}</li>
                                <li><span className="fa-li"><i className={pm === value.Price ? "fas fa-check" : ""}></i></span>{value.access}</li>
                                <li className={value.Price === "$0" ? "text-muted" : ""}><span className="fa-li"><i className={value.Price === "$0" ? "fas fa-times" : "fas fa-check"} ></i></span>{value.privatePro}</li>
                                <li className={value.Price === "$0" ? "text-muted" : ""}><span className="fa-li"><i className={value.Price === "$0" ? "fas fa-times" : "fas fa-check"} ></i></span>{value.support}</li>
                                <li className={value.Price === "$0" ? "text-muted" : ""}><span className="fa-li"><i className={value.Price === "$0" ? "fas fa-times" : "fas fa-check"} ></i></span>{value.Domain === "Unlimited Free Subdomain"? <><b>Unlimited</b> Free Subdomain</> : value.Domain}</li>
                                <li className={value.Price === "$0" || value.Price === "$9" ? "text-muted" : ""}><span className="fa-li"><i className={value.Price === "$0" || value.Price === "$9" ? "fas fa-times" : "fas fa-check"} ></i></span>{value.Report}</li>
                            </>

                        })}
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
