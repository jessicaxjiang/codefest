import React from 'react';
import { Link } from 'react-router-dom';
let map;
function initMap() {
    fetch(
        ""
    )
    map = new google.maps.Map(documents.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
const resourceLocator = (props) => {
    return(
        <div>
            <h1>Resource Locator</h1>

            <div>   
                <Link to='/'>go to Home</Link>
            </div>

            <div>
                <Link to='/mission'>go to Mission</Link>
            </div>

            <div>
                <Link to='/contact'>go to Contact Us</Link>
            </div>

            <div>
                <Link to='/locator'>go to Resource Locator</Link>
            </div>

            <div class="map">
                
            </div>
        </div>
    );
}

export default resourceLocator;