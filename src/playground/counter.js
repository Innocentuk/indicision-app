class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    // create a state for our counter
    this.state = { count: 0 };
  }
  componentDidMount() {
    try {
      const num = localStorage.getItem("count");
      const count = parseInt(num, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // DoC nothing if options invalid
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.state.count) {
      const num = this.state.count;
      localStorage.setItem("count", num);
    }
  }

  addOne() {
    this.setState(currState => {
      return { count: currState.count + 1 };
    });
    /* this.state.count = this.state.count + 1;
    console.log(this.state); */
  }
  minusOne() {
    this.setState(currState => {
      return { count: currState.count - 1 };
    });
  }
  reset() {
    this.setState(currState => {
      return { count: 0 };
    });
    //    console.log(this.props.reset);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
/* Counter.defaultProps = {
  count: 0
}; */
ReactDOM.render(<Counter />, document.getElementById("root"));

/* let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
  //console.log("MinusOne", --count);
};
const resetTxt = "Reset";
const reset = () => {
  count = 0;
  renderCounterApp();
  //console.log("Reset", count);
};
// Make button '-1' setup funtion and register - log minus 1
// Make a button 'reset'- setup reset function -log 'reset'
const appRoot = document.getElementById("root");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}> {resetTxt} </button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
 */
