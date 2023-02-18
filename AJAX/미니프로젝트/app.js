const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const searchTerm = form.elements.q.value
    const config = {parmas : {q : searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, config)
    makeImgs(res.data)
    form.elements.q.value = '';
})


const makeImgs = (shows) =>{
    for(let result of shows){
        if(result.show.image){
        const img = document.createElement('IMG')
        img.src = result.show.image.medium;
        document.body.append(img)
        }
    }
}