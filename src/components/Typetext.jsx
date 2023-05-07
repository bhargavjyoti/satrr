import { Typewriter } from 'react-simple-typewriter'

const Typetext = () => {
  return (
    <div className='App'>
      <Typewriter 
        words={['Patients', 'Medicines', 'Appointments', 'Reports']}
        loop={true}
        cursor
        cursorStyle='|'
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </div>
  )
}

export default Typetext;