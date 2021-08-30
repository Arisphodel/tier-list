import { epic7Characters } from "./characters.js";

//Sort Characters array by name property alphabetical order
epic7Characters.sort((a, b) => (a.name > b.name) ? 1 : -1)

// —————— Side Bar ———————————————————————————————————————————————————————————————
const sideBarToggle = document.querySelector('.sidebar-btn');
const navLinksOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelector('.nav-links');

sideBarToggle.addEventListener('click', () => {
    navLinks.classList.add('nav-links-active');
    navLinksOverlay.classList.add('nav-overlay-active');
});

navLinksOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-overlay')) {
        navLinks.classList.remove('nav-links-active');
        navLinksOverlay.classList.remove('nav-overlay-active');
    }
});

// —————— Random Theme Generator ———————————————————————————————————————————————————————————————
const themeBtn = document.querySelector('.theme');
const rgbButton = document.querySelector('.rgb');
const rootCSS = document.querySelector(':root');
const numberHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let rgb;

rgbButton.addEventListener('click', () => {
    let style = getComputedStyle(rootCSS).getPropertyValue('--main-color');
    if (rgb) {
        clearInterval(rgb);
        setTimeout(() =>  {rootCSS.style.setProperty('--main-color', '#009879') }, 0);
        rgb = false; 
    } else {
        rgb = window.setInterval(changeSiteColor, 1000);
    }
});

themeBtn.addEventListener('click', () => {
    changeSiteColor();
});

function changeSiteColor() {
    const randomHexCode = generateRandomHex();
    rootCSS.style.setProperty('--main-color', randomHexCode);

    function generateRandomHex() {
        let hex = '#';
        for (let i = 0; i < 6; i++) {
            const randomNumber = Math.floor(Math.random() * numberHex.length);
            hex += numberHex[randomNumber];
        }
        return hex;
    }
}

// —————— Show Characters ———————————————————————————————————————————————————————————————
const tBody = document.querySelector('tbody');

function showCharacters(arr) {
    const noResults = document.querySelector('.no-results');
    if (arr.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    arr.forEach((character, index) => {
        const tr = document.createElement('tr');
        const tdStar = document.createElement('td');
        const tdImgContainer = document.createElement('td');
        const tdWorld = document.createElement('td');
        const tdAbyss = document.createElement('td');
        const tdBoss = document.createElement('td');
        const tdRaid = document.createElement('td');
        const tdArena = document.createElement('td');
        const tdGuild = document.createElement('td');
        const tdOverall = document.createElement('td');
        const tdBtnContainer = document.createElement('td');
        const tdImg = document.createElement('img');
        const tdBtn = document.createElement('btn');
        const paragraph = document.createElement('p');

        tdStar.textContent = character.stars + '⭐';
        paragraph.textContent = character.name;
        tdWorld.textContent = character.world
        tdAbyss.textContent = character.abyss;
        tdBoss.textContent = character["boss hunt"];
        tdRaid.textContent = character.raid;
        tdArena.textContent = character.arena;
        tdGuild.textContent = character["guild wars"];
        tdOverall.textContent = character.overall();
        tdBtn.textContent = 'More Info';

        tdImg.setAttribute('src', `portrait-img/${character.image}.png`);
        tdImg.dataset.id = index;

        tdImgContainer.classList.add('character-img-container');
        tdImg.classList.add('character-img');
        tdBtn.classList.add('moreinfo-btn');

        tdImgContainer.appendChild(tdImg);
        tdImgContainer.appendChild(paragraph);
        tdBtnContainer.appendChild(tdBtn);
        tr.appendChild(tdStar);
        tr.appendChild(tdImgContainer);
        tr.appendChild(tdWorld);
        tr.appendChild(tdAbyss);
        tr.appendChild(tdBoss);
        tr.appendChild(tdRaid);
        tr.appendChild(tdArena);
        tr.appendChild(tdGuild);
        tr.appendChild(tdOverall);
        tr.appendChild(tdBtnContainer);
        tBody.appendChild(tr);
    });
}

// —————— Full Image Modal ———————————————————————————————————————————————————————————————
const fullImgModal = document.querySelector('.full-img-modal');
const fullImg = document.querySelector('.full-img');
const fullImgSkin = document.querySelector('.full-img-skin');
const desc = document.querySelector('.desc');
const characterName = document.querySelector('.character-name');
const characterNameUnderline = document.querySelector('.character-name-underline');
const prevBtn = document.querySelector('.prev-btn');

function showCharacterImg(arr) {
   const characterImg = document.querySelectorAll('.character-img'); 
   characterImg.forEach(image => {
        image.addEventListener('click', () => {
            const imgSrc = image.getAttribute('src').slice(13, 19);
            const target = image.dataset.id;
            const nextBtn = document.querySelector('.next-btn');
            
            desc.textContent = arr[target].quote;
            characterName.textContent = arr[target].name;
            fullImg.setAttribute('src', '');
            fullImg.setAttribute('src', `full-img/${imgSrc}idle_normal.png`);
            fullImgModal.classList.add('open');
            fullImg.classList.add('open');
            characterName.classList.add('open');
            characterNameUnderline.classList.add('open');
            desc.classList.add('open');

            if (arr[target].skin) {
                nextBtn.classList.add('active');
            } else {
                nextBtn.classList.remove('active');
            }

            nextBtn.addEventListener('click', () => {
                fullImg.classList.remove('open');
                fullImgSkin.setAttribute('src', '');
                fullImgSkin.setAttribute('src', `full-img/skins/${imgSrc}s01_idle_normal.png`);
                //characterName.textContent = arr[target].skin;
                fullImgSkin.classList.add('open');
                nextBtn.classList.remove('active');
                prevBtn.classList.add('active');
            });

            prevBtn.addEventListener('click', () => {
                fullImgSkin.classList.remove('open');
                fullImg.classList.add('open');
                nextBtn.classList.add('active');
                prevBtn.classList.remove('active');
            });
        });
    });
}

fullImgModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('full-img-modal') 
    || e.target.classList.contains('full-img') 
    || e.target.classList.contains('desc')
    || e.target.classList.contains('full-img-skin')) {
        fullImgModal.classList.remove('open');
        fullImg.classList.remove('open');
        fullImgSkin.classList.remove('open');
        characterName.classList.remove('open');
        characterNameUnderline.classList.remove('open');
        desc.classList.remove('open');
        prevBtn.classList.remove('active');
    }
});

