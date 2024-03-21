const  buttonEl = document.getElementById('btn')

buttonEl.addEventListener('click',(e)=>{
     e.preventDefault()
     alert('welcome to shetkari mitra your end destination to get end to end knowledge  about morden agriculture')
     let div = document.createElement('div')
     div.innerHTML = 'welcome to shetkari mitra your end destination to get end to end knowledge  about morden agriculturewelcome to shetkari mitra your end destination to get end to end knowledge  about morden agriculture'
     document.getElementsByTagName('body').append(div)
})