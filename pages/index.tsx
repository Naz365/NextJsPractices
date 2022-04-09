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
    
  </>
);

export default IndexPage;
