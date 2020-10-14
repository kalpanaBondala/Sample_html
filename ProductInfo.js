import React from 'react'

class Productinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: '',
    Description:'',
Quantity: "",
Cost:null,
 };
      }
      myChangeHandler = (event) => {
        // this.setState({Product: event.target.value});
        let nam = event.target.name;
    let val = event.target.value;
    if (nam === "Cost") {
      if (!Number(val)) {
        alert("Your Cost must be a number");
      }
    
    this.setState({[nam]: val});
  }
      }
      render() {
        return (
            <form>
            <h1>Product Information   {this.state.Name} {this.state.Description}  {this.state.Quantity} {this.state.Cost}</h1>
            <p>Name of the Product:</p>
            <input
              type='text'
              name="Name"
              onChange={this.myChangeHandler}
            />
            <p>Description :</p>
            <input
              type='text'
              name="Description"
              onChange={this.myChangeHandler}
            />
            <p>Quantity:</p>
            <input
              type='text'
              name="Quantity"
              onChange={this.myChangeHandler}
            />
            <p>Cost :</p>
            <input
              type='text'
              name="Cost"
              onChange={this.myChangeHandler}
            />
            <br></br>
             <button type="submit">Add to cart</button>
            </form>
        );
      }
    }

    


export default Productinfo;