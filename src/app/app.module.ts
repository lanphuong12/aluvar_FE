import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './param/footer/footer.component';
import { HeaderComponent } from './param/header/header.component';
import { TopbarComponent } from './param/topbar/topbar.component';
import { TuvanComponent } from './param/tuvan/tuvan.component';
import { DanhgiaComponent } from './param/danhgia/danhgia.component';
import { TintucComponent } from './param/tintuc/tintuc.component';
import { DoitacComponent } from './param/doitac/doitac.component';
import { SpmoiComponent } from './param/spmoi/spmoi.component';
import { HomeComponent } from './page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViSaoChonChungToiComponent } from './page/gioi-thieu/vi-sao-chon-chung-toi/vi-sao-chon-chung-toi.component';
import { TamNhinSuMenhComponent } from './page/gioi-thieu/tam-nhin-su-menh/tam-nhin-su-menh.component';
import { GiaTriCotLoiComponent } from './page/gioi-thieu/gia-tri-cot-loi/gia-tri-cot-loi.component';
import { DoiNguNhanSuComponent } from './page/gioi-thieu/doi-ngu-nhan-su/doi-ngu-nhan-su.component';
import { ThuVienHinhAnhComponent } from './page/gioi-thieu/thu-vien-hinh-anh/thu-vien-hinh-anh.component';
import { PhanLoaiComponent } from './page/phan-loai/phan-loai.component';
import { SanPhamDetailComponent } from './page/san-pham-detail/san-pham-detail.component';
import { LienHeComponent } from './page/lien-he/lien-he.component';
import { DuAnDaThucHienComponent } from './page/cong-trinh/du-an-da-thuc-hien/du-an-da-thuc-hien.component';
import { DuAnDangThucHienComponent } from './page/cong-trinh/du-an-dang-thuc-hien/du-an-dang-thuc-hien.component';
import { HuongDanDatHangComponent } from './page/ho-tro-khach-hang/huong-dan-dat-hang/huong-dan-dat-hang.component';
import { HuongDanThanhToanComponent } from './page/ho-tro-khach-hang/huong-dan-thanh-toan/huong-dan-thanh-toan.component';
import { CauHoiThuongGapComponent } from './page/ho-tro-khach-hang/cau-hoi-thuong-gap/cau-hoi-thuong-gap.component';
import { ChinhSachKhachHangComponent } from './page/ho-tro-khach-hang/chinh-sach-khach-hang/chinh-sach-khach-hang.component';
import { TuVanSanPhamComponent } from './page/tu-van/tu-van-san-pham/tu-van-san-pham.component';
import { BaoGiaSanPhamComponent } from './page/tu-van/bao-gia-san-pham/bao-gia-san-pham.component';
import { TuVanPhongThuyComponent } from './page/tu-van/tu-van-phong-thuy/tu-van-phong-thuy.component';
import { TuVanMuaHangComponent } from './page/tu-van/tu-van-mua-hang/tu-van-mua-hang.component';
import { TinTucSuKienComponent } from './page/tin-tuc/tin-tuc-su-kien/tin-tuc-su-kien.component';
import { TinTucNoiBoComponent } from './page/tin-tuc/tin-tuc-noi-bo/tin-tuc-noi-bo.component';
import { TinTucXaHoiComponent } from './page/tin-tuc/tin-tuc-xa-hoi/tin-tuc-xa-hoi.component';
import { TinTucNoiBatComponent } from './page/tin-tuc/tin-tuc-noi-bat/tin-tuc-noi-bat.component';
import { TuyenDungComponent } from './page/tin-tuc/tuyen-dung/tuyen-dung.component';
import { DanhSachSanPhamComponent } from './page/danh-sach-san-pham/danh-sach-san-pham.component';
import { GioiThieuComponent } from './page/gioi-thieu/gioi-thieu';
import { CongTrinhComponent } from './page/cong-trinh/cong-trinh';
import { TuVanComponent } from './page/tu-van/tu-van';
import { TinTucComponent } from './page/tin-tuc/tin-tuc';
import { BannerComponent } from './param/banner/banner.component';
import { DuannoibatComponent } from './param/duannoibat/duannoibat.component';
import { SanphamnoibatComponent } from './param/sanphamnoibat/sanphamnoibat.component';
import { ThuvienhinhanhComponent } from './param/thuvienhinhanh/thuvienhinhanh.component';
import { DatHangComponent } from './page/dat-hang/dat-hang.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { MyHoverDirectiveDirective } from './my-hover-directive.directive';
import { ScrollToTopDirective } from './scroll-to-top.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,
    TuvanComponent,
    DanhgiaComponent,
    TintucComponent,
    DoitacComponent,
    SpmoiComponent,
    HomeComponent,
    GioiThieuComponent,
    ViSaoChonChungToiComponent,
    TamNhinSuMenhComponent,
    GiaTriCotLoiComponent,
    DoiNguNhanSuComponent,
    ThuVienHinhAnhComponent,
    PhanLoaiComponent,
    SanPhamDetailComponent,
    LienHeComponent,
    CongTrinhComponent,
    DuAnDaThucHienComponent,
    DuAnDangThucHienComponent,
    HuongDanDatHangComponent,
    HuongDanDatHangComponent,
    HuongDanThanhToanComponent,
    CauHoiThuongGapComponent,
    ChinhSachKhachHangComponent,
    TuVanComponent,
    TuVanSanPhamComponent,
    BaoGiaSanPhamComponent,
    TuVanPhongThuyComponent,
    TuVanMuaHangComponent,
    TinTucComponent,
    TinTucSuKienComponent,
    TinTucNoiBoComponent,
    TinTucXaHoiComponent,
    TinTucNoiBatComponent,
    TuyenDungComponent,
    DanhSachSanPhamComponent,
    BannerComponent,
    DuannoibatComponent,
    SanphamnoibatComponent,
    ThuvienhinhanhComponent,
    DatHangComponent,
    MyHoverDirectiveDirective,
    ScrollToTopDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
