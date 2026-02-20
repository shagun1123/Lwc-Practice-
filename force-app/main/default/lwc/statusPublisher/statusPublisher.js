import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService';
import STATUS_CHANNEL from '@salesforce/messageChannel/statusMessageChannel__c';
export default class StatusPublisher extends LightningElement {
    status='';
    statusChange(event){
        this.status=event.detail.value;
    }
    @wire(MessageContext)
    messageContext
    publishData(){
        const payload={
            status:this.status
        }
        publish(this.messageContext,STATUS_CHANNEL,payload);
    }
}