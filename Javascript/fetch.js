// fetch return a promise
// fetch method takes url asa afirst argument
// second arguments will http methods

const fetchPosts = () => {
    fetch (url)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let postData = "";
            data.map((posts) => {
                postData += `${posts.title}`;
            });
            postData += "";
            const divElement = document.getElementById("users");
            divElement.innnerText = postData;

        })
        .catch((err) => {
            console.log(err);
        });
};

fetchPosts();