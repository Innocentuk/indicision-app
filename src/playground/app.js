class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
      console.log("Will be used for fetching data!");
    } catch (e) {
      // Do nothing if options invalid
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    console.log("will be used for saving data");
  }
  componentWillUnmount() {
    console.log("used when removing data");
  }

  handleDeleteOptions() {
    // Use the shortcut instance of using return
    this.setState(() => ({ options: [] }));
  }
  // Delete singler option
  handleDeleteOption(optionToRemove) {
    // Use the shortcut instance of using return
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
    console.log(optionToRemove + " click");
  }
  // handlePick - pass down to Action and set up onClick - bind
  // randomly pick an option an alert
  handlePick() {
    const randomOptions = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomOptions];
    alert(option);
    /*     this.setState(state => {
      const option = this.state.options[randomOptions];
      return {
        options: alert(option)
      };
    }); */
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
    // console.log(option);
  }

  render() {
    const subtitle = "Let computer decide for you.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};
// convert header class into stateless func component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle} </h2>}
    </div>
  );
};
// to show a default value eg title
Header.defaultProps = {
  title: "Indecision"
};
/* class Header extends React.Component {
  render() {
    //    console.log(this.props.title);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle} </h2>
      </div>
    );
  }
} */
// convert Action class into stateless func component
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
/* class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
} */
// Setup options props for Options component
// Render the length of the array
// convert Options class into stateless func component
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove</button>
      {props.options.length === 0 && <p>Add an option to get started!</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};
// convert Option class into stateless func component
const Option = props => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};
/* class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
} */

/* class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
} */
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // trim() removes empty spaces
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));

// Stateless functional component
/* const User = prop => {
  return (
    <div>
      <p>Name: {prop.name} </p>
      <p>Age: {prop.age} </p>
    </div>
  );
};

ReactDOM.render(
  <User name="Eucheria" age="28" />,
  document.getElementById("root")
); */
