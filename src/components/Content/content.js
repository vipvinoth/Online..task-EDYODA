import React, { useState } from "react";
import './content.css'
import { GoBook } from 'react-icons/go'
import { BiTimeFive } from 'react-icons/bi'
import { MdLiveTv } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import { RiAdvertisementLine } from 'react-icons/ri'
import { TbSquareRoundedNumber1Filled } from 'react-icons/tb'
import { TbSquareRoundedNumber2Filled } from 'react-icons/tb'
import { BsClockHistory } from 'react-icons/bs'
import pay from '../../images/razorpay.png'



export default function Content() {
const [price,setprice]=useState(0)
  const plan=(price)=>{
        setplan1(plan1-179)
        setprice(179)
  }
  const [plan1,setplan1]=useState(18500)

  return (
    <div id="overall">

{/* Content page......... */}
      <div id="main">
        <h1>Access curated courses worth<br></br>
          ₹ <del>18500</del>at just <span>₹ 99</span> per year!
        </h1><br></br>
        <h3>
          <GoBook></GoBook> <span>100+</span> Job relevant courses
        </h3>
        <h3>
          <BiTimeFive></BiTimeFive> <span>20,000+</span> Hours of content
        </h3>
        <h3>
          <MdLiveTv></MdLiveTv> <span>Exclusive</span> webinar access
        </h3>
        <h3>
          <FaUserGraduate></FaUserGraduate> Scholarship worth <span>₹94,500</span>
        </h3>
        <h3>
          <RiAdvertisementLine></RiAdvertisementLine> <span>Ad Free</span> learning experience
        </h3>
      </div>

{/* Payment page......... */}
      <div id="payment">
        <h5 id="numberone"><TbSquareRoundedNumber1Filled size={30} color="blue"></TbSquareRoundedNumber1Filled><br></br>
          sign up</h5>
        <h5 id="numbertwo"><TbSquareRoundedNumber2Filled size={30} color="blue"></TbSquareRoundedNumber2Filled><br></br>
          subscribe</h5>
        <h4>Select your subscription</h4>
        <div class="form-check1">
          <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled /><></>
          <label class="form-check-label" for="flexRadioCheckedDisabled">
            12 Months Subscription<div id="price">Total ₹99<br></br><h6>₹8/Mon</h6></div><div id="expired">Offer Expired</div>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" onClick={plan} id="exampleRadios1" value="option1"/>
          <label class="form-check-label" for="exampleRadios1">
            12 Months Subscription<div id="price">Total ₹179<br></br><h6>₹15/Mon</h6></div><div id="recommended">Recommended</div>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" onClick={plan} id="exampleRadios1" value="option2"/>
          <label class="form-check-label" for="exampleRadios2">
            6 Months Subscription<div id="price">Total ₹149<br></br><h6>₹25/Mon</h6></div>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" onClick={plan} id="exampleRadios1" value="option3"/>
          <label class="form-check-label" for="exampleRadios3">
            3 Months Subscription<div id="price">Total ₹99<br></br><h6>₹33/Mon</h6></div>
          </label>
        </div>
        <hr></hr>
        <div id="fees">
        <h6>Subscription Fee</h6><h5>₹18,500</h5>
        </div>
        <div id="offertime">
          <h6>Limited time offer</h6><h5>₹ {plan1}</h5>
          <h6><BsClockHistory></BsClockHistory>Offer valid til 25th May 2023</h6>
        </div>
        <div id="final">
        <h6>Total (Incl.of 18% GST)</h6><h5>₹{price}</h5>
        </div>
        <button type="button" id="cancel">CANCEL</button>
        <button type="button" id="pay">PROCEED TO PAY</button>
        <img src={pay} alt=""/>



      </div>
    </div>
  )
}