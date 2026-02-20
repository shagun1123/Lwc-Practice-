import { LightningElement } from 'lwc';

export default class ParentChildLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log('Constructor is called!');

    }
    connectedCallback(){
        console.log('Connected Callback is called');
    }
    renderedCallback(){
        console.log('Rendered Callback called');

    }
    disconnectedCallback(){
        console.log('disconnected callback is called');
    }
    errorCallback(){
        console.log('Error callback');
    }
}