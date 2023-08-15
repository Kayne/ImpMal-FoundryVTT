const IMPMAL = {
    characteristics : {
        ws : "IMPMAL.WeaponSkill",
        bs : "IMPMAL.BallisticSkill",
        str : "IMPMAL.Strength",
        tgh : "IMPMAL.Toughness",
        ag : "IMPMAL.Agility",
        int : "IMPMAL.Intelligence",
        per : "IMPMAL.Perception",
        wil : "IMPMAL.Willpower",
        fel : "IMPMAL.Fellowship"
    },

    characteristicAbbrev : {
        ws : "IMPMAL.WS",
        bs : "IMPMAL.BS",
        str : "IMPMAL.Str",
        tgh : "IMPMAL.Tgh",
        ag : "IMPMAL.Ag",
        int : "IMPMAL.Int",
        per : "IMPMAL.Per",
        wil : "IMPMAL.Wil",
        fel : "IMPMAL.Fel"
    },

    skills : {
        athletics : "IMPMAL.Athletics",
        awareness : "IMPMAL.Awareness",
        dexterity : "IMPMAL.Dexterity",
        discipline : "IMPMAL.Discipline",
        fortitude : "IMPMAL.Fortitude",
        intuition : "IMPMAL.Intuition",
        linguistics : "IMPMAL.Linguistics",
        logic : "IMPMAL.Logic",
        lore : "IMPMAL.Lore",
        medicae : "IMPMAL.Medicae",
        melee : "IMPMAL.Melee",
        navigation : "IMPMAL.Navigation",
        presence : "IMPMAL.Presence",
        piloting : "IMPMAL.Piloting",
        psychic : "IMPMAL.PsychicMastery",
        ranged : "IMPMAL.Ranged",
        rapport : "IMPMAL.Rapport",
        reflexes : "IMPMAL.Reflexes",
        stealth : "IMPMAL.Stealth",
        tech : "IMPMAL.Tech"
    },

    defaultSkillCharacteristics : {
        athletics : "str",
        awareness : "per",
        dexterity : "ag",
        discipline : "wil",
        fortitude : "tgh",
        intuition : "per",
        linguistics : "int",
        logic : "int",
        lore : "int",
        medicae : "int",
        melee : "ws",
        navigation : "int",
        piloting : "ag",
        presence : "wil",
        psychic : "wil",
        ranged : "bs",
        rapport : "fel",
        reflexes : "ag",
        stealth : "ag",
        tech : "int"
    },

    attitudes : {
        "5" : "IMPMAL.Honoured",
        "4" : "IMPMAL.Prized",
        "3" : "IMPMAL.Trusted",
        "2" : "IMPMAL.Liked",
        "1" : "IMPMAL.Welcomed",
        "0" : "IMPMAL.Neutral",
        "-1" : "IMPMAL.Unwelcome",
        "-2" : "IMPMAL.Distrusted",
        "-3" : "IMPMAL.Despised",
        "-4" : "IMPMAL.Vilified",
        "-5" : "IMPMAL.Hunted",
    },

    attitudeTexts : {},

    sizes : {
        tiny : "IMPMAL.Tiny",
        small : "IMPMAL.Small",
        medium : "IMPMAL.Medium",
        large : "IMPMAL.Large",
        enormous : "IMPMAL.Enormous",
        monstrous : "IMPMAL.Monstrous"
    },


    speeds : {
        slow : "IMPMAL.Slow",
        normal : "IMPMAL.Normal",
        fast : "IMPMAL.Fast",
    },

    npcRoles : {
        troop : "IMPMAL.Troop",
        elite : "IMPMAL.Elite",
        leader : "IMPMAL.Leader"
    },


    hitLocations : {
        head : "IMPMAL.Head",
        leftArm : "IMPMAL.LeftArm",
        rightArm : "IMPMAL.RightArm",
        leftLeg : "IMPMAL.LeftLeg",
        rightLeg : "IMPMAL.RightLeg",
        body : "IMPMAL.Body"
    },

    availability : {
        "" : "-",
        common : "IMPMAL.Common",
        scarce : "IMPMAL.Scarce",
        rare : "IMPMAL.Rare",
        exotic : "IMPMAL.Exotic",
    },

    ranges : {
        short : "IMPMAL.Short",
        medium : "IMPMAL.Medium",
        long : "IMPMAL.Long",
        extreme : "IMPMAL.Extreme",
    },

    weaponTypes : {
        melee : "IMPMAL.Melee",
        ranged : "IMPMAL.Ranged"
    },

    meleeTypes : {
        mundane : "IMPMAL.Mundane",
        chain : "IMPMAL.Chain",
        force : "IMPMAL.Force",
        shock : "IMPMAL.Shock",
        power : "IMPMAL.Power",
    },

    meleeSpecs : {
        oneHanded : "IMPMAL.OneHanded",
        twoHanded : "IMPMAL.TwoHanded",
        brawling : "IMPMAL.Brawling",
    },

    rangedTypes : {
        bolt : "IMPMAL.Bolt",
        flame : "IMPMAL.Flame",
        las : "IMPMAL.Las",
        launcher : "IMPMAL.Launcher",
        melta : "IMPMAL.Melta",
        plasma : "IMPMAL.Plasma",
        solid : "IMPMAL.Solid",
        specialised : "IMPMAL.Specialised",
        grenadesExplosives : "IMPMAL.GrenadesExplosives",
    },

    rangedSpecs : {
        pistol : "IMPMAL.Pistol",
        longGun : "IMPMAL.LongGun",
        ordnance : "IMPMAL.Ordnance",
        thrown : "IMPMAL.Thrown",
        engineering : "IMPMAL.Engineering",
    },

    paymentGrade : {
        poor : "IMPMAL.Poor",
        standard : "IMPMAL.Standard",
        good : "IMPMAL.Good",
        excellent : "IMPMAL.Excellent"
    },

    paymentAmount : {
        poor : 50,
        standard : 100,
        good : 200,
        excellent : 600
    },

    difficulties : {
        veryEasy : {
            modifier : 60,
            name : "IMPMAL.VeryEasy"
        },
        easy : {
            modifier : 40,
            name : "IMPMAL.Easy"
        },
        routine : {
            modifier : 20,
            name : "IMPMAL.Routine"
        },
        challenging : {
            modifier : 0,
            name : "IMPMAL.Challenging"
        },
        difficult : {
            modifier : -10,
            name : "IMPMAL.Difficult"
        },
        hard: {
            modifier : -20,
            name : "IMPMAL.Hard"
        },
        veryHard : {
            modifier : -30,
            name : "IMPMAL.VeryHard"
        }
    },

    weaponArmourTraits : {
        blast : "IMPMAL.Blast",
        burst : "IMPMAL.Burst",
        close : "IMPMAL.Close",
        defensive : "IMPMAL.Defensive",
        flamer : "IMPMAL.Flamer",
        heavy : "IMPMAL.Heavy",
        ineffective : "IMPMAL.Ineffective",
        inflict : "IMPMAL.Inflict",
        loud : "IMPMAL.Loud",
        penetrating : "IMPMAL.Penetrating",
        rapidFire: "IMPMAL.RapidFire",
        reach : "IMPMAL.Reach",
        reliable : "IMPMAL.Reliable",
        rend : "IMPMAL.Rend",
        shield : "IMPMAL.Shield",
        spread : "IMPMAL.Spread",
        subtle : "IMPMAL.Subtle",
        supercharge : "IMPMAL.Supercharge",
        thrown : "IMPMAL.Thrown",
        twohanded : "IMPMAL.TwoHanded",
        unstable : "IMPMAL.Unstable"
    },

    itemTraits : {
        bulky : "IMPMAL.Bulky",
        shoddy : "IMPMAL.Shoddy",
        ugly : "IMPMAL.Ugly",
        unreliable : "IMPMAL.Unreliable",
        lightweight : "IMPMAL.Lightweight",
        mastercrafted : "IMPMAL.Mastercrafted",
        ornamental : "IMPMAL.Ornamental",
        durable : "IMPMAL.Durable"
    },

    traitDescriptions : {

    },

    traitHasValue : {
        heavy : true,
        inflict : true,
        penetrating : true,
        rapidFire : true,
        rend : true,
        shield : true,
        supercharge : true,
        thrown : true,
    },

    protectionTypes : {
        mundane : "IMPMAL.Mundane",
        flak : "IMPMAL.Flak",
        mesh : "IMPMAL.Mesh",
        carapace : "IMPMAL.Carapace",
        power : "IMPMAL.Power",
        shield : "IMPMAL.Shield"
    },

    modificationTypes : {
        combat : "IMPMAL.CombatAttachment",
        sight : "IMPMAL.SightAttachment", 
        support : "IMPMAL.SupportAttachment"
    },

    disciplines : {
        minor : "IMPMAL.Minor",
        biomancy : "IMPMAL.Biomancy",
        divination : "IMPMAL.Divination",
        pyromancy : "IMPMAL.Pyromancy",
        telekinesis : "IMPMAL.Telekinesis",
        telepathy : "IMPMAL.Telepathy"
    },

    powerRanges : {
        self : "IMPMAL.Self",
        immediate : "IMPMAL.Immediate",
        short : "IMPMAL.Short",
        medium : "IMPMAL.Medium",
        long : "IMPMAL.Long"
    },

    powerDurations : {
        instant : "IMPMAL.Instant",
        sustained : "IMPMAL.Sustained",
        special : "IMPMAL.Special",
        permanent : "IMPMAL.Permanent"
    },

    corruptionType : {
        mutation : "IMPMAL.Mutation",
        malignancy : "IMPMAL.Malignancy"
    },

    factions: {},

    tieredCondition: {
        ablaze: true,
        bleeding: true,
        blinded: false,
        deafened: false,
        fatigued: true,
        frightened: true,
        incapacitated: false,
        overburdened: false,
        poisoned: true,
        prone: false,
        restrained: true,
        stunned: true,
        unconscious: false,
        dead: false
    },

    effectApplications : {
        document : "IMPMAL.EffectApplicationDocument",
        damage : "IMPMAL.EffectApplicationDamage",
        target : "IMPMAL.EffectApplicationTarget",
        zone : "IMPMAL.EffectApplicationZone",
        activate : "IMPMAL.EffectApplicationActivate"
    },

    effectApplicationOptions : {
        documentType : "Actor or Item or Character (patron only)",
        test : "define test or link to item's test",
        filters : "regex or script",
        enableCondition : "",
        prompt : false,
        consume : false
    },

    
    scriptTriggers : {
        immediate : "IMPMAL.TriggerImmediate",
        prepareBaseData : "IMPMAL.TriggerPrepareBaseData",
        prePrepareDerivedData : "IMPMAL.TriggerPrePrepareDerivedData",
        postPrepareDerivedData : "IMPMAL.TriggerPostPrepareDerivedData",

        computeCharacteristics : "Compute Characteristics",
        computeEncumbrance : "Compute Encumbrance",
        computeCombat : "Compute Combat",
        computeWarpState : "Compute Warp State",
        prepareOwnedItems : "Prepare Owned Items",
        prepareOwnedData : "Prepare Owned Data",

        dialog : "IMPMAL.TriggerDialog",

        preRollTest : "IMPMAL.TriggerPreRollTest",
        preRollSkillTest : "IMPMAL.TriggerPreRollSkillTest",
        preRollWeaponTest : "IMPMAL.TriggerPreRollWeaponTest",
        preRollTraitTest : "IMPMAL.TriggerPreRollTraitTest",
        preRollPowerTest : "IMPMAL.TriggerPreRollPowerTest",

        rollTest : "IMPMAL.TriggerRollTest",
        rollSkillTest : "IMPMAL.TriggerRollSkillTest",
        rollWeaponTest : "IMPMAL.TriggerRollWeaponTest",
        rollTraitTest : "IMPMAL.TriggerRollTraitTest",
        rollPowerTest : "IMPMAL.TriggerRollPowerTest",

        // preAttackerEvaluateOpposed : "IMPMAL.TriggerPreAttackerEvaluateOpposed",
        // preAttackerComputeOpposedDamage : "IMPMAL.TriggerPreAttackerComputeOpposedDamage",
        // postAttackerEvaluateOpposed : "IMPMAL.TriggerAttackerEvaluateOpposed",

        // preDefenderEvaluateOpposed : "IMPMAL.TriggerPreDefenderEvaluateOpposed",
        // preDefenderComputeOpposedDamage : "IMPMAL.TriggerPreDefenderComputeOpposedDamage",
        // postDefenderEvaluateOpposed : "IMPMAL.TriggerDefenderEvaluateOpposed",

        preApplyDamage : "IMPMAL.TriggerPreApplyDamage",
        applyDamage : "IMPMAL.TriggerApplyDamage",
        preTakeDamage : "IMPMAL.TriggerPreTakeDamage",
        takeDamage : "IMPMAL.TriggerTakeDamage",

        updateDocument : "IMPMAL.TriggerUpdateDocument",
        deleteEffect : "IMPMAL.TriggerDeleteEffect",

        startRound : "IMPMAL.TriggerStartRound",
        endRound : "IMPMAL.TriggerEndRound",
        startTurn : "IMPMAL.TriggerStartTurn",
        endTurn : "IMPMAL.TriggerEndTurn"
    },

    scriptTriggerOptions : {
        addItems : "IMPMAL.TriggerOptionAddItems",
        targeter : "IMPMAL.TriggerOptionTargeter"
    },

    asyncTriggers: { 
        "immediate": true, 
        "preRollTest": true, 
        "preRollSkillTest": true, 
        "preRollWeaponTest": true, 
        "preRollTraitTest": true, 
        "preRollPowerTest": true, 
        "rollTest": true, 
        "rollSkillTest": true, 
        "rollWeaponTest": true, 
        "rollTraitTest": true, 
        "rollPowerTest": true, 
        "updateDocument": true, 
        "deleteEffect": true, 
        "dialog": true 
    },


    conditions : [
        {
            icon: "systems/impmal/assets/icons/conditions/ablaze-minor.svg",
            id: "ablaze",
            statuses : ["ablaze"],
            name: "IMPMAL.ConditionAblazeMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/ablaze-major.svg",
            id: "ablaze",
            statuses : ["ablaze"],
            name: "IMPMAL.ConditionAblazeMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/bleeding-minor.svg",
            id: "bleeding",
            statuses : ["bleeding"],
            name: "IMPMAL.ConditionBleedingMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/bleeding-major.svg",
            id: "bleeding",
            statuses : ["bleeding"],
            name: "IMPMAL.ConditionBleedingMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/blinded.svg",
            id: "blinded",
            statuses : ["blinded"],
            name: "IMPMAL.ConditionBlinded"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/deafened.svg",
            id: "deafened",
            statuses : ["deafened"],
            name: "IMPMAL.ConditionDeafened"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/fatigued-minor.svg",
            id: "fatigued",
            statuses : ["fatigued"],
            name: "IMPMAL.ConditionFatiguedMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/fatigued-major.svg",
            id: "fatigued",
            statuses : ["fatigued"],
            name: "IMPMAL.ConditionFatiguedMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/frightened-minor.svg",
            id: "frightened",
            statuses : ["frightened"],
            name: "IMPMAL.ConditionFrightenedMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/frightened-major.svg",
            id: "frightened",
            statuses : ["frightened"],
            name: "IMPMAL.ConditionFrightenedMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/incapacitated.svg",
            id: "incapacitated",
            statuses : ["incapacitated"],
            name: "IMPMAL.ConditionIncapacitated"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/overburdened.svg",
            id: "overburdened",
            statuses : ["overburdened"],
            name: "IMPMAL.ConditionOverburdened"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/poisoned-minor.svg",
            id: "poisoned",
            statuses : ["poisoned"],
            name: "IMPMAL.ConditionPoisonedMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/poisoned-major.svg",
            id: "poisoned",
            statuses : ["poisoned"],
            name: "IMPMAL.ConditionPoisonedMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/prone.svg",
            id: "prone",
            statuses : ["prone"],
            name: "IMPMAL.ConditionProne"
        },

        {
            icon: "systems/impmal/assets/icons/conditions/restrained-minor.svg",
            id: "restrained",
            statuses : ["restrained"],
            name: "IMPMAL.ConditionRestrainedMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/restrained-major.svg",
            id: "restrained",
            statuses : ["restrained"],
            name: "IMPMAL.ConditionRestrainedMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/stunned-minor.svg",
            id: "stunned",
            statuses : ["stunned"],
            name: "IMPMAL.ConditionStunnedMinor",
            flags : {
                impmal : {
                    type : "minor"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/stunned-major.svg",
            id: "stunned",
            statuses : ["stunned"],
            name: "IMPMAL.ConditionStunnedMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },

        {
            icon: "systems/impmal/assets/icons/conditions/unconscious-major.svg",
            id: "unconscious",
            statuses : ["unconscious"],
            name: "IMPMAL.ConditionUnconsciousMajor",
            flags : {
                impmal : {
                    type : "major"
                }
            }
        },
        {
            icon: "systems/impmal/assets/icons/conditions/dead.svg",
            id: "dead",
            statuses : ["dead"],
            name: "IMPMAL.Dead"
        },
    ],

    zoneEffects : {
        barrier : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.Barrier",
            id : "barrier",
            statuses : ["barrier"]
        },
        partialCover : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.PartialCover",
            id : "partialCover",
            statuses : ["partialCover"]
        },
        totalCover : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.TotalCover",
            id : "totalCover",
            statuses : ["totalCover"]
        },
        difficultTerrain : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.DifficultTerrain",
            id : "difficultTerrain",
            statuses : ["difficultTerrain"]
        },
        lightlyObscured : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.LightlyObscured",
            id : "lightlyObscured",
            statuses : ["lightlyObscured"]
        },
        heavilyObscured : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.HeavilyObscured",
            id : "heavilyObscured",
            statuses : ["heavilyObscured"]
        },
        minorHazard : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.MinorHazard",
            id : "minorHazard",
            statuses : ["minorHazard"]
        },
        majorHazard : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.MajorHazard",
            id : "majorHazard",
            statuses : ["majorHazard"]
        },
        deadlyHazard : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.DeadlyHazard",
            id : "deadlyHazard",
            statuses : ["deadlyHazard"]
        },
        poorlyLit : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.PoorlyLit",
            id : "poorlyLit",
            statuses : ["poorlyLit"]
        },
        dark : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.Dark",
            id : "dark",
            statuses : ["dark"]
        },
        warpTouched : {
            icon: "icons/svg/aura.svg",
            name : "IMPMAL.WarpTouched",
            id : "warpTouched",
            statuses : ["warpTouched"]
        },
    },
    
};


