import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-tuvan',
  templateUrl: './tu-van.html',
  styleUrls: ['./tu-van.css'],
})
export class TuVanComponent {
  constructor(private apiService: ApiService, private router: Router) {
  }
}
