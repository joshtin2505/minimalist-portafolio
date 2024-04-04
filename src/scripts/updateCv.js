const fs = require("fs").promises;
const path = require("path");
const { Octokit } = require("@octokit/rest");

// const cvPath = path.resolve(__dirname, './cv.json')
// ;(async () => {

//     const data = fs.readFile(cvPath, 'utf8')
//     const cv = JSON.parse(data)
// })()

// Configura tu token de acceso personal
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // hacer por GA
});
async function updateCV() {
  try {
    // Obtener la lista de repositorios del usuario
    const { data: repos } = await octokit.repos.listForAuthenticatedUser();
    // Encontrar el último commit de todos los repositorios
    const latestCommit = repos.reduce((latest, repo) => {
      const pushedAt = new Date(repo.pushed_at);
      return pushedAt > latest ? pushedAt : latest;
    }, new Date(0));

    // Actualizar el archivo de CV con la fecha del último commit
    // Ejemplo de escritura en un archivo
    await fs.writeFile(
      "git.json",
      `[${repos.map((repo) => JSON.stringify(repo, null, 2))}]`
    );
    fs.writeFile("cv.txt", `Último commit: ${latestCommit}`);
    // console.log('CV actualizado correctamente.');
  } catch (error) {
    // console.error('Error al actualizar el CV:', error.message);
  }
}
updateCV();
//
