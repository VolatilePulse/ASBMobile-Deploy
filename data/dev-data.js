module.exports = {
    "user": {
        "RQ9Zeb6ltiReWCZJukS0Y3iTIOK2": {
            exists: true,
            libraries: [
                "private1",
                "as_admins",
                "as_members",
            ],
        },
        "EFQTGTQTYvYOMcC1UBxpccihBT63": {
            exists: true,
            libraries: [
                "private2",
                "as_admins",
                "as_members",
            ],
        },
    },
    "library": {
        "private1": {
            name: 'Private 1',
            owner: 'RQ9Zeb6ltiReWCZJukS0Y3iTIOK2',
        },
        "private2": {
            name: 'Private 2',
            owner: 'EFQTGTQTYvYOMcC1UBxpccihBT63',
        },
        "as_admins": {
            name: 'Admins',
            public: true,
            owner: 'fred',
            admins: {
                'RQ9Zeb6ltiReWCZJukS0Y3iTIOK2': true,
                'EFQTGTQTYvYOMcC1UBxpccihBT63': true,
            }
        },
        "as_members": {
            name: 'Members',
            public: true,
            owner: 'fred',
            members: {
                'RQ9Zeb6ltiReWCZJukS0Y3iTIOK2': true,
                'EFQTGTQTYvYOMcC1UBxpccihBT63': true,
            }
        },
        "as_pending": {
            name: 'Pending',
            owner: 'fred',
            pending: {
                'RQ9Zeb6ltiReWCZJukS0Y3iTIOK2': true,
                'EFQTGTQTYvYOMcC1UBxpccihBT63': true,
            }
        },
        "inaccessible": {
            name: 'Inaccessible',
            owner: "fred",
        }
    },
    "library/as_admins/server": {
        'tk0Q61cVVJlZez8bjXia': {
            name: 'Coldino SP',
        }
    },
    "library/as_admins/creature": {
        '13ad317d-1888-0ec6-0000-000000000000': {
            name: 'Wilma',
            species: 'Spino',
            speciesBP: '/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP.Spino_Character_BP',
            isFemale: true,
            status: 'Available',
            levelsWild: [2, 3, 2, 6, 6, 2, 6, 27],
            levelsDom: [10, 7, 0, 0, 4, 16, 0, 0],
            statValues: [2105.1, 1092, 780, 4160, 1019.2, 3.624, 1.00, 2227.5],
            breedingValues: [980.3, 455, 780, 4160, 392, 2.04, 1.00, 2227.5],
            tamingEff: 0.901155984874277,
            wildLevel: 20,
            owner: 'Fale Tribe',
            tribe: 'Fale Tribe',
            id: '13ad317d-1888-0ec6-0000-000000000000',
            generation: 0,
            colors: [20, 27, 0, 0, 19, 25],
            mutations: 0,
            mutationsMaternal: 0,
            mutationsPaternal: 0,
            tags: { 'user:Egg Farm': true, 'user:Not Deadly': true },
            isTamed: true,
            inputSource: 'asb_xml',
        },
        '1b4720cb-3ca4-038a-0000-000000000000': {
            species: 'Spino',
            speciesBP: '/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP.Spino_Character_BP',
            name: 'Fred',
            levelsWild: [20, 32, 20, 27, 28, 23, 22, 172],
            levelsDom: [10, 2, 0, 0, 4, 45, 2, 0],
            statValues: [7516.8, 2058, 1950, 9620, 1419.6, 11.631, 1.06, 9622.5],
            breedingValues: [3500.3, 1470, 1950, 9620, 546, 3.51, 1.00, 9622.5],
            tamingEff: 0.9835590627610613,
            wildLevel: 116,
            level: 236,
            owner: 'Fale Tribe',
            tribe: 'Fale Tribe',
            id: '1b4720cb-3ca4-038a-0000-000000000000',
            generation: 0,
            colors: [20, 26, 0, 0, 31, 21],
            mutations: 0,
            mutationsMaternal: 0,
            mutationsPaternal: 0,
            tags: { 'Deadly': true },
            isTamed: true,
            inputSource: 'asb_xml',
        },
        '029499f3-e9b8-108f-0000-000000000000': {
            species: 'Argentavis',
            speciesBP: '/Game/PrimalEarth/Dinos/Argentavis/Argent_Character_BP.Argent_Character_BP',
            name: 'Buddy',
            status: 'Available',
            levelsWild: [35, 34, 33, 28, 25, 35, 0, 190],
            levelsDom: [6, 17, 0, 0, 8, 28, 0, 0],
            level: 250,
            breedingLevel: 191,
            statValues: [6736.7, 3834, 645, 9880, 4212, 17.474, 1.00, 9672.5],
            breedingValues: [2920.3, 1080, 645, 7600, 600, 4.35, 1.00, 7440.5],
            tamingEff: 1,
            imprintingBonus: 1,
            owner: 'Fale Tribe',
            tribe: 'Fale Tribe',
            id: '029499f3-e9b8-108f-0000-000000000000',
            isBred: true,
            father: '0eb64d7f-4e64-0bba-0000-000000000000',
            mother: '1cce83a0-32bb-1792-0000-000000000000',
            generation: 2,
            colors: [36, 0, 163, 13, 40, 134],
            mutations: 7,
            mutationsMaternal: 4,
            mutationsPaternal: 3,
            inputSource: 'asb_xml',
        },
    }
}
