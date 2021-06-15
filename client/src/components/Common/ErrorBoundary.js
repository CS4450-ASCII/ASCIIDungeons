import React, { Component, Fragment } from 'react';

export default class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    console.error(`Error: ${error}`);
  }
  render() {
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}
