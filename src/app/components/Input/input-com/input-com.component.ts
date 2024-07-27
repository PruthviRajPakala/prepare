import { Component } from '@angular/core';
import { InputCom1Component } from '../input-com1/input-com1.component';

@Component({
  selector: 'app-input-com',
  standalone: true,
  imports: [InputCom1Component],
  templateUrl: './input-com.component.html',
  // styleUrl: './input-com.component.css'
})
export class InputComComponent {

  data = "this is parent componet ";


}
