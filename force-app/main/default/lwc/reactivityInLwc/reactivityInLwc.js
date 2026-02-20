import { LightningElement } from 'lwc';

export default class ReactivityInLwc extends LightningElement {
    userAddress='Mumbai';

    updateAddress(){
        this.userAddress='pune';
        
    }
}