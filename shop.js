function congrat(number, counter) {
  const count = number + Number(counter);
  console.log(count);
  localStorage.setItem("countClick", count);
  return count;
}
