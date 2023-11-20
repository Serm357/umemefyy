export function changeToUnits(cash) {
  //1 TZS = (2.8 / 1000) electric units
  const inputCash = parseFloat(cash);
  const unitsResults = inputCash * (2.8 / 1000);
  return unitsResults;
}

export function changeToCash(units) {
  // 1 electric unit = (1000/2.8) TZS
  const inputUnits = parseFloat(units);
  const cashResult = inputUnits * (1000 / 2.8);
  return cashResult;
}
