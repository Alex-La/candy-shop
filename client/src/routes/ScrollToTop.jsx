import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Context from "../context/Context";

class ScrollToTop extends Component {
  static contextType = Context;

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { instance } = this.context;
      instance.close();
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);
