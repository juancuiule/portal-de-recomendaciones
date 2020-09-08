import React from "react";
import LogoGato from "../components/LogoGato";
import { useQuery, useMutation } from "react-query";

interface DBDocument {
  __id: string;
  __v: number;
}

interface TRecomendacion extends DBDocument {
  name: string;
  description: string;
}

const Recomandacion = (props: { name: string; description: string }) => {
  const { name, description } = props;

  return (
    <div
      style={{
        textAlign: "left",
        fontSize: "18px",
        border: "1px solid #14283b",
        padding: "15px",
        borderRadius: "10px",
        color: "#14283b",
      }}
    >
      Nombre: {name} <br />
      Descripción: {description}
    </div>
  );
};

function createRecomendation(variables: { name: string; description: string }) {
  return fetch("http://localhost:3001/recomendaciones", {
    method: "POST",
    body: JSON.stringify(variables),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const Home: React.FC = () => {
  const { isLoading, error, data } = useQuery<TRecomendacion[]>(
    "recomendaciones",
    () =>
      fetch("http://localhost:3001/recomendaciones").then((res) => res.json())
  );

  const [create] = useMutation(createRecomendation);

  return (
    <div className="App">
      <header className="App-header">
        <LogoGato />
        {isLoading && "Loading..."}
        {error && "Error..."}
        <a
          className="App-link"
          href="https://docs.google.com/document/d/1tmhwN3qVSKDxYVluGy3sJnYPY_FAkXk7Wx6eQEFWquM/edit#heading=h.ili72gwy095n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recomendaciones
        </a>
        {data?.map((recomendacion) => (
          <Recomandacion
            key={recomendacion.__id}
            name={recomendacion.name}
            description={recomendacion.description}
          />
        ))}
        <button
          onClick={() => create({ name: "nombre", description: "descripción" })}
        >
          Crear
        </button>
      </header>
    </div>
  );
};

export default Home;
