import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader
          className="loader"
          color="CadetBlue"
          margin={30}
          size={30}
        />
      </div>
    </div>
  );
};

export default Loader;
