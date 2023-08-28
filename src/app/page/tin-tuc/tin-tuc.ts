import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tin-tuc.html',
  styleUrls: ['./tin-tuc.css'],
})
export class TinTucComponent {
  constructor(private apiService: ApiService, private router: Router) {
  }
}
