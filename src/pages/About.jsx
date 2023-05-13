const About = () => {
  return (
    <div>
      <div className='w-full py-24'>
        <div className="w-11/12 mx-auto md:w-5/6">
          <div className='flex flex-col items-center gap-8'>
            <h1 className='text-6xl underline decoration-blue-700 decoration-wavy'>About Us</h1>
            <h3 className='text-3xl text-center max-w-3xl'>"Efficiently Manage Medical Processes with <div className='bg-blue-700 text-white p-2 rounded-lg inline-block rotate-3 mt-2 md:mt-0'>Open Source</div> Healthcare Management Software</h3>
            <p className='text-lg text-center font-light md:w-3/4 text-gray-500'>Welcome to our Open Source Medical Management Software. We are a team of dedicated developers, designers, and healthcare professionals who believe that technology can transform the way healthcare is managed. Our software is built on the principles of openness, flexibility, and accessibility. We understand that every healthcare organization has unique needs and workflows, and our software is designed to adapt to those needs. Our platform is open source, meaning that it is free to use, modify and distribute, ensuring that healthcare providers of all sizes and budgets can benefit from our technology.</p>
            <h3 className='text-3xl text-center max-w-3xl underline decoration-blue-700'>Our Mission</h3>
            <p className='text-lg text-center font-light md:w-3/4 text-gray-500'>We believe that access to quality healthcare should be universal, and our open source approach ensures affordability, scalability, and adaptability for medical organizations of all sizes. By offering a comprehensive suite of tools and modules, we aim to simplify administrative tasks, optimize resource allocation, and improve overall efficiency within healthcare institutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About