import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    let id = (Math.random().toString(36).substring(2)) + Date.now().toString(36)
    return id;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    // validar
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true)
      return
    }
    
    setError(false)
    const obj = {nombre,propietario,email,fecha,sintomas}

    if(paciente.id){
      obj.id = paciente.id
      const editado = pacientes.map(item => item.id === paciente.id ? obj:item
      )
      setPacientes(editado)
      setPaciente({})
    }else{
      obj.id=generarId()
      setPacientes([...pacientes,obj])
    }
    

    

    setEmail('')
    setFecha('')
    setPropietario('')
    setNombre('')
    setSintomas('')
    

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
        <h2 className='font-black text-3xl text-center'>Seguimiento</h2>
        <p className='text-center mb-10'>
          Agregar {' '}
          <span className='text-indigo-600 font-bold'>Pacientes</span>
        </p>

        <form onSubmit={handleSubmit} autoComplete='off' className='bg-white shadow-md rounded-lg px-10 py-5'>
          { error && <Error mensaje='Debe llenar todos los campos' /> }
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la mascota:</label>
            <input type="text" 
            id='mascota'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Propietario:</label>
            <input type="text" 
            id='propietario'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email:</label>
            <input type="email" 
            id='email'
            placeholder='Email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta:</label>
            <input type="date" 
            id='alta'
            placeholder='Email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas:</label>
            <textarea
            id='sintomas'
            placeholder='Describe los síntomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
          </div>
        <input type="submit" value={paciente.id ? 'Editar paciente':'Registrar Paciente'}
       className='border-2 w-full p-2 cursor-pointer font-bold bg-indigo-600 rounded-md text-white uppercase hover:bg-indigo-700 transition-all'
        />
        </form>
    </div>
  )
}

export default Formulario