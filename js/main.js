const extensionsSection = document.getElementById('extensions-section')

let activeNav = 'all'

document.getElementById('all').classList.remove('nav-item')
document.getElementById('all').classList.add('active-nav')

//function to toggle active nav when the nav is pressed
function handleClick(target) {
    activeNav = target;
    while(extensionsSection.firstChild) {
        extensionsSection.removeChild(extensionsSection.firstChild)
    }
    console.log(activeNav)
    console.log(document.querySelector('html').getAttribute('data-theme'))
}

//function to add active nav class to the active nav dynamically after onclick
window.addEventListener('click', function () {
    if(activeNav == 'all') {
    document.getElementById('all').classList.remove('nav-item')
    document.getElementById('all').classList.add('active-nav')
    document.getElementById('active').classList.remove('active-nav') 
    document.getElementById('active').classList.add('nav-item') 
    document.getElementById('inactive').classList.remove('active-nav')
    document.getElementById('inactive').classList.add('nav-item') 
}
    else if(activeNav == 'active') {
        document.getElementById('active').classList.remove('nav-item')
        document.getElementById('active').classList.add('active-nav')
        document.getElementById('all').classList.remove('active-nav')
        document.getElementById('all').classList.add('nav-item')
        document.getElementById('inactive').classList.remove('active-nav')
        document.getElementById('inactive').classList.add('nav-item')
    }
    else {
        document.getElementById('inactive').classList.remove('nav-item')
        document.getElementById('inactive').classList.add('active-nav')
        document.getElementById('active').classList.remove('active-nav')
        document.getElementById('active').classList.add('nav-item')
        document.getElementById('all').classList.remove('active-nav')
        document.getElementById('all').classList.add('nav-item')
    }
})

//function to get all extensions data
async function getAllExtensions () {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
        if(activeNav == 'all') {
            data.forEach(extension => {
            const card = document.createElement('div')
            card.ariaLabel = 'a card contains extension details'
            const logo = document.createElement('img')
            logo.src = extension.logo
            logo.ariaLabel = 'extension logo'
            const name = document.createElement('span')
            name.innerHTML = extension.name
            name.ariaLabel = 'extension name'
            name.classList.add('name')
            const description = document.createElement('div')
            description.innerHTML = extension.description
            description.ariaLabel = 'extension description'
            description.classList.add('description')
            const removeBtn = document.createElement('button')
            removeBtn.innerText = 'Remove'
            removeBtn.ariaLabel = 'Button to remove the extension'
            removeBtn.classList.add('remove-btn')
            
            const toggleBtnHolder = document.createElement('label')
            toggleBtnHolder.classList.add('toggle-btn-holder')
            toggleBtnHolder.ariaLabel = 'a shape that holds the button toggler to toggle extension status'
            const toggleBtn = document.createElement('input')
            toggleBtn.ariaLabel = 'a toggle button to change extension status when clicked'
            toggleBtn.setAttribute('type', 'checkbox')
            toggleBtn.classList.add('toggle-btn')
            const toggleBtnCircle = document.createElement('span')
            toggleBtnCircle.classList.add('toggle-btn-circle')
            
            if(extension.isActive == true) {
               toggleBtnHolder.classList.remove('toggle-btn-holder')
               toggleBtnHolder.classList.add('active-toggle-btn-holder')
               toggleBtnCircle.style.left = '19px'
            }

            toggleBtnHolder.append(toggleBtn, toggleBtnCircle)

            const logoDiv = document.createElement('div')
            logoDiv.classList.add('logo-div')
            logoDiv.appendChild(logo)
            const contentDiv = document.createElement('div')
            contentDiv.classList.add('content-div')
            contentDiv.append(name, description)

            const div1 = document.createElement('div')
            div1.classList.add('div1')
            div1.append(logoDiv, contentDiv)

            const div2 = document.createElement('div')
            div2.classList.add('div2')
            div2.append(removeBtn, toggleBtnHolder)

            card.append(div1, div2)
            card.classList.add('card')
            extensionsSection.appendChild(card)
        })}
    }

    catch (error) {
        console.log('Failed to fetch all extensions')
    }    
}

