let race = [
    {
        id: '1', name: 'dwarf', description: 'description', raceSkills: {
            strength: 0,
            dexterity: 0,
            constitution: 2,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        subRace: {
            mountain: {
                name: 'Горный',
                raceSkills: {
                    strength: 2,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0,
                },
            },
            hill: {
                name: 'Холмовый',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 1,
                    charisma: 0,
                },
            },
        }
    },

    {
        id: '2', name: 'elf', description: 'description', raceSkills: {
            strength: 0,
            dexterity: 2,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        subRace: {
            high: {
                name: 'Высший эльф',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 1,
                    wisdom: 0,
                    charisma: 0,
                },
            },
            forest: {
                name: 'Лесной эльф',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 1,
                    charisma: 0,
                },
            },
            drow: {
                name: 'Темный эльф',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 1,
                },
            },
        }
    },
    {
        id: '3', name: 'halfling', description: 'description', raceSkills: {
            strength: 0,
            dexterity: 2,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        subRace: {
            stocky: {
                name: 'Коренастый',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 1,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0,
                },
            },
            lightFooted: {
                name: 'Легконогий',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 1,
                },
            },
        }
    },
    {
        id: '4', name: 'human', description: 'description', raceSkills: {
            strength: 1,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1,
        },
        subRace: null
    },
    {
        id: '5', name: 'dragonborn', description: 'description', raceSkills: {
            strength: 2,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 1,
        },
        subRace: null
    },
    {
        id: '6', name: 'gnome', description: 'description', raceSkills: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 2,
            charisma: 0,
        },
        subRace: {
            forest: {
                name: 'Лесной',
                raceSkills: {
                    strength: 0,
                    dexterity: 1,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0,
                },
            },
            rock: {
                name: 'Скальный',
                raceSkills: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 1,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0,
                },
            },
        }
    },
    {
        id: '7', name: 'halfelf', description: 'description', raceSkills: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 2,
        },
        subRace: null
    },
    { id: '8', name: 'halforc', description: 'description', raceSkills: {
        strength: 2,
        dexterity: 0,
        constitution: 1,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    subRace: null
},
    { id: '9', name: 'tiefling', description: 'description', raceSkills: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 1,
        wisdom: 0,
        charisma: 2,
    },
    subRace: null
},
]

export const getAll = (req, res) => {
    res.status(200).json(race)
}