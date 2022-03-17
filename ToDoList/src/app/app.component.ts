import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  constructor(private snack: MatSnackBar) {}

  removerToDoItem(): void {
    this.snack.open('A tarefa foi excluída.', 'Ok')
  }

  removerAllToDoItens(): void {
    this.snack.open('Todas as tarefas foram excluídas.', 'Ok')
  }

  
}
