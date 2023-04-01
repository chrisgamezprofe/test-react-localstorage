const Paciente = ({paciente,setPaciente,eliminar}) => {

  const {nombre,propietario,email,id} = paciente

  return (
    <div className="m-3 bg-white shadow-md px-5 py-3 rounded-xl">
      <div className="card rounded-none mb-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas:{" "}
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between">
        <button type="button"
       className='border-2 py-1 px-10 cursor-pointer font-bold bg-indigo-600 rounded-md text-white uppercase hover:bg-indigo-700 transition-all'
        onClick={()=> setPaciente(paciente)}
        >Editar</button>
        
        <button type="button" onClick={()=>eliminar(id)}
       className='border-2 py-1 px-10 cursor-pointer font-bold bg-red-600 rounded-md text-white uppercase hover:bg-red-700 transition-all'
        >Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
