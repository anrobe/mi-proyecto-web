        document.getElementById('btn-repo').addEventListener('click', function() {

            fetch('https://api.github.com/repos/anrobe/mi-proyecto-web')

                .then(response => response.json())

                .then(data => {

                    const repoInfo = document.getElementById('repo-info');

                    repoInfo.innerHTML = `

                        <p>Nombre del repositorio: ${data.name}</p>

                        <p>Descripción: ${data.description || 'Sin descripción'}</p>

                        <p>URL: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>

                    `;

                })

                .catch(error => {

                    console.error('Error:', error);

                });

        });