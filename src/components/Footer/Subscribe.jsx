import { useState } from "react";
import SubscribeModal from "./SubscribeModal";
import { ToastContainer } from "react-toastify";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <>
      <div className="col-span-12 mt-10 flex items-start gap-4 xl:col-span-5 xl:mt-0">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">
            Subscribe and be informed first hand about the actual economic news.
          </h3>
          <p className="mt-2 text-sm leading-6">
            All the days headlines and highlights, direct to you every morning..
          </p>
        </div>
        <button
          className="rounded-full bg-[#00D991] px-7 py-2.5 text-xs font-medium text-[#F1EFEA] hover:opacity-80 lg:text-base"
          onClick={() => setIsOpen(true)}
        >
          Subscribe
        </button>
      </div>
      {isOpen && (
        <div className="fixed w-full h-screen left-0 top-0 bg-black bg-opacity-40">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5">
            <SubscribeModal setIsOpen={setIsOpen} />
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
};

export default Subscribe;
