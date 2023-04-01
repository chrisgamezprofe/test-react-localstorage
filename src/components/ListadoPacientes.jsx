import Paciente from './Paciente'

const ListadoPacientes = ({pacientes,setPaciente,eliminar}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        
        {pacientes && pacientes.length?(
          <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-center mb-10'>
            Gestiona tus {' '}
            <span className='text-indigo-600 font-bold'>
              Pacientes y citas
            </span>
          </p>
          {pacientes.map(paciente => (
          <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminar={eliminar} />
        ))}
        </>
        ):(
          <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-center mb-10'>
            Inicia agregando tus {' '}
            <span className='text-indigo-600 font-bold'>
              Pacientes
            </span>
          </p>
          </>
        )}
        
        

    </div>
  )
}

export default ListadoPacientes