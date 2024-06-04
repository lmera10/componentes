import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
  

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
[x: string]: any;


  componentes: Componente[] = [
    
    {
      icon:'logo-angular',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-playstation',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'logo-tux',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'time-outline',
      name: 'Date',
      redirectTo: '/date'
    },
    {
      icon: 'logo-alipay',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'logo-windows',
      name: 'Menu-Badge',
      redirectTo: '/menu'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'albums-outline',
      name: 'Picker',
      redirectTo: '/picker'
    }

  ];
  
  constructor() { }

  ngOnInit() {
  }

}
