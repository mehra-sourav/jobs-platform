import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CardList from "@/components/CardList";
import FilterList from "@/components/FilterList";
import { getJobs } from "@/api";
import theme from "@/theme";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((result) => {
      setJobs(result.jdList);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <FilterList />
        <CardList jobs={jobs} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
