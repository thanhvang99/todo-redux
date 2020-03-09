import React, { Component } from "react";
import FilterShowLink from "../containers/FilterShowLink";
import { visibilityTypes } from "../actions";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <FilterShowLink filter={visibilityTypes.SHOW_ALL}>Show All</FilterShowLink>
        <FilterShowLink filter={visibilityTypes.SHOW_ACTIVE}>
            Show Active
        </FilterShowLink>
        <FilterShowLink filter={visibilityTypes.SHOW_COMPLETED}>
            Show Completed
        </FilterShowLink>
      </div>
    );
  }
}
export default Header;
