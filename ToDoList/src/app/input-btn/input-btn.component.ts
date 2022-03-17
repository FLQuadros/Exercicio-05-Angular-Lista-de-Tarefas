import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'input-btn',
  templateUrl: './input-btn.component.html',
  styleUrls: ['./input-btn.component.css']
})
export class InputBtnComponent  {

    toDoItens: Array<string | null> = []

    
    @ViewChild('inputToDo')
    input!: ElementRef;

    @Output()
    clickBtnEvent: EventEmitter<any> = new EventEmitter<any>()

    @Output()
    clickBtnEvent2: EventEmitter<any> = new EventEmitter<any>()

    ngOnInit(): void {
      this.recuperarDados()
      
    }
    

    adicionarToDo(toDo: string):void {

      if (this.input.nativeElement.value == "") {
        alert('Digite uma tarefa.')
      } else {
        this.toDoItens.push(toDo)
        let arrItens = JSON.stringify(this.toDoItens)
        localStorage.setItem('ToDoItens', arrItens)
        this.recuperarDados()

        // this.toDoItens.push(toDo)
        // localStorage.setItem('ToDoItens', JSON.stringify(this.toDoItens))
      }
    }

    // removerToDo(ToDo: string):void {
    //   this.clickBtnEvent.emit()
    //   this.toDoItens.splice(this.toDoItens.indexOf(ToDo), 1)
    //   localStorage.setItem('ToDoItens', JSON.stringify(this.toDoItens))
    // }

    removerTodos(): void {
      this.clickBtnEvent2.emit() 
      this.toDoItens.length = 0
      let arrItens = JSON.stringify(this.toDoItens)
      localStorage.setItem('ToDoItens', arrItens)
      this.recuperarDados()

      // localStorage.setItem('ToDoItens', JSON.stringify(this.toDoItens))
    }

    resetarInput(): void {
      this.input.nativeElement.value = ''
    } 

    emitirEvento(toDo: string | null): void {
      this.clickBtnEvent.emit()
      this.toDoItens.splice(this.toDoItens.indexOf(toDo),1)
      let arrItens = JSON.stringify(this.toDoItens)
      localStorage.setItem('ToDoItens', arrItens)
      this.recuperarDados()


      // this.toDoItens.splice(this.toDoItens.indexOf(ToDo), 1)
      // localStorage.setItem('ToDoItens', JSON.stringify(this.toDoItens))
    }

    recuperarDados(): void {
      let storage = localStorage.getItem('ToDoItens')
      let arrItens = JSON.parse(storage || '[]')
      this.toDoItens = arrItens

    }

    

    


}
