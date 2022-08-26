function voice(){
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event){
        console.log(event);
        document.getElementById("speechToText").value = event.results[0][0].transcript;
    }
    recognition.start(); 
  }

  const query = window.location.href.split('=')[1];
    const cardsContainer = document.querySelector("#cards-container");
    const searchRes = document.querySelector("#search-res");
    searchRes.innerHTML += decodeURI(query);

    FetchData(query);

    function FetchData(search) {
        fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7${search}`)
            .then(x => x.json())
            .then(res => {
                let htmlContent = '';
                res.Search.forEach(x => {
                    htmlContent += GetHTML(x.Poster, x.Title, x.Year, x.Type);
                });
                cardsContainer.innerHTML = htmlContent;
            });
    }

    function GetHTML(imgSrc, title, year, type) {
        return `<div class="border px-4 py-2 m-3" style="cursor: pointer;">
        <img style="width: 150px;" src="${imgSrc}" alt="">
        <h2 class="text-wrap" style="width: 270px;">${title}</h2>
        <h5>Year ${year}</h5>
        <p>Type ${type}</p>
    </div>`
    }