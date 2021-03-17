export function storeTotal(total) {
  console.log(total);
  localStorage.setItem('ftpt:totalAmount', total);
}
