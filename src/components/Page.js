import React from "react";
import PropTypes from "prop-types";

const Page = ({ match }) => {
  const { id } = match.params;

  return <div>{id ? <h1>Page {id}</h1> : <h1>Page 总页面</h1>}</div>;
};

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
  }).isRequired,
};

export default Page;
