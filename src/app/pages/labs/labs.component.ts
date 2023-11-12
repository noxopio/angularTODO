import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'TODO-APP';
  welcome = 'welcome in the end of world';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'crear servicio',
    'Build para produccion'
  ]);
  name = signal('NoxDev');
  age = 35;
  disabled = true;
  img = 'https://i.pinimg.com/736x/aa/78/20/aa78200f2d87d9873263f86ec6ff3bd2.jpg';

  person = signal({
    name: 'NoxDev',
    age: 20,
    avatar: 'https://i.pinimg.com/564x/aa/0e/91/aa0e910abbea53d3b53af09d3976b34a.jpg',
  });
colorCtrl=new FormControl ();
constructor() {
this.colorCtrl.valueChanges.subscribe(value=>{
  console.log(value);
})

}

clickHandler() {
    alert(' hola')
  }
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);


  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
      name:newValue
      }
    });
  }




}
