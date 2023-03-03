import { Link } from "react-router-dom";
import { Animal } from "../types/Animal";

type Props = {
  animals: Animal[];
};

const AnimalList = ({ animals }: Props) => {
  return (
    <div>
      <h1>Animals</h1>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            <Link to={`/animal/${animal.id}`}>{animal.name}</Link>
            <p>{animal.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;