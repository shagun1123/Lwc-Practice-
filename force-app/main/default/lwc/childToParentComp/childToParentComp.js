import { LightningElement } from 'lwc';

export default class ChildToParentComp extends LightningElement {
     showFinalVal;
    handleProductSelection(event){
        this.showFinalVal=event.detail
    }
}