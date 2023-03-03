import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Animal } from "./types/Animal";
import AnimalList from "./com/AnimalList";
import AnimalDetail from "./com/AnimalDetail";
import { getAnimals } from "./api/animals";

const App = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const animals = await getAnimals();
      setAnimals(animals);
    };
    fetchAnimals();
  }, []);

  return (
    <Router>
      <Routes>
        <Route  path="/">
          <AnimalList animals={animals} />
        </Route>
        <Route path="/animal/:id">
          <AnimalDetail animals={animals} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;