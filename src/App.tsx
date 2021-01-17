import React from "react";
import AuthForm from "Modules/AuthForm/AuthForm";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";

import * as theme from "Config/theme";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthForm />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
