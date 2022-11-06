import React from "react";
import PropTypes from "prop-types";
function PropsComponent(props) {
  return <div>{props.name}</div>;
}

PropsComponent.defaultProps = {
  name: "Jimmy",
  age: 8,
};
PropsComponent.propTypes = {
  name: PropTypes.string,
  age: function (props, propName, componentName) {
    if (!/7/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          props[propName] +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};
export default function Component() {
  return (
    <div>
      <PropsComponent />
    </div>
  );
}
