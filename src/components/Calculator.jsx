import CashModal from "../Modals/CashModal";
import UnitModal from "../Modals/UnitModal";

const Calculator = () => {
  return (
    <>
      {/* the modal is opened by using document.getElementById('ID').showModal() method */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="flex  flex-col md:flex-row items-center justify-center gap-5 md:gap-3 w-full h-[600px]  md:h-[400px] mt-7">
          <button
            className="btn btn-success l"
            onClick={() => document.getElementById("units_modal").showModal()}
          >
            Kujua units →{" "}
          </button>
          <button
            className="btn btn-warning l"
            onClick={() => document.getElementById("cash_modal").showModal()}
          >
            Kujua Pesa →{" "}
          </button>
        </div>
        <UnitModal />
        <CashModal />
      </section>
    </>
  );
};
export default Calculator;
