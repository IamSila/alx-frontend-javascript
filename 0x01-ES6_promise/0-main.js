import getResponseFromApi from "./0-promises.js";

const response = getResponseFromApi()
console.log(response instanceof Promise);