import React, {Component} from 'react';

class Presentation extends Component {
    render() {
        return (
            <div className="container-time">
                <h2 className="heading time">Open Time</h2>
                <h3 className="heading-days">Monday-Friday</h3>
                <h4 className="color">09 Am - 01 Pm (Morning)</h4>
                <h4  className="color">03 Am - 06 Pm (Evening)</h4>
                <hr />
                <h4 className="heading-phone">Call Us: (123) 45-45-456</h4>
            </div>
    );
    }
}


export default Presentation;