function createPrmiseAfter(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(resolve, resolveAfter * 1000);
  });
}

createPrmiseAfter(4).then(() => {
  console.log("I am called asynchronously");
});

function resolveFunctionAfterUsingAsync(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am called asynchronously");
    }, time * 1000);
  });
}

async function getData() {
  let data = await resolveFunctionAfterUsingAsync(3);
  console.log(data);
}

getData();
