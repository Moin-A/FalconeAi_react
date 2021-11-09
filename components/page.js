import Link from "next/link";
function page({ children }) {
  return (
    <>
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <header className="shadow sticky inset-0 z-10">
          <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
              <div className="flex justify-between items-center">
                <a href="#" className="font-bold text-xl text-indigo-600">
                  FALCON Ai
                </a>
                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <Link href="/">
                  <a className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
                    About
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </div>
    </>
  );
}

export default page;
