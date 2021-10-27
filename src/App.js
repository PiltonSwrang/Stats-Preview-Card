import img from "./images/desktop.jpg"
import './stats.css';

function App() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 text-white px-8 xl:px-28 py-14 xl:py-32">
        
        <div className="card flex flex-col justify-center p-6 xl:p-16 rounded-tl-none xl:rounded-tl-2xl rounded-bl-2xl rounded-br-2xl xl:rounded-br-none text-center xl:text-left order-2 xl:order-1 pt-0 xl:pt-auto">
          <h1 className="text-3xl xl:text-5xl font-bold mt-16 xl:mt-0">Get <span className="insights">insights</span> that help your business grow.</h1>

          <p className="text-md mt-8 mb-12 xl:mb-20 xl:w-3/4">Discover the business of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

          <div className="flex flex-col xl:flex-row justify-between text-2xl">
            <div className="mb-6 xl:mb-0">
              <h1 className="text-xl xl:text-3xl font-bold">10k+</h1>
              <p className="uppercase text-xs xl:text-sm mt-1 tracking-widest">companies</p>
            </div>

            <div className="mb-6 xl:mb-0">
              <h1 className="text-xl xl:text-3xl font-bold">314</h1>
              <p className="uppercase text-xs xl:text-sm mt-1 tracking-widest">templates</p>
            </div>

            <div className="mb-6 xl:mb-0">
              <h1 className="text-xl xl:text-3xl font-bold">12M+</h1>
              <p className="uppercase text-xs xl:text-sm mt-1 tracking-widest">queries</p>
            </div>
          </div>
        </div>

        <div className="bgColor rounded-tl-2xl xl:rounded-tl-none rounded-tr-2xl xl:rounded-br-2xl order-1 xl:order-2">
          <img src={img}
            className="w-full h-full rounded-tl-2xl xl:rounded-tl-none rounded-tr-2xl xl:rounded-br-2xl imgCard" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
