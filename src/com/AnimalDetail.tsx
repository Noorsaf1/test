import { useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../types/Animal";
import { feedAnimal } from "../api/animals";

type Props = {
  animals: Animal[];
};

const AnimalDetail = ({ animals }: Props) => {
  const { id } = useParams<{ id: string }>();
  const animal = animals.find((animal) => animal.id === parseInt(id!));

  const [isFed, setIsFed] = useState<boolean>(animal?.isFed || false);
  const [lastFedAt, setLastFedAt] = useState<Date | undefined>(
    
  );

  const handleFeedAnimal = async () => {
    const fedAt = new Date();
    await feedAnimal(id!, fedAt);
    setIsFed(true);
    setLastFedAt(fedAt);
  };

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div>
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
      <p>Is fed: {isFed ? "Yes" : "No"}</p>
      {isFed ? (
        <p>Last fed at: {lastFedAt?.toLocaleString()}</p>
      ) : (
        <button onClick={handleFeedAnimal}>Feed animal</button>
      )}
    </div>
  );
};

export default AnimalDetail;