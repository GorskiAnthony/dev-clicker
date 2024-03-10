function updateCount(number = 1) {
  const count = +number + Number(localStorage.getItem("countClick"));
  localStorage.setItem("countClick", String(count));
  return count;
}

function confirmDeleteAccount() {
  localStorage.clear();
  window.location.reload();
}
