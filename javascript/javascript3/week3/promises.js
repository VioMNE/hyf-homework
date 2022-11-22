

let gitRepos = [
    "https://api.github.com/search/repositories?q=user:benna100 ",
      "https://api.github.com/search/repositories?q=user:ReenuMary",
      "https://api.github.com/search/repositories?q=user:viedamayanti",
      "https://api.github.com/search/repositories?q=user:Hanouj",
  ];
  
  let promises = gitRepos.map((url) => {
    return fetch(url).then((response) => response.json());
  });
  
  Promise.all(promises)
    .then((urlData) => {
      const body = document.querySelector('body');
      urlData.forEach((element) => {
        let ol = document.createElement('ol');
        body.appendChild(ol);
        element.items.forEach((repo) => {
          let li = document.createElement('li');
          li.innerHTML = `<b>Repo name:</b>${repo.name}<br><b> Repo URL:</b>${repo.html_url} `;
          ol.appendChild(li);
        });
        let hr = document.createElement('hr');
        ol.appendChild(hr);
      });
    })
    .catch((error) => {
      console.log('Whoops something went wrong!', error);
    });