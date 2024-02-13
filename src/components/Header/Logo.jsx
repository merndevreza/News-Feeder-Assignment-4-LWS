import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div>
      <a className="cursor-pointer">
        <img
          className="max-w-[100px] mx-auto md:max-w-[165px]"
          src={logo}
          alt="Lws"
        />
      </a>
    </div>
  );
};

export default Logo;
