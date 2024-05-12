import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import CardList from "@/components/CardList";
import FilterList from "@/components/FilterList";
import theme from "@/theme";
import store from "@/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <FilterList />
          <CardList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
