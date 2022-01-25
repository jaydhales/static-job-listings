import React, { Component } from "react";

export class Card extends Component {
  render() {
    const data = this.props.input;

    return (
      <div className="card">
        <div className="desc-div">
          <img src={"." + data.logo} alt="" />

          <div className="desc">
            <div className="org">
              <h4>{data.company}</h4>

              <div className="attr">
                {data.new && <p className="new">New!</p>}
                {data.featured && <p className="feat">Featured</p>}
              </div>
            </div>

            <h3 className="role">{data.position}</h3>

            <div className="features">
              <p className="time">{data.postedAt}</p>
              <p className="type">{data.contract}</p>
              <p className="location">{data.location}</p>
            </div>
          </div>
        </div>

        <div className="filter">
          <button onClick={this.props.addFilter} value={data.role}>
            {data.role}
          </button>
          <button onClick={this.props.addFilter} value={data.level}>
            {data.level}
          </button>
          {data.languages.map((lan) => (
            <button key={lan} value={lan} onClick={this.props.addFilter}>
              {lan}
            </button>
          ))}
          {data.tools.map((a) => (
            <button key={a} value={a} onClick={this.props.addFilter}>
              {a}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
