( async function(){
    // rendering categories 
    const categoryContainer = document.querySelector('.category_container')
    let categories =  await getdata()
    categories.map((category, i)=>{
     console.log(category)
    })

    let cont = document.querySelector('.category-container')

for (let i = 0; i <= categories.length; i++) {
    let div = document.createElement('div');
    div.classList.add('category');
    div.innerHTML = `
        <div class="left"><img src="${categories[i].Featured_image}" alt=""></div>
        <div class="right">
            <h1>${categories[i].name}</h1>
            <p>${categories[i].Featured_text}</p>
            <button>Read more</button>
        </div>
    `;
    cont.appendChild(div);
}



  
})()


async function getdata(){
    let response  = fetch('./data.json')
    let data = await (await response).json()
    return data.categories
}

// let cont = document.querySelector('.category-container')



