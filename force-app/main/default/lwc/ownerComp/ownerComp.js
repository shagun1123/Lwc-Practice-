import { LightningElement } from 'lwc';

export default class OwnerComp extends LightningElement {
    callChildMethod(){
     console.log('parent to call child method button clicked');
     
    }
}