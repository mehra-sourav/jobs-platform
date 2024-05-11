import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import CardList from "@/components/CardList";
import FilterList from "@/components/FilterList";
import { getJobs } from "@/api";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((result) => {
      setJobs(result.jdList);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <FilterList />
      <CardList jobs={jobs} />
    </Container>
  );
}

export default App;
