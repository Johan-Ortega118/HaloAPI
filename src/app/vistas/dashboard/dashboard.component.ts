import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListCharacters } from '../../modelos/listcharacters.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters:ListCharacters[];

  constructor(private api: ApiService, private router: Router) {}

  
  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data => {
      console.log(data['user']);
      this.users = data['user'];
    })
  }

  entrar(){
    this.router.navigate(['nuevo']);
  }

}
