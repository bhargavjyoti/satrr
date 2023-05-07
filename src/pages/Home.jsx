import { Player } from '@lottiefiles/react-lottie-player'
import Typetext from '../components/Typetext'

const Home = () => {
  return (
    <>
      <div className="w-full my-20 md:my-0">
        <div className="mx-auto md:w-5/6 w-11/12">
          <div className="flex flex-col-reverse min-h-screen md:flex-row md:justify-between md:items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-5 md:w-3/5 text-center md:text-left">
              <h3 className="text-3xl font-normal text-blue-700">सत्र</h3>
              <h1 className="text-6xl font-bold">One Powerfull Software To Manage <span className="text-blue-700 md:inline-block"><Typetext /></span></h1>
              <p className="text-lg font-light md:w-3/4 text-gray-500">Satrr software is a powerful tool that can help healthcare providers streamline their operations and improve patient care. With features such as appointment scheduling, electronic health records (EHRs), billing and invoicing, and reporting, medical management software can simplify the administrative tasks that can consume valuable time and resources.</p>
              <a href="#" className="border bg-blue-700 rounded-xl py-4 md:w-1/3 text-center text-lg text-white hover:scale-105 transition-all">Download For Windows</a>
            </div>
            {/* Right Side */}
            <div className='md:w-2/5 mx-auto'>
              <Player src="https://assets5.lottiefiles.com/packages/lf20_ioxlu1zt.json" loop autoplay className='' />
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

  // .pauseFor(300)
  // .deleteChars(8)
  // .typeString('Medicines')
  // .pauseFor(300)
  // .deleteChars(9)
  // .typeString('Appointments')
  // .pauseFor(300)
  // .deleteChars(12)
  // .typeString('Reports')
  // .pauseFor(300)
  // .deleteChars(7)
  // .pauseFor(1000)
  // .start();

export default Home