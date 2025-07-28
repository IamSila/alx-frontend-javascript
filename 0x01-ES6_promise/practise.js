Promise.race([
  new Promise(res => setTimeout(() => res('First'), 1000)),
  new Promise(res => setTimeout(() => res('Second'), 200))
]).then(result => console.log(result));