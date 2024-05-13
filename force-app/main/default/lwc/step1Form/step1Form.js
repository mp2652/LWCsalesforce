import { LightningElement, api } from 'lwc';

export default class Step1Form extends LightningElement {
    @api firstName;
    @api lastName;
    @api dateOfBirth;
    @api isInvalid = false;
    @api errorMessages = '';

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
        //this.validateFields();
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
       // this.validateFields();
    }

    handleDateOfBirthChange(event) {
        this.dateOfBirth = event.target.value;
        this.validateFields();
    }

    validateFields() {
        this.isInvalid = false;
        this.errorMessages = '';


        // Check if Date of Birth is not greater than today
        const today = new Date().toISOString().slice(0,10); // Get today's date as string in YYYY-MM-DD format
        if (this.dateOfBirth > today) {
            this.isInvalid = true;
            this.errorMessages += 'Date of Birth cannot be greater than today. ';
        }

        // Check if Date of Birth is in the correct format (YYYY-MM-DD)
        const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateFormatRegex.test(this.dateOfBirth)) {
            this.isInvalid = true;
            this.errorMessages += 'Date of Birth must be in the format YYYY-MM-DD. ';
        }

        // Set custom validity messages
        this.template.querySelectorAll('lightning-input').forEach(input => {
            if (!input.checkValidity()) {
                this.isInvalid = true;
               // input.setCustomValidity('Invalid');
                 input.reportValidity();
            } else {
                input.setCustomValidity('');
            }
        });
        
    }

    
}
