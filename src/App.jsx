import React, { Component } from "react";
import Filter from "./components/Filter";
import Section from "./components/Section";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: [],
    };

    this.addFilter = this.addFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
        console.log(this.state.data);
      });
  }

  componentDidUpdate() {}

  addFilter(e) {
    e.preventDefault();
    !this.state.filters.includes(e.target.value) &&
      this.setState({
        filters: [...this.state.filters, e.target.value],
      });
  }

  removeFilter(e) {
    e.preventDefault();
    this.setState((state) => ({
      filters: state.filters.filter((el) => el !== e.target.value),
    }));
  }

  clearFilter(e) {
    e.preventDefault();
    this.setState({
      filters: [],
    });
  }

  render() {
    return (
      <div className="App">
        <header></header>
        {this.state.filters.length >= 1 && (
          <Filter
            filter={this.state.filters}
            clearFilter={this.clearFilter}
            removeFilter={this.removeFilter}
          />
        )}
        <Section
          data={this.state.data}
          filters={this.state.filters}
          addFilter={this.addFilter}
        />
      </div>
    );
  }
}

export default App;
