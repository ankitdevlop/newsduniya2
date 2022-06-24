console.log("thsi is news website")
// 51b657d64c4f4b7a9632a19f75e19e8c   api key
let newstoggal = document.getElementById('newsAccordion')

// grab the news container
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=51b657d64c4f4b7a9632a19f75e19e8c', true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
    let  newsHtml= "";
        articles.forEach(function (element, index) {



            // console.log(articles)
            let news =  `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;
        newsHtml+= news;
        
    });
    newsAccordion.innerHTML=newsHtml
    }
    else {
        console.log('some error found')
    }
}
xhr.send();
console.log("we are done with News")



// newstoggal.addEventListener('click')


