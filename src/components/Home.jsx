const Home = () => {
  return (
    <label className="swap  swap-rotate ml-5">
      <input type="checkbox" />
      <div className="swap-on card bg-success w-52 h-52 flex items-center justify-center   text-2xl font-bold">
        Dim
      </div>
      <div className="swap-off card bg-warning w-52 h-52 flex items-center justify-center text-2xl font-bold ">
        winter
      </div>
    </label>
  );
};
export default Home;
