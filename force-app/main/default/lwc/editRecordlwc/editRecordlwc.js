import { LightningElement,api} from 'lwc';

const FIELDS=['CaseNumber','Reason','Type']
export default class EditRecordlwc extends LightningElement {
    @api recordId;
    fields=FIELDS;

}