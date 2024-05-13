import { LightningElement, api } from 'lwc';
import createContact from '@salesforce/apex/ContactController.createContact';

export default class SummaryPage extends LightningElement {
    @api firstName;
    @api lastName;
    @api dateOfBirth;
    @api country;
    @api phoneNumber;

    handleSave() {
        console.log('Trying to save...'); // Ajouter un log pour indiquer que la sauvegarde est tentée

        const today = new Date();
        if (new Date(this.dateOfBirth) > today) {
            console.error('Date of birth cannot be in the future.'); // Ajouter un log pour les erreurs
            this.dispatchEvent(
                new CustomEvent('showerror', {
                    detail: 'La date de naissance ne peut pas être postérieure à la date actuelle.'
                })
            );
            return;
        }

        createContact({ 
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth,
            country: this.country,
            phoneNumber: this.phoneNumber
        })
        .then(result => {
            console.log('Contact created successfully:', result); // Ajouter un log pour le succès
            this.dispatchEvent(
                new CustomEvent('showsuccess', {
                    detail: 'Inscription enregistrée'
                })
            );
        })
        .catch(error => {
            console.error('Error creating contact:', error); // Ajouter un log pour les erreurs
            // Gérer les erreurs si nécessaire
        });
    }
}
