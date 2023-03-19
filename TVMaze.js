
const form = document.querySelector('#searchForm') 
form.addEventListener('submit', async function (e) {  //we use async function because there is promises below
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: {q:searchTerm, isFunny: 'colt'} };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config)  //this is the way to add parameters into API by Axios
    makeImages(res.data);
    form.elements.query.value="";
})

const makeImages = (shows) => {   //a separate function to display images on screen
    for (let result of shows) {
        const img = document.createElement('IMG')
        img.src = result.show.image.medium;
        document.body.append(img);
    }
}