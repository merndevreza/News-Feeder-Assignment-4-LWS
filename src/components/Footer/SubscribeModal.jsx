import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SubscribeModal = ({ setIsOpen }) => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    //In production, we can store the user info in the server through calling it's API here.
    console.log(fullName, email);
    setIsOpen(false);
    toast.success("Thanks for Subscribing our newsletter.", {
      position: "bottom-right",
      theme: "dark",
    });
  };
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="Learn With Sumit Logo" />
      <h2 className="mb-2.5 text-xl font-bold lg:text-[20px] mt-5 text-black inline-block max-w-lg">
        Subscribe and be informed first hand about the actual economic news.
      </h2>
      <form className="flex flex-col" onSubmit={(e) => handleSubscribe(e)}>
        <input
          className="p-2 bg-slate-100 text-black mb-4"
          type="text"
          required
          name="fullName"
          placeholder="Full name"
        />
        <input
          className="p-2 bg-slate-100 text-black mb-4"
          type="email"
          required
          name="email"
          placeholder="Email"
        />
        <input
          className="bg-primary py-2 mb-3 rounded cursor-pointer hover:bg-[rgb(8,124,86)]"
          type="submit"
          value="Submit"
        />

        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-red-400 hover:bg-red-500  rounded"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default SubscribeModal;
