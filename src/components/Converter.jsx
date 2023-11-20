import React, { useState, useEffect } from "react";

const Converter = ({ isUnit, isCash }) => {
  const [unitScreen, setUnitScreen] = useState(false);
  const [cashScreen, setCashScreen] = useState(false);
  useEffect(() => {
    setUnitScreen(false);
    setCashScreen(false);
  }, []);

  const handleUnitScreen = () => {
    setUnitScreen(true);
    setCashScreen(false);
  };
  const handleCashScreen = () => {
    setCashScreen(true);
    setUnitScreen(false);
  };
  return (
    <main className=" h-[500px]">
      {!unitScreen && !cashScreen && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-7">
          <button className="btn btn-success" onClick={handleUnitScreen}>
            Kujua units →{" "}
          </button>
          <button className="btn btn-warning" onClick={handleCashScreen}>
            Kujua Pesa →{" "}
          </button>
        </div>
      )}
    </main>
  );
};

export default Converter;
