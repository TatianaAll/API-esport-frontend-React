function ResearchBar() {
  return (
    <div className="flex bg-matcha w-90 rounded-2xl justify-center items-center gap-2 p-2 mx-auto my-3">
      <label className="w-10" htmlFor = "search">
        <img src="/images/Magnifying_Glass.png" alt="research" className="w-full"/>
      </label>
      <input type="text" className="border-b border-light text-light m-1" name="search" id="search"/>
      <button className="w-20 text-light hover:text-frappe">Search</button>
    </div>
  );
}

export default ResearchBar;
