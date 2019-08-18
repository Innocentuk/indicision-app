import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // handlePick - pass down to Action and set up onClick - bind
  // randomly pick an option an alert
  handlePick = e => {
    e.preventDefault();
    const randomOptions = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomOptions];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleCloseSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOptions = () => {
    // Use the shortcut instance of using return
    this.setState(() => ({ options: [] }));
  };
  // Delete singler option
  handleDeleteOption = optionToRemove => {
    // Use the shortcut instance of using return
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
    console.log(optionToRemove + " click");
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
    // console.log(option);
  };

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
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseSelectedOption={this.handleCloseSelectedOption}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
