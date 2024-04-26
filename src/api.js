async function fetchCV() {
  return await fetch("https://update-cv-api.onrender.com/api/cv/get-cv/2").then(
    (res) => res.json()
  )
}
export { fetchCV }
