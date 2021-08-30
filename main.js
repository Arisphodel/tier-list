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
        stars: 4,
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
    {
        name: "Researcher Carrot",
        stars: 3,
        world: 8.5,
        abyss: 8,
        "boss hunt": 8.5,
        raid: 8,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "fire",
        image: "c4051_s",
        quote: `Carrot studied tirelessly to pass the notorious Magic Research Department exam and became a professional researcher. 
        She though things would finally get better once she passed, but instead, she feels like she as gotten even busier.`,
        skin: false,
    },
    {
        name: "Aither",
        stars: 3,
        world: 7,
        abyss: 7.5,
        "boss hunt": 8,
        raid: 8,
        arena: 6,
        "guild wars": 6,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "ice",
        image: "c1018_s",
        quote: `Aither is the royal child of Ezera. 
        He is bright and energetic, but he does not like the people who treat him as a weak boy. He desires to make his name as a brave knight one day, just like his mother.`,
        skin: "Aither: Star of Ezera",
    },
    {
        name: "Falconer Kluri",
        stars: 3,
        world: 8,
        abyss: 8.5,
        "boss hunt": 7.5,
        raid: 8.5,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "earth",
        image: "c4003_s",
        quote: `Kluri started raising a falcon in hope of reducing her workload. 
        Although it ended up doing the exact opposite, she's carried on raising it for fun. 
        Perhaps it learned from its master, because it will never do anything too difficult unless Kluri orders it to.`,
        skin: false,
    },
    {
        name: "Magical Scholar Doris",
        stars: 3,
        world: 7,
        abyss: 9,
        "boss hunt": 8,
        raid: 7,
        arena: 8,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "light",
        image: "c4044_s",
        quote: `After resolving a problem in a Taranor laboratory, Doris became a magic scholar to continue her father's research. 
        Although she's completely buried in work, she's content now that she's found her life's purpose.`,
        skin: false,
    },
    {
        name: "Commander Lorina",
        stars: 3,
        world: 8,
        abyss: 8,
        "boss hunt": 8,
        raid: 9.5,
        arena: 6.5,
        "guild wars": 7,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "dark",
        image: "c4035_s",
        quote: `Lorina became an official knight after defeating a Wyvern with her spear. 
        She aims to lead the vanguard of the Order of the Shield one day, and acts without thinking based on what she believes is right.`,
        skin: false,
    },
    {
        name: "Challenger Dominiel",
        stars: 4,
        world: 9,
        abyss: 8,
        "boss hunt": 8,
        raid: 10,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "dark",
        image: "c2037_s",
        quote: `Fiercely proud and unreserved, Challenger Dominiel has little morality or sense of empathy. 
        While constantly causing trouble, she refuses to admit her faults.`,
        skin: false,
    },
    {
        name: "Armin",
        stars: 4,
        world: 7,
        abyss: 8,
        "boss hunt": 7,
        raid: 7,
        arena: 7.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "earth",
        image: "c1008_s",
        quote: `A particularly ticklish feline Suin, Armin is the valiant and cheerful Commander of the Longtail Company. 
        However, she is easily tempted, and quickly convinced to go along with the whims of her fellow mercenaries. 
        She loves to collect earrings but since her ears are so sensitive she's unable to actually wear them.`,
        skin: false,
    },
    {
        name: "Achates",
        stars: 4,
        world: 9.5,
        abyss: 9,
        "boss hunt": 9.5,
        raid: 9.5,
        arena: 7,
        "guild wars": 7,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "fire",
        image: "c1017_s",
        quote: `Second daughter of Rosvalt, an adviser to the former king of Ezera, Achates joined the Holy Order of the Blue Cross with the wish to save the world through Goddess's mercy. 
        She has little to do with her older sister, heir to the family name, and seems to be holding some discontent within her heart.`,
        skin: "Azure Sea Achates",
    },
    {
        name: "Alexa",
        stars: 3,
        world: 7,
        abyss: 6,
        "boss hunt": 9,
        raid: 7,
        arena: 6,
        "guild wars": 6,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "ice",
        image: "c3012_s",
        quote: `Despite her young age, Alexa has managed to become a formally appointed knight of the Order of the Sword trusted with all kinds of duties. 
        She greatly admires Iseria, who taught her how to use a sword.`,
        skin: false,
    },
    {
        name: "Angelic Montmorancy",
        stars: 3,
        world: 9,
        abyss: 9,
        "boss hunt": 9.5,
        raid: 9,
        arena: 8.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "ice",
        image: "c4042_s",
        quote: `Even after being formally appointed a nun, Montmorancy keeps on making mistakes. 
        However, instead of blaming herself and asking others for help, she preserver in her efforts to help others.`,
        skin: false,
    },
    {
        name: "Angelica",
        stars: 4,
        world: 8,
        abyss: 9.5,
        "boss hunt": 9.5,
        raid: 9,
        arena: 8,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "ice",
        image: "c1062_s",
        quote: `High Priestess of the Holy Order of the Blue Cross, Angelica is a healer of incredible divine power. 
        Despite her youthful appearance, she is the most senior member of the Conclave.`,
        skin: false,
    },
    {
        name: "Apocalypse Ravi",
        stars: 5,
        world: 7.5,
        abyss: 8.5,
        "boss hunt": 7,
        raid: 8,
        arena: 9,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "dark",
        image: "c2019_s",
        quote: `Originally born in a small village, she was chosen to become an incarnation of the god of war, before accidentally falling into another dimension while fighting an enemy general. 
        She has no memories of her life before she was deified.`,
        skin: false,
    },
    {
        name: "Archdemon's Shadow",
        stars: 5,
        world: 5,
        abyss: 5,
        "boss hunt": 5,
        raid: 5,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "dark",
        image: "m9194_s",
        quote: `The manifestation of chaos that's mixed with the power and souls of many beings. 
        Though it takes the shape of a girl who was once a part of it, its essence is not of life but rather pieces of memories and corrupt energy. 
        As it longs endlessly for new bodies, it now wanders to find a being that can contain it.`,
        skin: false,
    },
    {
        name: "Assassin Coli",
        stars: 4,
        world: 8,
        abyss: 8,
        "boss hunt": 7,
        raid: 9,
        arena: 9.5,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "dark",
        image: "c2033_s",
        quote: `A silent assassin in the shadows, it is said that anyone who sees the glint of Assassin Coli's blade in the moonlight will not live much longer.`,
        skin: false,
    },
    {
        name: "Baiken",
        stars: 5,
        world: 8,
        abyss: 8,
        "boss hunt": 9.5,
        raid: 7.5,
        arena: 8.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "earth",
        image: "c1093_s",
        quote: `She lost her family and friends in a Gear attack led by That Man. 
        From that point on she walked the path of Asura, obsessed with exacting revenge on That Man. 
        Tough and decisive, she boasts fighting power that can rival even that of a Gear.`,
        skin: false,
    },
    {
        name: "Bellona",
        stars: 5,
        world: 9,
        abyss: 9,
        "boss hunt": 9,
        raid: 8.5,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "earth",
        image: "c1071_s",
        quote: `Daughter of a noble Ezeran family, Bellona ran away from home, refusing to be forced into an arranged marriage. 
        After joining the Phantom CIC she appears to be much more satisfied with her new life, where she can fight as many strong enemies as she likes and hone her skills.`,
        skin: false,
    },
    {
        name: "Blood Blade Karin",
        stars: 4,
        world: 9.5,
        abyss: 7,
        "boss hunt": 8.5,
        raid: 8,
        arena: 10,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "dark",
        image: "c2011_s",
        quote: `Karin is embroiled in an endless battle against the will of a cursed magical sword, compelled by its power to cause trouble. 
        Though aggressive and cold-hearted while possessed by the sword, she sometimes escapes from the control of it and shows an unexpected side.`,
        skin: false,
    },
    {
        name: "Bomb Model Kanna",
        stars: 5,
        world: 8,
        abyss: 6,
        "boss hunt": 8,
        raid: 7,
        arena: 7,
        "guild wars": 7.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "fire",
        image: "c1097_s",
        quote: `An Automatic Doll who specializes in flight and bombs. Where Kanna soars, chaos follows. 
        She's unhappy with Laika, who is just holding her back by saying that bombing should only be used as a last resort.`,
        skin: false,
    },
    {
        name: "Celestial Mercedes",
        stars: 4,
        world: 8,
        abyss: 7.5,
        "boss hunt": 9,
        raid: 8,
        arena: 9.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "dark",
        image: "c2005_s",
        quote: `A mysterious being from the stars, nobody knows where Celestial Mercedes came from, or what she has gone through. 
        She freely duplicates any Human or thing she pleases, and currently resides in the Farche Frontier in a cloned body of Mercedes.`,
        skin: false,
    },
    {
        name: "Celine",
        stars: 5,
        world: 8,
        abyss: 8,
        "boss hunt": 8,
        raid: 8,
        arena: 9.5,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "earth",
        image: "c1103_s",
        quote: `A swordswoman traveling the world to spread justice, and also the aunt and role model of Karin Fantaria. 
        Her exploits are still legendary within Reingar, where she was once a member of the Public Security Club for some time before she left to wander the world.`,
        skin: false,
    },
    {
        name: "Cerise",
        stars: 5,
        world: 7.5,
        abyss: 8,
        "boss hunt": 7.5,
        raid: 8,
        arena: 9.5,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "ice",
        image: "c1081_s",
        quote: `A young politician and administrator of Aakhen. 
        She opposes her conservative father, Furious, who governs with zero-tolerance policies, and tries to solve problems with reasonable solutions as she strives to reconcile Aakhen and Perland.`,
        skin: false,
    },
    {
        name: "Clarissa",
        stars: 4,
        world: 8,
        abyss: 7,
        "boss hunt": 8,
        raid: 7,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "ice",
        image: "c1028_s",
        quote: `A young nun of the Holy Order of the Blue Cross, Clarissa's purity made her a mascot of the church. 
        However, as soon as she set out on her pilgrimage, her true fighting nature began to reveal itself.`,
        skin: false,
    },
    {
        name: "Crescent Moon Rin",
        stars: 4,
        world: 8,
        abyss: 8,
        "boss hunt": 7,
        raid: 8,
        arena: 9,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "assassin",
        type: "dark",
        image: "c2054_s",
        quote: `A dancer at the Crescent Moon Theatre in Savara loved by many for her outstanding beauty, talent, and the mystery that surrounds her true identity. 
        Only a few, including her guardian, Basar, know she is Rin.`,
        skin: false,
    },
    {
        name: "Crimson Armin",
        stars: 4,
        world: 7.5,
        abyss: 9,
        "boss hunt": 8,
        raid: 9,
        arena: 9,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "light",
        image: "c2008_s",
        quote: `A destructive super cute mercenary, the nickname of Super Cute Guardian of the Red Flame fits Armin perfectly. 
        She assures that she will defend fiercely, indifferent of what she destroys while doing so.`,
        skin: false,
    },
    {
        name: "Designer Lilibet",
        stars: 5,
        world: 6,
        abyss: 7,
        "boss hunt": 6,
        raid: 6,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "dark",
        image: "c2095_s",
        quote: `A designer who learned how to sew when she was taken in by Straze as a girl. 
        After realizing that ever since he took hold of Fastus, Straze changed, she decides to look for a model to put a stop to his schemes.`,
        skin: false,
    },
    {
        name: "Destina",
        stars: 5,
        world: 7.5,
        abyss: 8.5,
        "boss hunt": 8.5,
        raid: 9,
        arena: 7.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "earth",
        image: "c2022_s",
        quote: `Nicknamed "the Beast of the Western Light," Destina is a master of light and metal who has physically manifested in the image of her deeply beloved Soul Weaver, Ruele.`,
        skin: "Destina: Spring Breeze",
    },
    {
        name: "Dizzy",
        stars: 5,
        world: 8,
        abyss: 10,
        "boss hunt": 8,
        raid: 8.5,
        arena: 8.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "ice",
        image: "c1094_s",
        quote: `A half-Gear who was born to a Human and a Gear. 
        After being attacked by Humans, she held a deep distrust towards them, but after meeting various people she resolved those feelings. 
        She loves humanity and nature and hates to fight, but will do so when necessary, making use of her wings, Necro and Undine.`,
        skin: false,
    },
    {
        name: "Dominiel",
        stars: 4,
        world: 7,
        abyss: 7,
        "boss hunt": 7,
        raid: 7,
        arena: 7.5,
        "guild wars": 7.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "ice",
        image: "c1037_s",
        quote: `Successor of a clan that has long served the Spirit Lord Nixied. 
        After incredible effort she finally succeeded in harnessing Nixied's power, but still lacks confidence in her abilities.`,
        skin: false,
    },
    {
        name: "Eda",
        stars: 5,
        world: 6,
        abyss: 6,
        "boss hunt": 5,
        raid: 6,
        arena: 8,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "ice",
        image: "c1111_s",
        quote: `A Half-Elf who made a name for herself as a high wizard in Lefundos long, long ago. 
        She disappeared without a trace after causing a massive explosion in a war.`,
        skin: false,
    },
    {
        name: "Elena",
        stars: 5,
        world: 7.5,
        abyss: 8,
        "boss hunt": 7,
        raid: 8,
        arena: 8.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "ice",
        image: "c1091_s",
        quote: `From a young age, her parents taught her the doctrine of the stars. 
        Despite her youth, she now leads the faithful of Constella with her unwavering devotion and strong connection to the Spirits.`,
        skin: "Elena: Starlit Melody",
    },
    {
        name: "Elphet Valentine",
        stars: 5,
        world: 7,
        abyss: 8,
        "boss hunt": 8,
        raid: 8.5,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "fire",
        image: "c1105_s",
        quote: `Elphelt is a warm hearted girl who loves nature and animals, and the type of person who would never ignores someone who is lonely or in pain. 
        Her optimistic personality makes her believe that nothing is impossible. 
        She is a daydreamer who often gets lost in her imagination and loves a romantic tale.`,
        skin: false,
    },
    {
        name: "Faithless Lidica",
        stars: 5,
        world: 7.5,
        abyss: 7,
        "boss hunt": 6.5,
        raid: 8,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "light",
        image: "c2046_s",
        quote: `After being taken into a cult at a young age and enduring a childhood of suffering, Faithless Lidica finally managed to escape and is now on the run. 
        Naturally, this experience has given her a skepticism towards religion and hatred of fanatics.`,
        skin: "Faithless Lidica: Victorious Knight",
    },
    {
        name: "Fighter Maya",
        stars: 4,
        world: 7,
        abyss: 7.5,
        "boss hunt": 7,
        raid: 8,
        arena: 8.5,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "light",
        image: "c2032_s",
        quote: `The second magic doll to be created in Reingar, modeled on Maya with incredible combat skills and a belligerent attitude. 
        She is the type to learn and grow from her experiences, but having been created only a short time ago, she tends to be childish and overly honest about her feelings. 
        She is fond of her sparring partner, Zerato.`,
        skin: false,
    },
    {
        name: "Flan",
        stars: 5,
        world: 7,
        abyss: 8,
        "boss hunt": 9,
        raid: 8,
        arena: 9.5,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "ice",
        image: "c1110_s",
        quote: `A practical negotiator, Flan is devoted to the development of the city she works for. 
        As she is a newer model, she is equipped with a variety of useful functions, but she lacks durability. 
        She adores Landy like a real big sister.`,
        skin: false,
    },
    {
        name: "Free Spirit Tieria",
        stars: 4,
        world: 8.5,
        abyss: 7.5,
        "boss hunt": 7,
        raid: 8,
        arena: 8,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "light",
        image: "c3026_s",
        quote: `A bounty hunter chasing criminals across Orbis. 
        She's as beautiful as a flower and loves to be complimented for her looks.`,
        skin: false,
    },
    {
        name: "Great Chief Khawana",
        stars: 4,
        world: 7,
        abyss: 6.5,
        "boss hunt": 8,
        raid: 7,
        arena: 5.5,
        "guild wars": 5.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "dark",
        image: "c2086_s",
        quote: `After being chosen by Malicus in the Great Chief Exam, Khawana has become the great chief. 
        She successfully unites all tribes into one unified Meldrec, but the land soon falls into civil war due to Inferno Khawazu. 
        Not once has she beaten Khawazu, and for that, she holds both great respect as well as a sense of inferiority toward him.`,
        skin: false,
    },
    {
        name: "Guilder Aither",
        stars: 4,
        world: 7,
        abyss: 7.5,
        "boss hunt": 8,
        raid: 7,
        arena: 7,
        "guild wars": 7,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "light",
        image: "c2018_s",
        quote: `An ever-cheerful traveler, Aither loves life on the road. 
        As he embarks on a journey to find his lost memories, he is often followed by small animals.`,
        skin: false,
    },
    {
        name: "Holiday Yufine",
        stars: 5,
        world: 8,
        abyss: 7.5,
        "boss hunt": 7,
        raid: 7,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "fire",
        image: "c5016_s",
        quote: `For her vacation, Yufine's visiting a resort with a special goal in mind: to try each and every dish she's never seen in Ezera!`,
        skin: false,
    },
    {
        name: "Ilynav",
        stars: 5,
        world: 7,
        abyss: 6.5,
        "boss hunt": 7,
        raid: 7,
        arena: 8.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "kight",
        type: "fire",
        image: "c1113_s",
        quote: `A Dragon Knight who became Wintenberg's queen after Cecilia. 
        Ilynav believes working with Dragons is a disgrace to those who were killed by their hand, and considers those who fear war and hope for peace to be cowards.`,
        skin: false,
    },
    {
        name: "Kiris",
        stars: 3,
        world: 5,
        abyss: 10,
        "boss hunt": 8,
        raid: 5,
        arena: 3,
        "guild wars": 3,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "earth",
        image: "c3063_s",
        quote: `An Elf of Dun Blyraia, Kiris left her home after losing her lover to the Archdemon War and joined the Sicar assassin organization. 
        She is often absent-minded, but as you get to know her you discover she possesses an acute sense.`,
        skin: false,
    },
    {
        name: "Kitty Clarissa",
        stars: 4,
        world: 8.5,
        abyss: 8.5,
        "boss hunt": 7.5,
        raid: 9,
        arena: 8.5,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "dark",
        image: "c2028_s",
        quote: `The Holy Order of the Blue Cross requested that Reingar find a way to calm Clarissa down. 
        Instead, the researchers focused on how cats can still be loved after wreaking havoc. 
        Then they turned her into a cat to eliminate everyone's complaints about her violence...`,
        skin: false,
    },
    {
        name: "Kizuna AI",
        stars: 4,
        world: 7,
        abyss: 7.5,
        "boss hunt": 8,
        raid: 7.5,
        arena: 7,
        "guild wars": 7,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "fire",
        image: "c1107_s",
        quote: `Originally a virtual broadcaster from Earth, Kizuna AI fell into a deep sleep inside of a disc when the planet was destroyed, until one day she found herself in the hands of Yuna, who rebooted her. 
        She hopes to continue learning more about Humans through her new broadcasts on Orbis.`,
        skin: false,
    },
    {
        name: "Landy",
        stars: 5,
        world: 8.5,
        abyss: 8.5,
        "boss hunt": 9,
        raid: 8,
        arena: 10,
        "guild wars": 10,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "earth",
        image: "c1109_s",
        quote: `A woman of principles who works hard to do what's best for her city. 
        As she is an older model, she lacks a few functions, but she has great durability. 
        She adores Flan like her own little sister.`,
        skin: false,
    },
    {
        name: "Lidica",
        stars: 5,
        world: 8,
        abyss: 9,
        "boss hunt": 9,
        raid: 8.5,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "fire",
        image: "c1046_s",
        quote: `Expelled from the Rose Apostles, she joined the Phantom CIC to investigate the Land of Death. 
        She wanted to defeat the Unknown and instill faith unto others. 
        However, her rough personality still causes problems within the Phantom CIC.`,
        skin: "Lidica: Bride of Roses",
    },
    {
        name: "Lilias",
        stars: 5,
        world: 7.5,
        abyss: 8.5,
        "boss hunt": 8.5,
        raid: 8.5,
        arena: 9.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "fire",
        image: "c1089_s",
        quote: `Trained from birth to be a citylord, Lilias is the descendant of the royal family of Perlutia, a kingdom once ruled the entire continent of Cidonia. 
        She is passionate about becoming the best leader possible for Perland and supports harmony with other cities, but behind all these lies a deeper ambition.`,
        skin: false,
    },
    {
        name: "Lilibet",
        stars: 5,
        world: 8,
        abyss: 7.5,
        "boss hunt": 8,
        raid: 7,
        arena: 8.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "earth",
        image: "c1095_s",
        quote: `Originally born into a tailor family on the planet Rekos, she was raised by mercenaries after losing her parents in a civil war, and became a wandering swordswoman. 
        Until she met Straze, the Black Knight, and her life changed forever.`,
        skin: false,
    },
    {
        name: "Little Queen Charlotte",
        stars: 5,
        world: 8,
        abyss: 8.5,
        "boss hunt": 8.5,
        raid: 8,
        arena: 9.5,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "light",
        image: "c2009_s",
        quote: `A young queen with is and full of kindness. She leads her people in mature, wise demeanor. 
        The people of Solayu previously had complaints about the Lady of La Mare, but their feelings are slowly changed by their lady's changed behavior.`,
        skin: false,
    },
    {
        name: "Luluca",
        stars: 5,
        world: 9,
        abyss: 9,
        "boss hunt": 9.5,
        raid: 9,
        arena: 8.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "ice",
        image: "c1082_s",
        quote: `An Alien girl who traveled across the universe seeking revenge against Straze for bringing ruin to her world. 
        She's determined to make Straze pay for what he has done to her friends and restore her homeworld`,
        skin: "Luluca: Lovely Patissiere Luluca",
    },
    {
        name: "Maid Chloe",
        stars: 5,
        world: 8,
        abyss: 8,
        "boss hunt": 8,
        raid: 8.5,
        arena: 9.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "light",
        image: "c2049_s",
        quote: `You could be the queen of our store!" --Enticed by such a suggestion, Chloe began working in a maid cafe, but with no idea what kind of work a maid is expected to do, she lacks a certain care for her customers.`,
        skin: false,
    },
    {
        name: "Mascot Hazel",
        stars: 3,
        world: 8.5,
        abyss: 9,
        "boss hunt": 9,
        raid: 8.5,
        arena: 7,
        "guild wars": 7,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "fire",
        image: "c4041_s",
        quote: `Hazel disguised herself to recruit more members for the student council. 
        Only a few know her true identity, and once she's finished with her business, she returns to her original appearance.`,
        skin: false,
    },
    {
        name: "Melissa",
        stars: 5,
        world: 8,
        abyss: 8,
        "boss hunt": 9,
        raid: 8.5,
        arena: 9,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "fire",
        image: "c1096_s",
        quote: `A Vampire who dreams of revenge after losing everything. 
        Originally the eldest daughter of a noble family, she fell in love with a Vampire she met at a ball and soon became a Vampire herself. After a long separation following an ambush, she was enraged to discover her love had betrayed her. 
        Though he had since died, that won't stop her exacting her revenge on his son.`,
        skin: false,
    },
    {
        name: "Mui",
        stars: 5,
        world: 7,
        abyss: 7,
        "boss hunt": 7.5,
        raid: 7,
        arena: 8.5,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "earth",
        image: "c1044_s",
        quote: `A former circus trainer talented at taming ferocious monsters. 
        Unsatisfied with the small world of circus and believing in her ability to tame anything, she quits and now dreams of a comfortable life as an object of worship.`,
        skin: false,
    },
    {
        name: "Operator Sigret",
        stars: 5,
        world: 7.5,
        abyss: 7.5,
        "boss hunt": 7.5,
        raid: 7.5,
        arena: 9,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "dark",
        image: "c2072_s",
        quote: `An Android created by the Homunculus rebel organization using forbidden Lost Technology. 
        Though she was created to destroy the world, in the process of seizing her from the enemies, Krau was registered in her system as an administrator, and as a result, Operator Sigret was assigned to Special Force Team 7. 
        At first she was merely a machine with no emotions, but as she embarks on more missions with Krau, she's beginning to develop her own personality.`,
        skin: false,
    },
    {
        name: "Politis",
        stars: 5,
        world: 7,
        abyss: 7,
        "boss hunt": 6.5,
        raid: 6,
        arena: 9.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "fire",
        image: "c1112_s",
        quote: `The last survivor of a planet that vanished at the hands of Fastus. 
        As an exceptional Automatic Doll maker, she is determined to ensure her civilization lives on in a city that lasts forever.`,
        skin: false,
    },
    {
        name: "Ravi",
        stars: 5,
        world: 8.5,
        abyss: 9,
        "boss hunt": 9,
        raid: 9,
        arena: 8,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "fire",
        image: "c1019_s",
        quote: `Ravi once was a quiet girl living in a countryside, until she fell into a victim of the Homunculus expirements and became a Wraith. 
        Since Ravi was made by the power of Tenebria, she strongly believes she is the chosen one.`,
        skin: false,
    },
    {
        name: "Roana",
        stars: 5,
        world: 9,
        abyss: 9.5,
        "boss hunt": 9.5,
        raid: 8.5,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "earth",
        image: "c1102_s",
        quote: `A shaman of Rekos and Luluca's friend. Born with the Vigilant Eye, she is able to perceive the true nature of other beings. 
        She visited Straze to confess her feelings for him, but in a tragic twist of fate, she was killed at his hand.`,
        skin: false,
    },
    {
        name: "Rose",
        stars: 4,
        world: 8,
        abyss: 8,
        "boss hunt": 8,
        raid: 8,
        arena: 9,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "ice",
        image: "c1003_s",
        quote: `A close aide of Cecilia's, Rose followed her all the way from Wintenberg. She loves to fight and has a good sense of humor. 
        Her belief is that the strongest warrior die with no regrets.`,
        skin: "Rose: Dark Angel Rose",
    },
    {
        name: "Ruele of Light",
        stars: 5,
        world: 0,
        abyss: 0,
        "boss hunt": 0,
        raid: 0,
        arena: 0,
        "guild wars": 0,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "light",
        image: "c1022_s",
        quote: `An Heir to the Sixth World, Ruele is revered for her kindness. 
        She is a Soul Weaver who gained the favor of the Lord of Light, Destina. 
        Her only hobby is telling fortunes with rabbit fortune cookies.`,
        skin: false,
    },
    {
        name: "Senya",
        stars: 5,
        world: 6,
        abyss: 7,
        "boss hunt": 7,
        raid: 7,
        arena: 8.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "earth",
        image: "c1106_s",
        quote: `Long ago, there was a little girl who lived in a small village in Wintenberg. 
        After losing everything to a Dragon's attack, she swore she would get vengeance. 
        Mort promised he would give her the power to achieve this, and under Mort's guidance, she learned how to kill Dragons.`,
        skin: false,
    },
    {
        name: "Shadow Rose",
        stars: 4,
        world: 7.5,
        abyss: 8,
        "boss hunt": 9.5,
        raid: 8,
        arena: 9,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "knight",
        type: "dark",
        image: "c2003_s",
        quote: `Ready and willing to follow Cecilia anywhere, Rose became a war machine after having her heart completely shattered. 
        She is fiercely persistent and obsessive.`,
        skin: false,
    },
    {
        name: "Shooting Star Achates",
        stars: 4,
        world: 7,
        abyss: 8.5,
        "boss hunt": 8,
        raid: 9,
        arena: 9.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "dark",
        image: "c2017_s",
        quote: `At best, a free spirit, at worst, an irresponsible hedonist. 
        Shooting Star Achates finds a life without stimulus meaningless, and is always on the lookout for trouble.`,
        skin: false,
    },
    {
        name: "Sigret",
        stars: 5,
        world: 8.5,
        abyss: 8,
        "boss hunt": 10,
        raid: 8.5,
        arena: 9,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "ice",
        image: "c1072_s",
        quote: `Head of the Homunculus Unit, Sigret is a close friend of Friedrich's. 
        She holds complicated feelings towards Mercedes, who resembles her past self.`,
        skin: false,
    },
    {
        name: "Silver Blade Aramintha",
        stars: 5,
        world: 9,
        abyss: 8.5,
        "boss hunt": 9,
        raid: 9,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "light",
        image: "c2048_s",
        quote: `A commander of Savara's legendary Silver Blade Company. 
        At first it started off as a small group of people who had nowhere to return to, then it became bigger and bigger in size due to Aramintha's great leadership.`,
        skin: false,
    },
    {
        name: "Sinful Angelica",
        stars: 4,
        world: 7,
        abyss: 7.5,
        "boss hunt": 7.5,
        raid: 7.5,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "dark",
        image: "c2062_s",
        quote: `Daughter of a high-ranking noble, she was inflicted with an incurable disease and left in the care of the Church of the Goddess to receive treatment. 
        However, as her condition only continued to worsen over time and her family eventually cut off support, she became little more than a burden. 
        Cursing her own fate and the false hope the Church gave her, she travelled to a place named in a forbidden book and met with a mysterious being. 
        She was then reborn anew, filled with hatred towards the world and the Church of the Goddess.`,
        skin: false,
    },
    {
        name: "Solitaria of Snow",
        stars: 5,
        world: 7,
        abyss: 7.5,
        "boss hunt": 7.5,
        raid: 7.5,
        arena: 9,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "light",
        image: "c2111_s",
        quote: `The owner of an ice castle in the Lone Tundra. 
        Her daydreaming first began as a way to relieve her loneliness and boredom, but over time, it took on a life of its own, and now she lives entirely in a fantasy world of her own design.`,
        skin: false,
    },
    {
        name: "Tamarinne",
        stars: 5,
        world: 10,
        abyss: 10,
        "boss hunt": 10,
        raid: 10,
        arena: 6,
        "guild wars": 6,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "soul weaver",
        type: "fire",
        image: "c1067_s",
        quote: `An idol that brings joy and cheer through her electrifying music. She has great magical talent and can harness magic with her voice. 
        She changes her appearance on stage with the Blooming Pendant and becomes more dynamic and lively.`,
        skin: "Tamarinne: Starlight Concert",
    },
    {
        name: "Tenebria",
        stars: 5,
        world: 8,
        abyss: 8,
        "boss hunt": 8.5,
        raid: 8,
        arena: 9.5,
        "guild wars": 9,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "fire",
        image: "c1050_s",
        quote: `An Acolyte who freely deals out all kinds of illusions, Tenebria is known as the Phantom Queen. 
        She bewilders her targets by overwhelming them with terrifying illusions or by taking on the appearance of others. 
        Though she may look playful, she is monstrously cruel.`,
        skin: "Tenebria: Phantom Schoolgirl",
    },
    {
        name: "Vivian",
        stars: 5,
        world: 9,
        abyss: 9,
        "boss hunt": 10,
        raid: 9,
        arena: 9,
        "guild wars": 8.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "mage",
        type: "earth",
        image: "c1088_s",
        quote: `Granddaughter of a reclusive magical scholar, Vivan is gifted with incredible magical ability. 
        As a leader of Witchaven, she maintains a delicate balance between bickering factions of sorcerers, but the growing numbers of Unknown and machinations of political enemies have her treading on thin ice.`,
        skin: false,
    },
    {
        name: "Wanderer Silk",
        stars: 4,
        world: 8,
        abyss: 8.5,
        "boss hunt": 7,
        raid: 8,
        arena: 8,
        "guild wars": 8,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "ranger",
        type: "light",
        image: "c2004_s",
        quote: `An Elf born on the outskirts of Dun Blyraia, the Eternal Forest. 
        Raised by the World Tree that pitied her, Silk is fiercely proud, but forever yearning for her people.`,
        skin: false,
    },
    {
        name: "Yufine",
        stars: 5,
        world: 8.5,
        abyss: 9,
        "boss hunt": 10,
        raid: 8.5,
        arena: 9.5,
        "guild wars": 9.5,
        overall: function() {
            return ((this.world + this.abyss + this["boss hunt"] + this.raid + this.arena + this['guild wars']) / 6).toFixed(1);
        },
        class: "warrior",
        type: "earth",
        image: "c1016_s",
        quote: `Originally a Dragon of Wintenberg, through certain events Yufine eventually found her way to Ritania. 
        Cheerful and curious, her excessive curiosity often led to accidents. 
        She loves shiny things so much that she tends to zone out while staring at them.`,
        skin: false,
    },
];

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