import React from "react";

const IndexPage = () => (
  <>
    <nav
      className="relative flex flex-wrap items-center justify-between 
    
     bg-red-500
     "
    >
      <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#pablo"
          >
            <img
              className=" h-14 w-15 "
              src="https://i.ibb.co/5F8GX3P/275695272-306152975005517-7744725845089821097-n.png"
              alt=""
            />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center hidden justify-between w-full md:flex md:w-auto md:order-1"
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2 pt-4">Home | </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-neutral-300 light:ring-gray-500"
                  src="https://api.lorem.space/image/face?hash=33791"
                />
                <span className="text-slate-100 ml-2 underline pt-2">
                  Jasim Uddin
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <section className="bg-red-200 container w-3/4 mx-auto space-x-10 mt-10">
        <div className="flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/5F8GX3P/275695272-306152975005517-7744725845089821097-n.png"
              alt=""
              className="h-20 w-22"
            />
          </div>
          <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl font-bold leading-none ">
            Jazeerat Dubai Visa Application from
            </h1>
          </div>
        </div>
      </section>
    </main>

    <div className=' h-72 flex flex-row w-3/4 mx-auto space-x-10 mt-6'>
  <div><img className='h-72 ' src="https://api.lorem.space/image/face?hash=33791" alt="" /></div>
  <div><img className='h-72 ' src="https://upload.wikimedia.org/wikipedia/commons/5/51/The_data_page_of_the_Azerbaijani_biometric_passport.jpg" alt="" />
</div>

{/* 2nd layer 3rd column  */}
  <div className=' flex flex-col  w-3/5 justify-between items-center'>
<div></div>
{/* picture start  */}
    <div className=' flex flex-row space-x-1 justify-center items-center'>
    <img className=" h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""  />
   <span className=' text-3xl font-semibold'>Jasim Uddin</span>
    </div>

  {/* picture end  */}

    <div className=' w-full shadow-lg shadow-gray border-2 align-bottom h-44 flex flex-row space-x-3 justify-evenly'>

        
        <div className=' flex flex-col justify-center items-center'>
          <div className=' border-2 w-20 h-20 flex justify-center items-center'><img className=' h-8 w-8' src="https://i.ibb.co/HXnZ0Mh/debit-card.png" alt="" /></div>
          <p className=' text-sm mt-1'>Payment status <br /> <span className=' text-green-500 font-medium'>Paid</span>(City Bank)</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' border-2  w-20 h-20 flex justify-center items-center'><img className=' h-10 w-10' src="https://i.ibb.co/RpPr2VR/approved.png" alt="" /></div>
          <p className=' text-sm mt-1 text-center'>Approved Status <br /> <span className=' text-green-500 font-medium'>Approved</span></p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' border-2  w-20 h-20 flex justify-center items-center'><img className=' h-8 w-8' src="https://i.ibb.co/K64KfXs/detail.png" alt="" /></div>
          <p className=' text-sm mt-1 text-center'>Payment details <br /> <span className=' text-blue-500 font-medium'> Click</span> to check here</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' bg-gray-400  w-20 h-20 flex justify-center items-center'><img className=' h-8 w-8' src="https://i.ibb.co/pxPhFsb/check.png" alt="" /></div>
          <p className=' text-sm mt-1 text-center'>Unverified<br /> <span className=' text-blue-500 font-medium'>Click</span> to accept for verify</p>
        </div>

        </div>    
  </div>
</div>


<div className=' space-y-3 my-4 text-gray-500'>
  <div className=' w-3/4 mx-auto bg-red-200 h-12 rounded-md flex items-center justify-between'>
    <p className="relative left-7 ">First Name : Jasim</p>
    <p className="relative right-32">Last Name : Uddin</p>
    <p className="relative right-44">Mobile no : 01454545454</p>
  </div>
  <div className=' w-3/4 mx-auto bg-red-200 h-12 rounded-md flex items-center justify-between'>
  <p className="relative left-7 ">Email : Jasimuddin21@gmail.com</p>
    <p className="relative right-40">Date of birth : 01/01/1998</p>
    <p className="relative right-48">Place of birth : Sirajgonj</p>
  </div>

  <div className=' grid grid-cols-3 w-3/4 mx-auto gap-x-6 gap-y-7'>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
<p className="relative left-7">Address(present) : Sirajganj,BD</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Police station : Sirajganj</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">Zip code : 6700</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-7">Full Address (Permanent)</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Police station</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">Zip code</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-7">District</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Country</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">Country code</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-7">Deposit(City Bank)</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-3">Multiple entry</p>
  </div>
  <div className=' bg-red-200 h-12 rounded-md flex items-center'>
  <p className="relative left-24">1 months entry</p>
  </div>
  <div className=' bg-red-700 h-12 rounded-md flex items-center justify-center'>
  <p className="text-white">Print</p>
  </div>
  <div className=' bg-red-700 h-12 rounded-md flex items-center justify-center'>
  <p className="text-white">Back to home</p>
  </div>
    
  </div>
</div>

  </>
);

export default IndexPage;
