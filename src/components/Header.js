import React, { Component } from "react";
import FilterShowLink from "../containers/FilterShowLink";
import { visibilityTypes } from "../actions";

class Header extends Component {
  render() {
    return (
      <p>
        Show{" "}
        <FilterShowLink filter={visibilityTypes.SHOW_ALL}>All</FilterShowLink>
        <FilterShowLink filter={visibilityTypes.SHOW_ACTIVE}>
          Active
        </FilterShowLink>
        <FilterShowLink filter={visibilityTypes.SHOW_COMPLETED}>
          Completed
        </FilterShowLink>
      </p>
    );
  }
}
export default Header;
