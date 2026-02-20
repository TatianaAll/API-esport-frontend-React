function ResearchBar() {
  return (
    <form className="flex bg-matcha w-90 rounded-2xl justify-center items-center gap-2 p-2 mx-auto" >
      <label className="w-10" htmlFor="search">
        <img
          src="/images/Magnifying_Glass.png"
          alt="research"
          className="w-full"
        />
      </label>
      <input
        type="text"
        className="border-b border-light text-light m-1"
        name="search"
        id="search"
        value=""
        placeholder="Research a team ..."
      />
      <button type="submit" className="w-20 text-light hover:text-frappe">
        Search
      </button>
    </form>
  );
}

export default ResearchBar;
