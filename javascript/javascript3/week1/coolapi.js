

const api_url = 'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json';
async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}
getData();