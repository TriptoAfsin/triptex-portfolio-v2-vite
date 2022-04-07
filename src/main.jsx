import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { store } from "./redux/store/configureStore";
import { Provider } from "react-redux";
// import colorModeTheme from "./colorModeTheme";
import { Fonts } from "./Fonts/Fonts";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  styles: {
    global: props => ({
      body: {
        bg: mode("white", "#18181a")(props),
        color: mode("black", "#f3f3f4")(props),
      },
    }),
  },
}

const theme = extendTheme({
  config
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider
        theme={theme}
      >
        <Fonts />
    <App />
      </ChakraProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