// Lists conditions without major/minor
const IM_CONFIG = {
    statusEffects : [
        {
            icon: "systems/impmal/assets/icons/conditions/ablaze.svg",
            id: "ablaze",
            statuses : ["ablaze"],
            name: "IMPMAL.ConditionAblaze"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/bleeding.svg",
            id: "bleeding",
            statuses : ["bleeding"],
            name: "IMPMAL.ConditionBleeding"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/blinded.svg",
            id: "blinded",
            statuses : ["blinded"],
            name: "IMPMAL.ConditionBlinded"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/deafened.svg",
            id: "deafened",
            statuses : ["deafened"],
            name: "IMPMAL.ConditionDeafened"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/fatigued.svg",
            id: "fatigued",
            statuses : ["fatigued"],
            name: "IMPMAL.ConditionFatigued"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/frightened.svg",
            id: "frightened",
            statuses : ["frightened"],
            name: "IMPMAL.ConditionFrightened"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/incapacitated.svg",
            id: "incapacitated",
            statuses : ["incapacitated"],
            name: "IMPMAL.ConditionIncapacitated"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/overburdened.svg",
            id: "overburdened",
            statuses : ["overburdened"],
            name: "IMPMAL.ConditionOverburdened"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/poisoned.svg",
            id: "poisoned",
            statuses : ["poisoned"],
            name: "IMPMAL.ConditionPoisoned"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/prone.svg",
            id: "prone",
            statuses : ["prone"],
            name: "IMPMAL.ConditionProne"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/restrained.svg",
            id: "restrained",
            statuses : ["restrained"],
            name: "IMPMAL.ConditionRestrained"
        },
        {
            icon: "systems/impmal/assets/icons/conditions/stunned.svg",
            id: "stunned",
            statuses : ["stunned"],
            name: "IMPMAL.ConditionStunned",
        },
        {
            icon: "systems/impmal/assets/icons/conditions/dead.svg",
            id: "dead",
            statuses : ["dead"],
            name: "IMPMAL.Dead",
        },
    ]
};

export {IMPMAL, IM_CONFIG};