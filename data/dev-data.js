module.exports = {
    merge: {
        "user": {
            "RQ9Zeb6ltiReWCZJukS0Y3iTIOK2": {
                libraries: {
                    "private1": true,
                    "as_admins": true,
                    "as_members": true,
                },
            },
            "EFQTGTQTYvYOMcC1UBxpccihBT63": {
                libraries: {
                    "private2": true,
                    "as_admins": true,
                    "as_members": true,
                },
            },
        },
    },
    overwrite: {
        "library": {
            "private1": {
                name: 'Private (coldino)',
                owner: 'RQ9Zeb6ltiReWCZJukS0Y3iTIOK2',
            },
            "private2": {
                name: 'Private (Plow)',
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
                levelsWild: { 0: 2, 1: 3, 2: 2, 3: 6, 4: 6, 5: 2, 6: 6, 7: 27 },
                levelsDom: { 0: 10, 1: 7, 2: 0, 3: 0, 4: 4, 5: 16, 6: 0, 7: 0 },
                statValues: { 0: 2105.1, 1: 1092, 2: 780, 3: 4160, 4: 1019.2, 5: 3.624, 6: 1.00, 7: 2227.5 },
                breedingValues: { 0: 980.3, 1: 455, 2: 780, 3: 4160, 4: 392, 5: 2.04, 6: 1.00, 7: 2227.5 },
                tamingEff: 0.901155984874277,
                wildLevel: 20,
                owner: 'Fale Tribe',
                tribe: 'Fale Tribe',
                id: '13ad317d-1888-0ec6-0000-000000000000',
                generation: 0,
                colors: { 0: 20, 1: 27, 2: 0, 3: 0, 4: 19, 5: 25 },
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
                levelsWild: { 0: 20, 1: 32, 2: 20, 3: 27, 4: 28, 5: 23, 6: 22, 7: 172 },
                levelsDom: { 0: 10, 1: 2, 2: 0, 3: 0, 4: 4, 5: 45, 6: 2, 7: 0 },
                statValues: { 0: 7516.8, 1: 2058, 2: 1950, 3: 9620, 4: 1419.6, 5: 11.631, 6: 1.06, 7: 9622.5 },
                breedingValues: { 0: 3500.3, 1: 1470, 2: 1950, 3: 9620, 4: 546, 5: 3.51, 6: 1.00, 7: 9622.5 },
                tamingEff: 0.9835590627610613,
                wildLevel: 116,
                level: 236,
                owner: 'Fale Tribe',
                tribe: 'Fale Tribe',
                id: '1b4720cb-3ca4-038a-0000-000000000000',
                generation: 0,
                colors: { 0: 20, 1: 26, 2: 0, 3: 0, 4: 31, 5: 21 },
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
                levelsWild: { 0: 35, 1: 34, 2: 33, 3: 28, 4: 25, 5: 35, 6: 0, 7: 190 },
                levelsDom: { 0: 6, 1: 17, 2: 0, 3: 0, 4: 8, 5: 28, 6: 0, 7: 0 },
                level: 250,
                breedingLevel: 191,
                statValues: { 0: 6736.7, 1: 3834, 2: 645, 3: 9880, 4: 4212, 5: 17.474, 6: 1.00, 7: 9672.5 },
                breedingValues: { 0: 2920.3, 1: 1080, 2: 645, 3: 7600, 4: 600, 5: 4.35, 6: 1.00, 7: 7440.5 },
                tamingEff: 1,
                imprintingBonus: 1,
                owner: 'Fale Tribe',
                tribe: 'Fale Tribe',
                id: '029499f3-e9b8-108f-0000-000000000000',
                isBred: true,
                father: '0eb64d7f-4e64-0bba-0000-000000000000',
                mother: '1cce83a0-32bb-1792-0000-000000000000',
                generation: 2,
                colors: { 0: 36, 1: 0, 2: 163, 3: 13, 4: 40, 5: 134 },
                mutations: 7,
                mutationsMaternal: 4,
                mutationsPaternal: 3,
                inputSource: 'asb_xml',
            },
        },
    },
};
