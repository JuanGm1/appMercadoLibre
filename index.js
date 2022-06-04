const API_URL = 'https://api.mercadolibre.com'


const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');
        //console.log(data);
        const tpl = data.results.map((results) => `<li>${results.title}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load",onRequestHandler);
xhr.open('GET',`${API_URL}/sites/MLA/search?q=${'Motorola%20G6'}`,true);
xhr.send();