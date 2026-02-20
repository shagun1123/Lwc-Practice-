import { LightningElement } from 'lwc';

export default class LifeCycleComp extends LightningElement {
    userName='vishakha';
    handleNameChange(){
        this.userName='Yuti';
    }
    constructor(){
        super();
        console.log('Child Constructor is called!');

    }
    connectedCallback(){
        console.log('Child Connected Callback is called');
    }
    renderedCallback(){
        console.log('Child Rendered Callback called');

    }
    disconnectedCallback(){
        console.log('Child disconnected callback is called');
    }
    errorCallback(){
        console.log('Error callback');
    }
}