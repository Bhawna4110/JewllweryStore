import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) {}

  onSubmit() {
    const loginData = { username: this.username, password: this.password };

    this.http.post('YOUR_LOGIN_API_URL', loginData)
      .subscribe(response => {
        // Handle successful login
        this.loginService.setUsername(this.username);
        this.router.navigate(['/Product']);
      }, error => {
        // Handle login error
        console.error('Login failed', error);
      });
  }
}
