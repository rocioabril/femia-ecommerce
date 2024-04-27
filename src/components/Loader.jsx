import { CgSpinner } from "react-icons/cg";

function Loader() {
  return (
    <div className="flex flex-1 items-center">
      <CgSpinner className="animate-spin" size="40px" color="#ffbd08" />
    </div>
  );
}

export default Loader;
