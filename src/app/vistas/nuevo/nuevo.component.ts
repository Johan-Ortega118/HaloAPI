import { Component, OnInit } from '@angular/core';
import { User } from '../../modelos/character.interface'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    name: new FormControl(''),
    favorite_character: new FormControl(''),
    age: new FormControl('')
  });

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form:User){
    this.api.postUsers(form).subscribe(data => {
      console.log(data);
    })
  };

  salir(){
    this.router.navigate(['dashboard']);
  };


}
