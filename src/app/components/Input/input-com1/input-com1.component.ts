import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-com1',
  standalone: true,
  imports: [],
  templateUrl: './input-com1.component.html',
  styleUrl: './input-com1.component.css'
})
export class InputCom1Component {

  @Input()d:any='';
}
