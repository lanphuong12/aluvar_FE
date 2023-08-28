import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent {

  constructor(private apiService: ApiService, private router: Router) {
  }
}
