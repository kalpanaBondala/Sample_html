import React from 'react'

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state={
            counterval :0
        }

    }

    onIncreamentClick(value=0) {
        //console.log(this.state.counterval);
        value= value + 1;
        this.setState({counterval:value})
        console.log(value);

        //alert("click on me to increament" +value);

    }


    onDecreamentClick(value=0) {
        //console.log(this.state.counterval);
        value= value - 1;
        this.setState({counterval:value})
        console.log(value);

        //alert("click on me to increament" +value);

    }
    render() {
        return (<React.Fragment>
                <p> Counter value is {this.state.counterval} </p>
                <input type="button" value="+" onClick={(value)=>this.onIncreamentClick(this.state.counterval)}/>
                <br></br>
                <input type="button" value="-" onClick={(value)=>this.onDecreamentClick(this.state.counterval)}/>
            </React.Fragment>)
        }    
    }

    export default Counter;




