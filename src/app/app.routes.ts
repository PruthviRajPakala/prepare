import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputComComponent } from './components/Input/input-com/input-com.component';
import { InputCom1Component } from './components/Input/input-com1/input-com1.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    // @Input 
    {path:'inputcom',component:InputComComponent},
    {path:'inputcom1',component:InputCom1Component},
    //@output 
];
