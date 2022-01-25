import React, { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <div className="card filt-card">
        <div className="filter-list">
          {this.props.filter.map((fil) => {
            return (
              <div className="filter-name" key={fil}>
                <p>{fil}</p>
                <button
                  className="close"
                  onClick={this.props.removeFilter}
                  value={fil}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>

        <button className="clear-btn" onClick={this.props.clearFilter}>
          Clear
        </button>
      </div>
    );
  }
}

export default Filter;
