import { LightningElement,api,wire} from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber'
export default class LoadRecordWithoutOutputField extends LightningElement {
    //exposing record id
    @api recordId;
    fields=['CaseNumber','Status','Priority','Subject'];

   @wire(getRecord,{recordId: '$recordId',fields: fields}) caseVar;

    get caseNumber(){
        return getFieldValue(this.caseVar.data,'CaseNumber');

    }

    get caseStatus(){
        return getFieldValue(this.caseVar.data,'Status');

    }
    
}