/*import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

 class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{ background: theme.background, color: theme.foreground }}
        onClick={props.changeTheme}
      >
        Button
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
 */

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      style={{ background: theme.background, color: theme.foreground }}
      onClick={props.changeTheme}
    >
      Button
    </button>
  );
}
