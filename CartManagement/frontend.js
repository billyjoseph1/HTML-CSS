try{
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        let contents = data;
        let contentDisplay = document.getElementById('contents');
        contents.forEach(content => {
            let contentDiv = document.createElement('div')
            contentDiv.classList.add('contents')
            contentDiv.innerHTML = `
                <img src="${content.imageUrl}" alt="${content.id}">
                <h4>${content.title}</h4>
                <p>${content.date}</p>
                <p>${content.location}</p>
                <h4>ksh.${content.price}</h4>
                <button>Buy Now</button>
            `
            contentDisplay.appendChild(contentDiv)
        });

    })
}catch(error) {
    console.log('Error:', error)
}