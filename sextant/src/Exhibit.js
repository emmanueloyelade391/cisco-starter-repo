const Exhibit = ({ heading, children }) => {
  return (
    <div className="border border-blue-300 rounded-2xl p-4 m-4 bg-blue-50 shadow-md">
      <h2 className="text-blue-700 font-semibold text-xl mb-2">{heading}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Exhibit;