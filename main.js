const btn = document.getElementById('refresh')
const dog = document.getElementById('dog')
let loading = false

function getdata() {
    loading = true
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        dog.innerHTML = `<img src=${data.message} alt="dog" />`
        loading = false
    })
    .catch((error) => {
        alert(error.message)
        loading = false
    })

    if(loading) dog.innerHTML = '<div>Loading...</div>'
}

getdata()

btn.addEventListener('click', () => {
    getdata()
})
