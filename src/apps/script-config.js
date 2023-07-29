export default class ScriptConfig extends FormApplication
{
    static get defaultOptions() 
    {
        const options = super.defaultOptions;
        options.classes = options.classes.concat(["impmal", "script-config"]);
        options.title = game.i18n.localize("IMPMAL.ScriptConfig");
        options.resizable = true;
        options.width = 600;
        options.height = 400;
        options.template = "systems/impmal/templates/apps/script-config.hbs";
        return options;
    }

    constructor(...args)
    {
        super(...args);
    }

    async getData() 
    {
        let data = await super.getData();
        this.aceActive = game.modules.get("acelib")?.active;
        data.aceActive = this.aceActive;
        data.script = this._getScript();
        return data;
    }


    _getScript()
    {
        return getProperty(this.object, this.options.path);
    }

    _updateObject(ev, formData)
    {
        let script = this.aceActive ? this.editor.getValue() : formData.script; 
        return this.object.update({[this.options.path] : script});
    }

    activateListeners(html)
    {
        super.activateListeners(html);

        if (this.aceActive)
        {
            this.editor = ace.edit(html.find(".ace-editor")[0]);
            this.editor.setValue(this._getScript() || "");
            this.editor.setOptions(mergeObject(ace.userSettings, {mode : "ace/mode/js", printMargin : 0, theme : "ace/theme/solarized_dark", readOnly : !game.user.isGM}));
            this.editor.clearSelection();
        }

        // Prevent tab from changing focus, instead add a tab to the textarea
        html.find("textarea.no-ace").keydown(ev => 
        {
            if (ev.key == "Tab")
            {
                ev.preventDefault();
                let target = ev.target;
                var start = target.selectionStart;
                var end = target.selectionEnd;

                target.value = target.value.substring(0, start) + "\t" + target.value.substring(end);

                target.selectionStart = target.selectionEnd = start + 1;
            }
        });
    }

}