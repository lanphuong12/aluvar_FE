import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.url = environment.urlApi;
  }
  formPhanloai = this.fb.group({
    ID: ["", [Validators.required]],
    name: ["", [Validators.required]],
    mota: [""]
  });
  formSP = this.fb.group({
    ID: ['', [Validators.required]],
    id_loai: [0, [Validators.required]],
    name: ["", [Validators.required]],
    mota: [""],
    anh: [""],
  });
  getPhanloai() {
    return this.http.get(this.url + 'getAllPhanloai.php');
  }
  getPLbyIDPL(idPL: string) {
    return this.http.get(this.url + 'getPLbyIdPL.php/?idPL=' + idPL);
  }
  getAllSP() {
    return this.http.get(this.url + 'getAllSP.php');
  }
  getSPbyIDSP(idSP: string) {
    return this.http.get(this.url + 'getSPbyIdSP.php/?idSP=' + idSP);
  }
  getSPbyIDPL(idPL: string) {
    return this.http.get(this.url + 'getSPbyIdPL.php/?idPL=' + idPL);
  }
  search(key: string) {
    return this.http.get(this.url + 'sanpham?spName_like=' + key);
  }

}
