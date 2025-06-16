function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}
async function fetchData() {
  let result = await getData();
  console.log(result);
}
fetchData();
