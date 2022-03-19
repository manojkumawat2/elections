const { Validator }  = require('node-input-validator');

class FormValidation {
    constructor(post_input) {
        this.post_input = post_input;
        this.errors = new Array();
    }

    hasErrors() {
        return this.errors.length > 0;
    }

    errors() {
        return this.errors;
    }

    async validateLoginForm() {
        const valdiation = new Validator(this.post_input, {
            email: 'required|email',
            password: 'required'
        });

        const matched = await valdiation.check();

        if(!matched) {
            this.errors = valdiation.errors;
        }
    }
}

module.exports = FormValidation;