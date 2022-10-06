import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ITask } from '../model/task';

@Component({
  selector: 'app-todo' ,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoForm !:FormGroup;
  tasks : ITask[]=[];
  inprogress:ITask[]=[];
  done: ITask []=[];
  updateIndex !:any;
  isEditEnabled:boolean=false;
  index:number=0;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({item : ['',Validators.required]
  })
  // var dataTodo = JSON.parse(localStorage.getItem('todoItems')!);
  // var dataInp = JSON.parse(localStorage.getItem('inpItems')!);
  // var dataDn = JSON.parse(localStorage.getItem('donItems')!);

  var data:any = localStorage.getItem('tasks')??null;
  var dataPro:any = localStorage.getItem('progress')??null;
  var dataDone:any = localStorage.getItem('done')??null;
  // console.log("data : ",data);
  // if(dataTodo!=null){
  //   this.tasks=dataTodo;
  // }
  // if(dataInp!=null){
  //   this.inprogress=dataInp;
  // }
  // if(dataDn!=null){
  //   this.done=dataDn;
  // }
  if(data!=null){
    this.tasks = JSON.parse(data);
  }
  if(dataPro!=null){
    this.inprogress = JSON.parse(dataPro);
  }
  if(dataDone!=null){
    this.done = JSON.parse(dataDone);
  }

}
  addTask(){
    this.tasks.push({
      description:this.todoForm.value.item,
      done:false
     });
     this.updateLocalStorage();
    // this.setToLocalStorage();
   
    this.todoForm.reset(); 
  }
//  setToLocalStorage(){
//   localStorage.setItem('todoItems',JSON.stringify(this.tasks));
//   localStorage.setItem('inpItems',JSON.stringify(this.inprogress));
//   localStorage.setItem('donItems',JSON.stringify(this.done));
//  }

 updateLocalStorage(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
    localStorage.setItem('progress',JSON.stringify(this.inprogress));
    localStorage.setItem('done',JSON.stringify(this.done));
  }
   
   
  onEdit(item:ITask, i: number){
    this.todoForm.controls['item'].setValue(item.description); 
    this.updateIndex = i;
    this.isEditEnabled=true;
  }
  updateTask(){
   this.tasks[this.updateIndex].description= this.todoForm.value.item; 
   this.tasks[this.updateIndex].done =false;
   this.todoForm.reset();
   this.updateIndex= undefined;
   this.isEditEnabled =false;
    this.updateLocalStorage();
  }

  deleteTask(i:number){
    this.tasks.splice(i, 1);
    this.updateLocalStorage();
  }
  deleteInProgressTask(i:number){
    this.inprogress.splice(i, 1);
    this.updateLocalStorage();
  }
  deleteDoneTask(i:number){
    this.done.splice(i, 1);
    this.updateLocalStorage();
  }


  drop(event: CdkDragDrop<ITask[]>) {
    console.log("drop called",this.tasks)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.updateLocalStorage();    
  }

}
