import { BaseTestEvaluator } from "../base/base-evaluator";

export class AttackEvaluator extends BaseTestEvaluator 
{

    static standardHitLocationMap = {
        1 : "head",
        2 : "leftArm",
        3 : "rightArm",
        4 : "leftLeg",
        5 : "rightLeg",
        6 : "body",
        7 : "body",
        8 : "body",
        9 : "body",
        0 : "body",
    };

    /**
     * 
     * @param {Object} data Test data
     */
    computeOther(data) 
    {
        this.additionalDamage = data.additionalDamage;
        this.supercharge = data.supercharge;
        this.burst = data.burst;
        this.rapidFire = data.rapidFire;
        this.critModifier = data.critModifier;
        this.computeHitLocation(data);
        super.computeOther(data);
    }

    computeTagsAndText()
    {
        super.computeTagsAndText();
        if (this.hitLocation)
        {
            this.tags.hitLocation = (`${game.impmal.config.hitLocations[this.hitLocation]}`);
        }
        if (this.calledShot)
        {
            this.tags.calledShot = `${game.i18n.localize("IMPMAL.CalledShot")}`;
        }
        if (this.critical)
        {
            let critFormula = "1d10";
            if (this.critModifier)
            {
                critFormula += " + " + this.critModifier;
            }
            this.tags.critical = `<a class="table-roll critical" data-table="crit${game.impmal.config.generalizedHitLocations[this.hitLocation]}" data-formula="${critFormula}"><span class="inline-roll">${game.i18n.localize("IMPMAL.Critical")}</span></a>`;
        }
    }

    computeHitLocation(data)
    {
        // If predefined hit location, don't compute
        if (this.hitLocation)
        {
            return;
        }
        
        // The test data can specify "roll" or a hit location key
        // 
        if (data.hitLocation == "roll")
        {
            let ones = Number(this.roll.toString().split("").pop());
            this.hitLocation = this.constructor.standardHitLocationMap[ones]; 
        }
        else 
        {
            this.hitLocation = data.hitLocation;
            this.calledShot = true;
        }
    }
}