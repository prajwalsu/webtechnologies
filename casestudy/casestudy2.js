function voice(){
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event){
        console.log(event);
        document.getElementById("speechToText").value = event.results[0][0].transcript;
    }
    recognition.start(); 
  }
  
  const searchBtn = document.querySelector("#search-btn");
      const searchField = document.querySelector("#search-field");
  
  
      searchField.onchange = (e) => {
          const val = searchField.value
          searchBtn.href = "./Details.html?query=" + val;
      };
  
      document.onkeydown = e => {
          if (e.key !== "Enter") return;
  
          const val = searchField.value
          searchBtn.href = "./Details.html?query=" + val;
          searchBtn.click();
      };