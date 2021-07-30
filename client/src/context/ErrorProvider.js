// reference: https://www.youtube.com/watch?v=XuFDcZABiDQ
import React, { Component, createContext } from 'react';

const initialState = {
  errors: [],
};

// Create context
export const ErrorContext = createContext(initialState);

// Provider component
class ErrorProvider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  setErrors = (errors) => {
    this.setState({ errors });
  };

  render() {
    const { children } = this.props;
    const { errors } = this.state;

    return (
      <ErrorContext.Provider
        value={{
          errors,
          setErrors: this.setErrors,
        }}
      >
        {children}
      </ErrorContext.Provider>
    );
  }
}

export default ErrorProvider;
