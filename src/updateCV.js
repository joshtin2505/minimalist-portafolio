import { fetchCV } from "./api.js"

var cvData

setInterval(async () => {
  const data = await fetchCV()
  cvData = data[0].cv_data
  console.log(cvData)
}, 5000)

console.log("updateCV.js loaded", cvData)
export const cv = () => cvData
