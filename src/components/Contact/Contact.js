import React from "react";
import "./Contact.css";
import Me from "../../images/Me.jpg"

class Contact extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){ }
  handleClick(event){
    this.setState({
      isClicked: event.target.checked
    })
  }
  render(){
  <div className="ME">
    <button className="conRend">Contact Info</button>
    </div>
    if(this.state.isClicked) {
       return(
          <div className="ME">
            <img className="meEating" alt="button" src={Me} />
            <p className="email">Email: <b>pcruz9332@gmail.com</b></p>
            <p className="number">Cell: <b>(714) 272-6549</b></p>
            <p className="shortWords"></p>
          </div>
              )
    }else {
        return (
            <div className="ME">
            <button className="myButton"onClick={this.handleClick} checked="True">Click Here To View Contact Information</button>
            </div>
              )
          }
        }
}
export default Contact;


