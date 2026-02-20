import { LightningElement } from 'lwc';

export default class ChildTrigger extends LightningElement {
   selectedProduct;

    handleFiringEvent(){
      this.selectedProduct='Laptop';
      const event=new CustomEvent('sendProductInfo',{
        detail:this.selectedProduct
      });
      this.dispatchEvent(event);
    }
}