//function to get active extensions
async function getActiveExtensions () {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
        if(activeNav == 'active') {
            data.forEach(extension => {
                if(extension.isActive == true) {
                    const card = document.createElement('div')
            card.ariaLabel = 'a card contains extension details'
            const logo = document.createElement('img')
            logo.src = extension.logo
            logo.ariaLabel = 'extension logo'
            const name = document.createElement('span')
            name.innerHTML = extension.name
            name.ariaLabel = 'extension name'
            name.classList.add('name')
            const description = document.createElement('div')
            description.innerHTML = extension.description
            description.ariaLabel = 'extension description'
            description.classList.add('description')
            const removeBtn = document.createElement('button')
            removeBtn.innerText = 'Remove'
            removeBtn.ariaLabel = 'Button to remove the extension'
            removeBtn.classList.add('remove-btn')
            
            const toggleBtnHolder = document.createElement('label')
            toggleBtnHolder.classList.add('toggle-btn-holder')
            toggleBtnHolder.ariaLabel = 'a shape that holds the button toggler to toggle extension status'
            const toggleBtn = document.createElement('input')
            toggleBtn.ariaLabel = 'a toggle button to change extension status when clicked'
            toggleBtn.setAttribute('type', 'checkbox')
            toggleBtn.classList.add('toggle-btn')
            const toggleBtnCircle = document.createElement('span')
            toggleBtnCircle.classList.add('toggle-btn-circle')
            toggleBtnHolder.classList.add('active-toggle-btn-holder')
            toggleBtnCircle.style.left = '19px'

            toggleBtnHolder.append(toggleBtn, toggleBtnCircle)

            const logoDiv = document.createElement('div')
            logoDiv.classList.add('logo-div')
            logoDiv.appendChild(logo)
            const contentDiv = document.createElement('div')
            contentDiv.classList.add('content-div')
            contentDiv.append(name, description)

            const div1 = document.createElement('div')
            div1.classList.add('div1')
            div1.append(logoDiv, contentDiv)

            const div2 = document.createElement('div')
            div2.classList.add('div2')
            div2.append(removeBtn, toggleBtnHolder)

            card.append(div1, div2)
            card.classList.add('card')
            extensionsSection.appendChild(card)
                }
            })
        }
    }

    catch (error) {
        console.log('Failed to fetch active extensions')
    }    
}

//function to get inactive extensions
async function getInactiveExtensions () {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
        if(activeNav == 'inactive') {
            data.forEach(extension => {
                if(extension.isActive == false) {
                    const card = document.createElement('div')
            card.ariaLabel = 'a card contains extension details'
            const logo = document.createElement('img')
            logo.src = extension.logo
            logo.ariaLabel = 'extension logo'
            const name = document.createElement('span')
            name.innerHTML = extension.name
            name.ariaLabel = 'extension name'
            name.classList.add('name')
            const description = document.createElement('div')
            description.innerHTML = extension.description
            description.ariaLabel = 'extension description'
            description.classList.add('description')
            const removeBtn = document.createElement('button')
            removeBtn.innerText = 'Remove'
            removeBtn.ariaLabel = 'Button to remove the extension'
            removeBtn.classList.add('remove-btn')
            
            const toggleBtnHolder = document.createElement('label')
            toggleBtnHolder.classList.add('toggle-btn-holder')
            toggleBtnHolder.ariaLabel = 'a shape that holds the button toggler to toggle extension status'
            const toggleBtn = document.createElement('input')
            toggleBtn.ariaLabel = 'a toggle button to change extension status when clicked'
            toggleBtn.setAttribute('type', 'checkbox')
            toggleBtn.classList.add('toggle-btn')
            const toggleBtnCircle = document.createElement('span')
            toggleBtnCircle.classList.add('toggle-btn-circle')
    
            toggleBtnHolder.append(toggleBtn, toggleBtnCircle)

            const logoDiv = document.createElement('div')
            logoDiv.classList.add('logo-div')
            logoDiv.appendChild(logo)
            const contentDiv = document.createElement('div')
            contentDiv.classList.add('content-div')
            contentDiv.append(name, description)

            const div1 = document.createElement('div')
            div1.classList.add('div1')
            div1.append(logoDiv, contentDiv)

            const div2 = document.createElement('div')
            div2.classList.add('div2')
            div2.append(removeBtn, toggleBtnHolder)

            card.append(div1, div2)
            card.classList.add('card')
            extensionsSection.appendChild(card)
                }
            })
        }
    }

    catch (error) {
        console.log('Failed to fetch inactive extensions')
    }    
}

console.log(document.getElementById('theme-toggler').src)

//function to toggle themes
const themeToggleButton = document.getElementById('theme-toggler')

themeToggleButton.addEventListener('click', () => {
    if(document.querySelector('.sun-icon').id == 'sun-icon') {
        document.getElementById('logo').src = './assets/images/logo.svg'
        document.getElementById('theme-toggler').src = './assets/images/icon-moon.svg'
        document.querySelector('html').setAttribute('data-theme', 'light')
        document.getElementById('sun-icon').setAttribute('id', 'moon-icon')
        console.log(document.querySelector('icon'))
    }
    else {
        document.querySelector('.sun-icon').id = 'sun-icon'
        document.getElementById('theme-toggler').src = './assets/images/icon-sun.svg'
        document.getElementById('logo').src = './assets/images/logo2.png'
        document.querySelector('html').setAttribute('data-theme', 'dark')
        
    }
}) 

/*function to retreive all extensions when page refresh
&& reset the active theme from localstorage */
window.onload= function() {
    document.getElementById('loading-status').style.display = 'none'
    document.getElementById('theme-toggler').src = './assets/images/icon-sun.svg'
    document.getElementById('logo').src = './assets/images/logo2.png'
    getAllExtensions();
}





