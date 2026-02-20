import { LightningElement,api } from 'lwc';

export default class ContainerCompLwc extends LightningElement {
    parentCalled=false;
    @api handleParentCalled(){
        this.parentCalled=true;
    }
}