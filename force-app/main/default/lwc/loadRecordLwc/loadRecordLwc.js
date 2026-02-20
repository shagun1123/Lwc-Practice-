import { LightningElement,api} from 'lwc';

export default class LoadRecordLwc extends LightningElement {
    @api recordId;
    objectApiName='Case';
    fields=['CaseNumber','Priority','Status'];

}