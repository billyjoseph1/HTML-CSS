//try is used to execute the code and catch any errors that may occur during execution
try{

    fetch('data.json')
    .then(response => response.json())//method to convert the response to a JavaScript object
    .then(data =>{
        let contents = data;//Assigns the parsed JSON data to a variable named contents

        let contentDisplay = document.getElementById('contents');//gets HTML id
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