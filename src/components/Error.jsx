const Error = ({mensaje}) => {
  return (
    <div className='text-white bg-red-600 text-center p-2 rounded'>
              <p>{mensaje}</p>
            </div>
  )
}

export default Error