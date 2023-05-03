import { DocumentListModel } from "../shared/list";
import { StandardItemModel } from "./standard";
let fields = foundry.data.fields;

export class OriginModel extends StandardItemModel 
{
    static defineSchema() 
    {
        let schema = super.defineSchema();
        schema.equipment = new fields.EmbeddedDataField(DocumentListModel);
        schema.characteristics = new fields.SchemaField({
            base : new fields.StringField(),
            choices : new fields.ArrayField(new fields.StringField())
        });
        return schema;
    }

    computeDerived()
    {
        this.equipment.findDocuments();
    }
}