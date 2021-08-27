const epic7Characters = [
    {
        name: "Iseria",
        stars: 5,
        world: 9,
        abyss: 9,
        "boss hunt": 9.5,
        raid: 9.5,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "earth",
        image: "c1024_s",
        quote: `Second-in-Command of the Order of the Sword, Iseria is an Elf unable to return to her ancestral home of Dun Blyraia due to some reason. 
                Known as the Knight of White Flowers, she has a calm and solemn personality.`, 
        skin: "Iseria: Night of White Flowers",
    },
    {
        name: "Judge Kise",
        stars: 5,
        world: 9,
        abyss: 8,
        "boss hunt": 8,
        raid: 9,
        arena: 9.5,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "light",
        image: "c2006_s",
        quote: `An heir to the Sixth World, Kise is leader of the Nocturnes. 
        She fought every battle against the Archdemon alongside the Guardian Kromcruz. 
        Though she can be sluggish and sharp-tongued, she cares greatly for her fellow Heirs.`,
        skin: false,
    },
    {
        name: "Briar Witch Iseria",
        stars: 5,
        world: 8.5,
        abyss: 8,
        "boss hunt": 8,
        raid: 8,
        arena: 10,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "dark",
        image: "c2024_s",
        quote: `Once one of the noblest knights in the kingdom, she was on a hunt to find the Dark Witch when she was cursed by the witch, causing her to turn her blade toward her lover and friends. 
        The shock of her actions led her to lock herself in the witch's castle, surrounded by nothing but thornbushes and incapable of hurting anyone else.`,
        skin: false,
    },
    {
        name: "Kise",
        stars: 5,
        world: 8.5,
        abyss: 9.5,
        "boss hunt": 9,
        raid: 9,
        arena: 9,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "ice",
        image: "c1006_s",
        quote: `Leader of the Nocturnes. 
        Having been forced to part with her lover, she now has a tendency to obsess over anything she loves.`,
        skin: false,
    },
    {
        name: "Luna",
        stars: 5,
        world: 7,
        abyss: 8,
        "boss hunt": 9,
        raid: 8,
        arena: 7,
        "guild wars": 7.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "ice",
        image: "c1066_s",
        quote: `Luna is a half-Dragon, half-Human knight that has been loyal to Wintenberg since the time of Queen Francesca. 
        Only a few know of the true feelings hidden behind her smile.`,
        skin: false,
    },
    {
        name: "Cermia",
        stars: 5,
        world: 8,
        abyss: 7.5,
        "boss hunt": 10,
        raid: 8,
        arena: 8.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "fire",
        image: "c1079_s",
        quote: `A fiercely competitive but also horribly unlucky knight, she is very hot-headed and often gambles and loses everything. 
        Her impulsive nature forced her parents to give all of the inheritance to her sister Carrot, who provides her an allowance to live off of.`,
        skin: false,
    },
    {
        name: "Diene",
        stars: 5,
        world: 8,
        abyss: 9,
        "boss hunt": 7.5,
        raid: 9,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        }, 
        class: "soul weaver",
        type: "ice",
        image: "c1076_s",
        quote: `Diene, Saint of Ezera, received the Goddess's divine revelation and fearlessly led the world to victory against the Archdemon, even without the Heir of the Covenant. 
        Later, she became Ezera's queen.`,
        skin: false,
    },
    {
        name: "Serila",
        stars: 4,
        world: 8.5,
        abyss: 7.5,
        "boss hunt": 8.5,
        raid: 8,
        arena: 7.5,
        "guild wars": 7.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "fire",
        image: "c1040_s",
        quote: `With her glamorous beauty and enchanting smile, she's the quintessential witch. 
        She loves money, especially when using it to decorate herself with beautiful things. 
        She doesn't go anywhere without her magical weapon, Chatty.`,
        skin: false,
    },
    {
        name: "Seaside Bellona",
        stars: 5,
        world: 9,
        abyss: 9,
        "boss hunt": 9,
        raid: 9,
        arena: 9,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "ice",
        image: "c5071_s",
        quote: `Bellona came to provide Reingar PSC with any help they needed to assist visitors from Reingar. 
        Although she says she's here to watch over Sez, it seems that her true goal is to relax in the resort.`,
        skin: false,
    },
    {
        name: "Top Model Luluca",
        stars: 5,
        world: 8,
        abyss: 9,
        "boss hunt": 8,
        raid: 8,
        arena: 9.5,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "dark",
        image: "c2082_s",
        quote: `A carefree model fighting for her friends and the universe After taking the wandering designer Lilibet's advice, she became a model and now fights wearing a specialized suit. 
        Her goal is to defeat Straze, a corrupt designer who took control of Fastus, a tailor's knife that can even slice the universe, and his model, Roana.`, 
        skin: false,
    },
    {
        name: "Tempest Surin",
        stars: 5,
        world: 7,
        abyss: 7,
        "boss hunt": 7.5,
        raid: 7,
        arena: 9.5,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "light",
        image: "c2065_s",
        quote: `A girl from a far eastern empire. 
        As a warrior and daughter of a decorated general, she fought in several wars. 
        However, as the empire fell, she was forced to flee to Ritania. 
        With the help of a knight from Taranor she was able to adapt to this new life and now strives to pay back the favor.`,
        skin: "Tempest Surin: Autumnal Beauty",
    },
    {
        name: "Karin",
        stars: 4,
        world: 8,
        abyss: 7.5,
        "boss hunt": 9,
        raid: 8,
        arena: 8.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "ice",
        image: "c1011_s",
        quote: `Second Lieutenant in the Public Security Club of Reingar, Karin struggles to maintain order in the Magical Academy, a place brimming with dangerous creativity. 
        Many call her the consience and the real big boss of the Public Security Club.`,
        skin: "Karin: Shore Patrol",
    },
    {
        name: "Fallen Cecilia",
        stars: 5,
        world: 8,
        abyss: 8,
        "boss hunt": 7,
        raid: 8.5,
        arena: 10,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "dark",
        image: "c2002_s",
        quote: `Fallen Cecilia is chasing a mage who turned her family into dark magic stones, 
        dreaming of the day she can get her revenge and join her loved ones again.`,
        skin: "Fallen Cecilia: Snow White Warmth",
    },
    {
        name: "Specter Tenebria",
        stars: 5,
        world: 8.5,
        abyss: 9,
        "boss hunt": 9,
        raid: 9.5,
        arena: 9.5,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "dark",
        image: "c2050_s",
        quote: `While searching for a form that she liked, Tenebria enjoyed destroying people's minds. 
        Her greatest joy came from watching them die from the poison of her illusions.`,
        skin: "Specter Tenebria: Dark Tyrant",
    },
];

