// reference: https://www.youtube.com/watch?v=XuFDcZABiDQ
import React, { Component, createContext } from 'react';

const initialState = {
  errors: []
};

// Create context
export const AppContext = createContext(initialState);

// Provider component
class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  setErrors = errors => {
    this.setState({ errors });
  };

  render() {
    const { children } = this.props;
    const { errors } = this.state;

    return (
      <AppContext.Provider
        value={{
          errors,
          setErrors: this.setErrors
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
