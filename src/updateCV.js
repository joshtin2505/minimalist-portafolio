import { fetchCV } from "./api.js"

const data = await fetchCV()
export const cv = data[0].cv_data
console.log(cv)
