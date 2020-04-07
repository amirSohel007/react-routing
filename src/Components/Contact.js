import React from "react";
import Layout from "./Layout";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      first_Name: "",
      last_Name: "",
      user_Email: "",
      message: "",
      newUser: false,
    };
  }

  handleInput = (event) => {
    const target = event.target;
    const value = target.name === "newUser" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Layout>
        <div className="row">
          <form className="col s6">
          <h4>Get in touch !</h4>

          <p>
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock discovered the undoubtable source.
            </p>
            <div className="row">
              <div className="col s6">
                <label>First Name</label>
                <input
                  placeholder="Enter First Name"
                  value={this.state.first_Name}
                  name="first_Name"
                  onChange={this.handleInput}
                  type="text"
                />
              </div>
              <div className="col s6">
                <label>Last Name</label>
                <input
                  placeholder="Enter Last Name"
                  type="text"
                  value={this.state.last_Name}
                  name="last_Name"
                  onChange={this.handleInput}
                />
              </div>
              <div className="col s12">
                <label>Email Address</label>
                <input
                  placeholder="Enter Email"
                  type="email"
                  value={this.state.user_Email}
                  name="user_Email"
                  onChange={this.handleInput}
                />
              </div>
              <div className="col s12">
                <label>Your message</label>
                <textarea
                  placeholder="Enter Message"
                  value={this.state.message}
                  name="message"
                  onChange={this.handleInput}
                />
              </div>

              <div className="col s12">
                <label>
                  <input
                    type="checkbox"
                    name="newUser"
                    className="filled-in"
                    checked={this.state.newUser}
                    onChange={this.handleInput}
                  />
                  <span>Are you new here</span>
                </label>
              </div>
              <div className="col sm-12 material-icons">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={this.handleSubmit}
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>

          <div className="col s6 text-center">
            <img className="girl" src="https://www.pngkit.com/png/full/258-2585941_contact-a-web-specialist-woman-cartoon-business-png.png"/>
            
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;
