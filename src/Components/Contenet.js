import React, {Component} from 'react';
import Presentation from "./Presentation";
import Form from "./Form";
class Contenet extends Component {
    state = {
        Time : ['09 : 00', '09 : 30', '10 : 00', '10 : 30', '11 : 00',
            '11 : 30', '12 : 00', '12 : 30', '03 : 00', '03 : 30',
            '04 : 00', '04 : 30', '05 : 00', '05 : 30']
    }
    render() {
        return (
            <div className="container">
                <Presentation />
                <Form Time={this.state.Time}/>
            </div>
        );
    }
}

export default Contenet;