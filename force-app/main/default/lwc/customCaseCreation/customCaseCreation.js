import { LightningElement,wire} from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import {getObjectInfo} from 'lightning/uiObjectApi'; 
import {getCases} from 'salesforce/apex/casec.getCases'
export default class CustomCaseCreation extends LightningElement {
    @wire(getCases)
    wiredcases({error,data}){
        if(data){
          this.caseList=data;
        }
        if(error){
          
        }
    }
}