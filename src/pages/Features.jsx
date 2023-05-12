const Features = () => {
  return (
    <div className='w-full py-24'>
      <div className='w-11/12 mx-auto md:w-5/6'>
        <div className="flex flex-col items-center gap-8">
          <h1 className='text-6xl underline decoration-blue-700'>Features</h1>
          <h3 className='text-3xl text-center max-w-3xl'>Enhance Efficiency and Patient Care with Powerful Features at Your Fingertips</h3>
          <p className='text-lg text-center font-light md:w-3/4 text-gray-500'>Welcome to our Open Source Medical Management Software, where we strive to revolutionize healthcare management through cutting-edge technology.With a user-friendly interface and a wide range of robust features, we empower healthcare providers to efficiently manage appointments, track patient records, handle billing and invoicing, and much more.</p>
          <div className="flex flex-col md:mt-6 justifyb-between gap-8 md:flex-row md:gap-4">
            <div className="border border-blue-700 shadow-lg p-4 md:w-1/3 text-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 mx-auto text-blue-700 bg-white -mt-11">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h2 className="text-xl text-center my-4">Patient Records Management</h2>
              <p className="text-md text-center font-light md:w-3/4 mx-auto text-gray-500 leading-6">Simplify your billing process with our integrated billing and invoicing feature. Generate invoices, track payments, manage insurance claims etc.</p>
            </div>
            {/* Second */}
            <div className="border border-blue-700 shadow-lg p-4 md:w-1/3 text-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 mx-auto text-blue-700 bg-white -mt-11">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
              <h2 className="text-xl text-center my-4">Patient Records Management</h2>
              <p className="text-md text-center font-light md:w-11/12 mx-auto text-gray-500 leading-6">With our software, healthcare organizations can securely store and manage patient records, medicines and other usefull things.</p>
            </div>
            {/* Third */}
            <div className="border border-blue-700 shadow-lg p-4 md:w-1/3 text-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 mx-auto text-blue-700 bg-white -mt-11">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
              <h2 className="text-xl text-center my-4">Appointment Scheduling</h2>
              <p className="text-md text-center font-light md:w-11/12 mx-auto text-gray-500 leading-6">Our Open Source Medical Management Software provides a comprehensive appointment scheduling system</p>
            </div>
          </div>
          <a href="#" className="text-blue-700 font-normal">Read More...</a>
        </div>
      </div>
    </div>
  )
};

export default Features