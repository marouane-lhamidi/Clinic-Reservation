import React, {Component} from 'react';
import db from '../Firebase/Firebase'


class Form extends Component {

     state = {
        Name : '',
        Number : '',
        Email : '',
        Date : '',
        Time :this.props.Time
    }
    //function onClick
    handsub = (e) =>{
         //to don't reload the page
        e.preventDefault();

        //Variable
        var value = ([this.state.Time].toString().length >10)?this.state.Time[0].toString() : [this.state.Time].toString();

        //push in data base
        db.database().ref('marouane').push({
            Name:this.state.Name,
            Number:this.state.Number,
            Email:this.state.Email,
            Date:this.state.Date,
            Time:value

        });

        //push data to email functuion
        this.sendFeedback("template_1py1owk",
            {
                name : this.state.Name ,
                phone : this.state.Number ,
                email : this.state.Email ,
                dates : this.state.Date,
                reservation :value

            });

        //release state
        this.setState({
            Name : '',
            Number : '',
            Email : '',
            Date : '',
            Time :this.props.Time
        })

    };
    //function for the send msg
    sendFeedback = (templateId, variables) => {

        window.emailjs
            .send("service_5hst2vs", templateId, variables)
            .then(() => {
                alert('la reservation a bien faite');
            })
            .catch((error) =>{
                alert(error.message);
            });
    }
    //when the Date change
    change = (e) => {
        //recover our target value and push it in our stat
        var test = e.target.value;
        this.setState({Date : test});

        //function for testing from database
        db.database().ref("marouane").on("value", Mabase => {
            const original =  ['09 : 00', '09 : 30', '10 : 00', '10 : 30', '11 : 00',
                '11 : 30', '12 : 00', '12 : 30', '03 : 00', '03 : 30',
                '04 : 00', '04 : 30', '05 : 00', '05 : 30'];
            this.setState({Time : original});
            var chnage_tab = this.state.Time;

            Mabase.forEach(snap => {

                if (snap.val().Date === test )
                {
                    chnage_tab.splice(chnage_tab.indexOf(snap.val().Time),1)
                    this.setState({Time : chnage_tab});
                }

            });
        });

    }

    render() {
        return (
            <div className="container-form">
                <form action="#">
                    <h2 className="heading ">Reservation Online</h2>
                    <div className="form-field">
                        <p>Your Name</p>
                        <input className="inputs"  type="text" placeholder="Your Name" value={this.state.Name} onChange={(e) => this.setState({ Name: e.target.value})} required />
                    </div>

                    <div className="form-field">
                        <p>Your Mobile Number</p>
                        <input  className="inputs" type="text" placeholder="Your Mobile Number" value={this.state.Number} onChange={(e) => this.setState({ Number: e.target.value})} required />
                    </div>

                    <div className="form-field">
                        <p>Your email</p>
                        <input  className="inputs" type="email" placeholder="Your email" value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value})} required />
                    </div>

                    <div className="form-field"  >
                        <p>Date</p>
                        <input className="inputs"  type="date"  value={this.state.Date}  onChange={this.change} required />
                    </div>

                    <div className="form-field">
                        <p>Chose the time</p>
                        <select className="inputs"  name="select" id="#"  onChange={(e) => this.setState({ Time: [e.target.value]})}>

                            {this.state.Time.map(times => <option value={times} >{times} &nbsp; Am</option>)}

                        </select>
                    </div>


                    <button className="btn" onClick={this.handsub} >Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;

