export function storeTotal() {
  localStorage.setItem('ftpt:totalAmount', localStorage.getItem('tcart').amount);
}
