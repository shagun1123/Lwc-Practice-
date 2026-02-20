import { LightningElement,api,track} from 'lwc';

export default class ChildLwc extends LightningElement {
    @api childname='rushali';
    @track myAge={
        name:'vishal',
        age:33
        
    }
     memberVal=0;
    handleUpdate(){
       this.myAge.age=56;
    }
     get memberDetail(){
        return this.memberVal;
    }

    set memberDetail(event){
         this.memberVal=event.target.value;
    }

}