//reminder - to run this in the browser, use "serve ." in gitBash
//to run on localhost:5000

class Counter extends React.Component {
    /*
    Adding a constructor so we can set our initial state
    */
    constructor(props){
        //let the parent class do its thing with props
        super(props);
        //setup the initial value for count in state
        this.state = {
            count: 0
        }

        // this.setState({
        //     count: 10
        // })
        //use a callback function when updating state with from a value already in state
        //https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
        // this.setState((state, props)=>({
        //     count: state.count + 1
        // }))
    }

    incrementHandler = () => {
        // this.setState((state, props)=>({
        //     count: state.count + 1
        // }))
        this.setState({
                count: 10
            })
    }
    // simple render method just displaying the count
    render(){
        return (
            <h1>
                {/* Hi, can you see me? */}
                {this.state.count}
                <button onClick={this.incrementHandler}>click</button>
            </h1>
        )
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );



//OLD COUNTER CODE BELOW THIS LINE
// //self-invoking function to help with scope
// (function () {

//     //got the decrement element out of the DOM and stored it 
//     //in a variable
//     let decrementButton = document.querySelector("#decrement");

//     //get ahold of the counter
//     let counter = document.querySelector("#counter");

//     //get ahold of the increment button
//     let incrementButton = document.querySelector("#increment");

//     decrementButton.addEventListener("click", function () {

//         //get the current value of the counter
//         let currentCounterValue = counter.innerHTML

//         let newCounterValue = currentCounterValue - 1;

//         if (newCounterValue >= 0) {
//             counter.innerHTML = newCounterValue;
//         }

//         if (newCounterValue < 10) {
//             counter.style.color = "black";
//         }


//     })

//     incrementButton.addEventListener("click", function () {

//         //get the current value of the counter
//         let currentCounterValue = counter.innerHTML

//         let newCounterValue = parseInt(currentCounterValue) + 1;

//         counter.innerHTML = newCounterValue

//         if (newCounterValue >= 10) {
//             counter.style.color = "red";
//         }

//         if (currentCounterValue === "20") {
//             counter.innerHTML = currentCounterValue;
//         }

//     })

    
// })();
        // function initialCountPassIn(props) {
        //     let props = prompt("Please enter a number between 1 and 20");
        //     if (props !== null) {
        //         document.getElementById("counter").innerHTML = props;
        //     }
        // }