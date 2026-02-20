import { LightningElement,api} from 'lwc';

export default class CaseFormWithEvents extends LightningElement {
    objectApiName='Case';
    @api recordId;
    handleSubmit(event){
        console.log('form is submitted'+event.detail);
    }
    handleSuccess(event){
        console.log('form is successfully created')
    }

}