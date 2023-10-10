let AdvancedSkills = [
    {
        name: 'Атлетика',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'strength'
    },
    {
        name: 'Акробатика',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'dexterity'
    },
    {
        name: 'Анализ',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Внимательность',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'wisdom'
    },
    {
        name: 'Выживание',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'wisdom'

    },
    {
        name: 'Выступление',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'charisma'

    },
    {
        name: 'Запугивание',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'charisma'


    },
    {
        name: 'История',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Магия',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Медицина',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'wisdom'

    },
    {
        name: 'Обман',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'charisma'


    },
    {
        name: 'Ловкость рук',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'dexterity'
    },
    {
        name: 'Природа',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Проницательность',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'wisdom'
    },
    {
        name: 'Религия',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Скрытность',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'dexterity'

    },
    {
        name: 'Убеждение',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'charisma'

    },
    {
        name: 'Уход за животными',
        checked: false,
        selected: false,
        skillCount: -1,
        mainSkill: 'wisdom'

    },

]

export const getAll = (req, res) => {
    res.status(200).json(AdvancedSkills)
}