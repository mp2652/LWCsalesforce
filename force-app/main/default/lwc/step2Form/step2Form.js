import { LightningElement, api } from 'lwc';

export default class Step2Form extends LightningElement {
    @api country;
    @api phoneNumber;
    phoneError = false;

    countryOptions = [
        { label: 'USA', value: 'USA' },
        { label: 'Canada', value: 'Canada' },
        { label: 'France', value: 'France' },
        { label: 'Germany', value: 'Germany' },
        { label: 'United Kingdom', value: 'United Kingdom' },
        { label: 'Japan', value: 'Japan' },
        { label: 'Italy', value: 'Italy' },
        { label: 'Australia', value: 'Australia' },
        { label: 'Brazil', value: 'Brazil' },
        { label: 'China', value: 'China' },
        { label: 'India', value: 'India' },
        { label: 'Russia', value: 'Russia' },
        { label: 'South Africa', value: 'South Africa' },
        { label: 'Mexico', value: 'Mexico' },
        { label: 'Spain', value: 'Spain' },
        { label: 'Argentina', value: 'Argentina' },
        { label: 'Netherlands', value: 'Netherlands' },
        { label: 'Switzerland', value: 'Switzerland' },
        { label: 'Sweden', value: 'Sweden' },
        { label: 'Israel', value: 'Israel' }
    ];

    handleCountryChange(event) {
        this.country = event.detail.value;
    }

    handlePhoneNumberChange(event) {
        this.phoneNumber = event.target.value;
        this.validatePhoneNumber();
    }

    validatePhoneNumber() {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(this.phoneNumber)) {
            this.phoneError = true;
        } else {
            this.phoneError = false;
        }
    }
}
