export function storeTotal(totalAmount) {
  const totalAmountNumber = parseInt(totalAmount.replace(' ', ''));
  localStorage.setItem('ftpt:totalAmount', totalAmountNumber)
}