/* Sidebar */
const sideBarToggle = document.querySelector('.sidebar-btn');
const navLinksOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelector('.nav-links');

sideBarToggle.addEventListener('click', () => {
    navLinks.classList.add('nav-links-active');
    navLinksOverlay.classList.add('nav-overlay-active');
});

navLinksOverlay.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.classList.contains('nav-overlay')) {
        navLinks.classList.remove('nav-links-active');
        navLinksOverlay.classList.remove('nav-overlay-active');
    }
});


/* Random Theme Generator */
const themeBtn = document.querySelector('.theme');
const rgbButton = document.querySelector('.rgb');
const rootCSS = document.querySelector(':root');
const numberHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let rgb = 0;

rgbButton.addEventListener('click', () => {
    let style = getComputedStyle(rootCSS).getPropertyValue('--main-color');
    console.log(style);
    if (rgb) {
        clearInterval(rgb);
        setTimeout(() =>  {rootCSS.style.setProperty('--main-color', '#009879') }, 0);
        rgb = false; 
    } else {
        console.log('cu');
        rgb = window.setInterval(changeSiteColor, 1000);
    }
});

themeBtn.addEventListener('click', () => {
    changeSiteColor();
});

function changeSiteColor() {
    const randomHexCode = generateRandomHex();
    
    //console.log(randomHexCode);
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

/* Characters */
epic7Characters.forEach((character, index) => {
    const tBody = document.querySelector('tbody');
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
    tdBtn.dataset.id = index;

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

/* Image Modal */
const characterImg = document.querySelectorAll('.character-img');
const fullImgModal = document.querySelector('.full-img-modal');
const fullImg = document.querySelector('.full-img');
const fullImgSkin = document.querySelector('.full-img-skin');
const desc = document.querySelector('.desc');
const characterName = document.querySelector('.character-name');
const characterNameUnderline = document.querySelector('.character-name-underline');
const prevBtn = document.querySelector('.prev-btn');

characterImg.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.getAttribute('src').slice(13, 19);
        const target = image.dataset.id;
        const nextBtn = document.querySelector('.next-btn');
        
        desc.textContent = epic7Characters[target].quote;
        characterName.textContent = epic7Characters[target].name;
        fullImg.setAttribute('src', '');
        fullImg.setAttribute('src', `full-img/${imgSrc}idle_normal.png`);
        fullImgModal.classList.add('open');
        fullImg.classList.add('open');
        characterName.classList.add('open');
        characterNameUnderline.classList.add('open');
        desc.classList.add('open');
        console.log(imgSrc);

        if (epic7Characters[target].skin) {
            nextBtn.classList.add('active');
        } else {
            nextBtn.classList.remove('active');
        }

        nextBtn.addEventListener('click', () => {
            fullImg.classList.remove('open');
            fullImgSkin.setAttribute('src', '');
            fullImgSkin.setAttribute('src', `full-img/skins/${imgSrc}s01_idle_normal.png`);
            //characterName.textContent = epic7Characters[target].skin;
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

// More Info Modal 
const moreInfoBtn = document.querySelectorAll('.moreinfo-btn');
const moreInfoImgModal = document.querySelector('.more-info-img-modal');
const moreInfoImgContainer = document.querySelector('.more-info-img-container');

moreInfoBtn.forEach(button => {
    button.addEventListener('click', () => {
        const moreInfoImg = document.querySelector('.more-info-img');
        const gif = document.querySelector('#gif');
        const target = button.dataset.id;
        
        moreInfoImg.setAttribute('src', '');
        gif.setAttribute('src', '');
        moreInfoImg.setAttribute('src',`more-info-img/${epic7Characters[target].name}-more-info.png`);
        gif.setAttribute('src', `more-info-img/${epic7Characters[target].name}-more-info.gif`);

        moreInfoImg.addEventListener('error', () => {
            moreInfoImg.setAttribute('src', 'more-info-img/giphy.webp');
        });
      
        moreInfoImgContainer.classList.add('active');
        moreInfoImgModal.classList.add('active');
    });
});


moreInfoImgModal.addEventListener('click', () => {
    moreInfoImgContainer.classList.remove('active');
    moreInfoImgModal.classList.remove('active');
});