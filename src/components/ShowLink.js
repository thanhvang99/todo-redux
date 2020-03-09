import React from "react";

const ShowLink = ({ onClick, children, active }) => {
  if (active) return <span>{children}</span>;
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
};

export default ShowLink;