// —————— Filters ——————————————————————————————————————————————————————————————— 
let searchBarValue;
let currentStar = 'all';
let currentElement = 'all';
let currentClass = 'all';

function filterCharacters() {
    const filteredCharacters = epic7Characters.filter((letterCharacter) => {
        if (searchBarValue == undefined) {
            return letterCharacter;
        } else {
            return letterCharacter.name.toLowerCase().indexOf(searchBarValue) > -1;
        }
    }).filter((starCharacter) => { 
        if (currentStar === 'all') {
            return starCharacter.stars;
        } else {
            return starCharacter.stars == currentStar;
        }
    }).filter((elementCharacter) => {
        if (currentElement === 'all') {
            return elementCharacter.type;
        } else {
            return elementCharacter.type == currentElement;
        }
    }).filter((classCharacter) => {
        if (currentClass === 'all') {
            return classCharacter.class;
        } else {
            return classCharacter.class == currentClass;
        }
    });
    return filteredCharacters;
}

const searchBar = document.getElementById('searchBar');
const starsBtn = document.querySelectorAll('[data-star]');
const elementsBtn = document.querySelectorAll('[data-element]');
const classesBtn = document.querySelectorAll('[data-class]');
window.onload = searchBar.value = '';

searchBar.addEventListener('keyup', () => {
    searchBarValue = searchBar.value.toLowerCase();
    tBody.textContent = '';
    showCharacters(filterCharacters());
    showCharacterImg(filterCharacters());
});

starsBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentStar = button.dataset.star;
        starsBtn.forEach((button) => {
            button.classList.remove('active');
        });
        button.classList.add('active');
        tBody.textContent = '';
        showCharacters(filterCharacters());
        showCharacterImg(filterCharacters());
    });
});

elementsBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentElement = button.dataset.element;
        elementsBtn.forEach((button) => {
            button.classList.remove('active');
        });
        button.classList.add('active');
        tBody.textContent = '';
        showCharacters(filterCharacters());
        showCharacterImg(filterCharacters());
    });
});

classesBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentClass = button.dataset.class;
        classesBtn.forEach((button) => {
            button.classList.remove('active');
        });
        button.classList.add('active');
        tBody.textContent = '';
        showCharacters(filterCharacters());
        showCharacterImg(filterCharacters());
    });
});

const tableColumns = document.querySelectorAll('[data-columnname]');

function sortCharacters(prop, order) {
    if (order) {
        //Need either to remove overall method or to find a way to turn a string into a method
        if (prop == 'overall') {
            epic7Characters.sort((a, b) => (a.name > b.name) ? -1 : 1)
            .sort((a, b) => (a.overall() > b.overall()) ? -1 : 1);
            tBody.textContent = '';
            showCharacters(filterCharacters());
            showCharacterImg(filterCharacters());

        } else {
            epic7Characters.sort((a, b) => (a.name > b.name) ? -1 : 1)
            .sort((a, b) => (a[prop] > b[prop]) ? -1 : 1);
            tBody.textContent = '';
            showCharacters(filterCharacters());
            showCharacterImg(filterCharacters());
        }
    } else {
        if (prop == 'overall') {
            epic7Characters.sort((a, b) => (a.name > b.name) ? 1 : -1)
            .sort((a, b) => (a.overall() > b.overall()) ? 1 : -1);
            tBody.textContent = '';
            showCharacters(filterCharacters());
            showCharacterImg(filterCharacters());
        } else {
            epic7Characters.sort((a, b) => (a.name > b.name) ? 1 : -1)
            .sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
            tBody.textContent = '';
            showCharacters(filterCharacters());
            showCharacterImg(filterCharacters()); 
        }
    }
}

tableColumns.forEach(column => {
    column.addEventListener('click', (e) => {
        let sortName = column.dataset.columnname;
        const sortOrder = column.classList.contains('alphabeticalOrder') ? true : false;
        sortCharacters(sortName, sortOrder);
        tableColumns.forEach(column => {
            column.classList[e.target == column ? 'toggle' : 'remove']('alphabeticalOrder');
        }); 
    });
});

// —————— Populate Page ———————————————————————————————————————————————————————————————
showCharacters(epic7Characters);
showCharacterImg(epic7Characters);