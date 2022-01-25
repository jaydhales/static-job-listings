import React, { Component } from "react";
import Card from "./Section/Card.jsx";

export class Section extends Component {
  render() {
    return (
      <section>
        {this.props.data.map(
          (el) =>
            (this.props.filters.length === 0 ||
              (this.props.filters.includes(el.level) &&
                this.props.filters.includes(el.role))) && (
              <Card input={el} key={el.id} addFilter={this.props.addFilter} />
            )
        )}
      </section>
    );
  }
}


export default Section;
// .forEach((tool) => tool)
// .forEach((lan) => lan)
