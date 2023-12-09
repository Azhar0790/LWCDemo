import { LightningElement,track } from 'lwc';
import getContacts from'@salesforce/apex/trialLWCComponent.getContacts';
export default class TrialComponent extends LightningElement {
    @track contacts;
    @track error;
    connectedCallback(){
        getContacts()
        .then(result => {
            this.contacts = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.contacts = undefined;
        });
   }

}