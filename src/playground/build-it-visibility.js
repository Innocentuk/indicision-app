class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggle() {
    this.setState(prevState => {
      return { visibility: !prevState.visibility };
    });
    console.log(this.state.visibility);
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>You can now view the hidden details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));

/* const heading = "Visibility Toggle";
const showText = "Hey, you may now view details :)";

let visibility = false;
const onShowDetails = e => {
  e.preventDefault();
  visibility = !visibility;
  console.log(visibility);
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{heading}</h1>
      <button onClick={onShowDetails}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && <p>{showText}</p>}
    </div>
  );
  const appRoot = document.getElementById("root");

  ReactDOM.render(template, appRoot);
};
renderApp();
 */
