const Categories = () => {
  return (
    <nav className=" mt-6 bg-slate-100">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base py-3 ">
        <li>
          <a href="#">General</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Entertainment</a>
        </li>
        <li>
          <a href="#">Health</a>
        </li>
        <li>
          <a href="#">Science</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Technology</a>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
