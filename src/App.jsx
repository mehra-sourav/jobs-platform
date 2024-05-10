import "./App.css";
import { Container } from "@mui/material";
import CardList from "@/components/CardList";
import FilterList from "@/components/FilterList";
function App() {
  return (
    <Container maxWidth="xl">
      <FilterList />
      <CardList />
    </Container>
  );
}

export default App;
