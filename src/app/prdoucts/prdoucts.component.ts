import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-prdoucts',
  templateUrl: './prdoucts.component.html',
  styleUrls: ['./prdoucts.component.css']
})
export class PrdouctsComponent {
  username: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
  }
products = [
    { 
      name: 'Product 1', 
      description: 'Description for product 1', 
      image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=600'
      
    },
    { 
      name: 'Product 2', 
      description: 'Description for product 2', 
      image: 'https://media.istockphoto.com/id/1488741326/photo/indian-rajasthani-stylish-golden-earrings-jewellery.jpg?b=1&s=612x612&w=0&k=20&c=pk-xhscGfpn-MOMI46PTs028Zv5-xArXnsqKXilmg5k=' 
    },
    { 
      name: 'Product 3', 
      description: 'Description for product 3', 
      image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    
  ];
}
