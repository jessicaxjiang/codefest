import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUsPage.css'

const contactUs = (props) => {
    return(
        <div>

            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/mission'> Our Mission </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
                <li><Link to="/locator"> Resource Locator </Link></li>
            </ul>

            <h1>Contact Us Page</h1>

            <div class= "container">
                <div class="row">
                    <div class="column">


                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit"></input>


                    </div>
                </div>
            </div>

        </div>
            





    );
}

export default contactUs;