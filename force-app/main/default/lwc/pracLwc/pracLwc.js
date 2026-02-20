import { LightningElement } from 'lwc';

export default class PracLwc extends LightningElement {

    name='vishi';
    currentTime=new Date();
    SubscriberTime=9;
    totalwatchDuration=55;
   
    memberStatus;
    handleChange(event){
        
        this.memberStatus=event.target.value;
        console.log(event.detail);

    }
   displayNone=true;
   taskList=[
    {taskId:'1',taskname:'Project task',taskPriority:'high'},
    {taskId:'2',taskname:'Operational Task' ,taskPriority:'Normal'}
   ]

}