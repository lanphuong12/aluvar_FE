import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-hotrokhachang',
  templateUrl: './ho-tro-khach-hang.html',
  styleUrls: ['./ho-tro-khach-hang.css'],
})
export class HoTroKhachHangComponent {
  constructor(private apiService: ApiService, private router: Router) {
  }
}
