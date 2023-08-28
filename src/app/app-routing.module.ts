import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LienHeComponent } from './page/lien-he/lien-he.component';
import { DanhSachSanPhamComponent } from './page/danh-sach-san-pham/danh-sach-san-pham.component';
import { SanPhamDetailComponent } from './page/san-pham-detail/san-pham-detail.component';
import { GioiThieuComponent } from './page/gioi-thieu/gioi-thieu';
import { HoTroKhachHangComponent } from './page/ho-tro-khach-hang/ho-tro-khach-hang';
import { TuVanComponent } from './page/tu-van/tu-van';
import { TinTucComponent } from './page/tin-tuc/tin-tuc';
import { DatHangComponent } from './page/dat-hang/dat-hang.component';
import { TinTucSuKienComponent } from './page/tin-tuc/tin-tuc-su-kien/tin-tuc-su-kien.component';
import { TinTucNoiBoComponent } from './page/tin-tuc/tin-tuc-noi-bo/tin-tuc-noi-bo.component';
import { TinTucXaHoiComponent } from './page/tin-tuc/tin-tuc-xa-hoi/tin-tuc-xa-hoi.component';
import { TinTucNoiBatComponent } from './page/tin-tuc/tin-tuc-noi-bat/tin-tuc-noi-bat.component';
import { TuyenDungComponent } from './page/tin-tuc/tuyen-dung/tuyen-dung.component';
import { TuVanSanPhamComponent } from './page/tu-van/tu-van-san-pham/tu-van-san-pham.component';
import { BaoGiaSanPhamComponent } from './page/tu-van/bao-gia-san-pham/bao-gia-san-pham.component';
import { TuVanPhongThuyComponent } from './page/tu-van/tu-van-phong-thuy/tu-van-phong-thuy.component';
import { TuVanMuaHangComponent } from './page/tu-van/tu-van-mua-hang/tu-van-mua-hang.component';
import { HuongDanDatHangComponent } from './page/ho-tro-khach-hang/huong-dan-dat-hang/huong-dan-dat-hang.component';
import { HuongDanThanhToanComponent } from './page/ho-tro-khach-hang/huong-dan-thanh-toan/huong-dan-thanh-toan.component';
import { CauHoiThuongGapComponent } from './page/ho-tro-khach-hang/cau-hoi-thuong-gap/cau-hoi-thuong-gap.component';
import { ChinhSachKhachHangComponent } from './page/ho-tro-khach-hang/chinh-sach-khach-hang/chinh-sach-khach-hang.component';
import { DuAnDaThucHienComponent } from './page/cong-trinh/du-an-da-thuc-hien/du-an-da-thuc-hien.component';
import { DuAnDangThucHienComponent } from './page/cong-trinh/du-an-dang-thuc-hien/du-an-dang-thuc-hien.component';
import { PhanLoaiComponent } from './page/phan-loai/phan-loai.component';
import { CongTrinhComponent } from './page/cong-trinh/cong-trinh';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path: 'gioi-thieu', component: GioiThieuComponent
  },

  {
    path: 'san-pham', component: DanhSachSanPhamComponent
  },

  {
    path: 'san-pham/:idPL', component: PhanLoaiComponent
  },

  {
    path: 'san-pham-detail/:idSP', component: SanPhamDetailComponent
  },

  {
    path: 'cong-trinh', component: CongTrinhComponent
  },

  {
    path: 'cong-trinh/du-an-da-lam', component: DuAnDaThucHienComponent
  },

  {
    path: 'cong-trinh/du-an-dang-lam', component: DuAnDangThucHienComponent
  },

  {
    path: 'ho-tro', component: HoTroKhachHangComponent
  },
  {
    path: 'ho-tro/ho-tro-dat-hang', component: HuongDanDatHangComponent
  },
  {
    path: 'ho-tro/huong-dan-thanh-toan', component: HuongDanThanhToanComponent
  },
  {
    path: 'ho-tro/cau-hoi-thuong-gap', component: CauHoiThuongGapComponent
  },
  {
    path: 'ho-tro/chinh-sach-khach-hang', component: ChinhSachKhachHangComponent
  },

  {
    path: 'tu-van', component: TuVanComponent
  },

  {
    path: 'tu-van/tu-van-san-pham', component: TuVanSanPhamComponent
  },

  {
    path: 'tu-van/bao-gia-san-pham', component: BaoGiaSanPhamComponent
  },

  {
    path: 'tu-van/tu-van-phong-thuy', component: TuVanPhongThuyComponent
  },

  {
    path: 'tu-van/tu-van-mua-hang', component: TuVanMuaHangComponent
  },

  {
    path: 'tin-tuc', component: TinTucComponent
  },

  {
    path: 'tin-tuc/tin-tuc-su-kien', component: TinTucSuKienComponent
  },

  {
    path: 'tin-tuc/tin-tuc-noi-bo', component: TinTucNoiBoComponent
  },

  {
    path: 'tin-tuc/tin-tuc-xa-hoi', component: TinTucXaHoiComponent
  },

  {
    path: 'tin-tuc/tin-tuc-noi-bat', component: TinTucNoiBatComponent
  },

  {
    path: 'tin-tuc/tuyen-dung', component: TuyenDungComponent
  },

  {
    path: 'lien-he', component: LienHeComponent
  },
  {
    path: 'dat-hang/:idSP', component: DatHangComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
