import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/autenticacao/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.userService.returnUser();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
