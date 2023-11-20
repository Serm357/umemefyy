import { useState } from "react";
import calcGif from "../assets/images/computer-2500_256.gif";
import { changeToUnits } from "../utils";
const UnitModal = () => {
  const [cash, setCash] = useState(5000);
  const [units, setUnits] = useState();
  const handleClick = () => {
    const unitsResult = changeToUnits(cash);
    setUnits(unitsResult.toFixed(4));
  };
  return (
    <dialog id="units_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <p className="py-4 text-end"> bonyeza ✕ Au Esc kufunga menyu</p>
        <div className="card w-full h-full glass">
          <figure>
            <img src={calcGif} alt="calcultor-gif" className="w-full h-52" />
          </figure>
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title  wrap">
              Kujua Units za Umeme Utazopata{" "}
            </h2>
            <p className="text-yellow-700">Ingiza Pesa (TZS) ↓</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered input-accent w-full max-w-xs shadow-lg"
              value={cash}
              onChange={(e) => {
                setCash(e.target.value);
              }}
            />
            <div className="card-actions justify-center">
              <button
                className="btn   bg-indigo-500 text-white"
                onClick={handleClick}
              >
                Kokotoa →
              </button>
            </div>
            <div className=" overflow-hidden rounded-md w-full h-20 glass shadow-lg text-gray-700 dark:text-gray-300  flex items-center justify-center mx-auto  sm:txtLg  txtSm">
              {(units && units) || "14"}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default UnitModal;
//todo swap fx
