import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Assurez-vous que c'est bien "styleUrls" au pluriel
})
export class LoginComponent {

  data = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private httpClient: HttpClient, private router: Router) {}

  public handleSubmit() {
    console.log(this.data.value);

    const userId = this.data.value.userId;
    const password = this.data.value.password;

    // Vérification des identifiants pour l'administrateur
    if (userId === 'ismaila.barry@esprit.tn' && password === '123456') {
      // Redirection vers AdminComponent
      this.router.navigate(['/admin']);
    } else {
      // Appel à l'API pour vérifier les autres utilisateurs
      this.httpClient.post('http://localhost:8082/loginUser', this.data.value).subscribe((data: any) => {
        console.log(data);
        if (data === true) {
          alert("Login successful");
          // Redirection vers PublicComponent
          this.router.navigate(['/public']);
        } else {
          alert("Wrong credentials. Please try again.");
        }
      });
    }
  }
}
