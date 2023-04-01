import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    console.log('pacientes 2'+pacientes)
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminar = (id) => {
    if (confirm("Are you sure you want to?")) {
      const nuevos = pacientes.filter((pac) => pac.id !== id);
      setPacientes(nuevos);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminar={eliminar}
        />
      </div>
    </div>
  );
}

export default App;
