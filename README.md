# We Create Tomorrow

Phần mềm karaoke ca khúc nhận diện **Trường Kinh tế, Đại học Cần Thơ**, chạy trên trình
duyệt. Phát hai bản lời — tiếng Việt ("Chúng ta cùng đi") và tiếng Anh ("We Create
Tomorrow") — với lời hiển thị đồng bộ theo thời gian, chuyển ngôn ngữ tức thời, và chế độ
hiển thị khuông nhạc.

**Trang chạy:** https://thuyhuongctu.github.io/we-create-tomorrow/

## Tác giả

| | |
|---|---|
| **Phan Anh Tú** | Phó giáo sư, tiến sĩ, Phó Hiệu trưởng Trường Kinh tế, Đại học Cần Thơ, Khoa Kinh doanh quốc tế. ORCID: [0000-0003-0667-3137](https://orcid.org/0000-0003-0667-3137) |
| **Đỗ Thùy Hương** | Giảng viên Trường Đại học Sư phạm Kỹ thuật Vĩnh Long (VLUTE), nghiên cứu sinh Trường Kinh tế, Đại học Cần Thơ. ORCID: [0000-0002-7711-2487](https://orcid.org/0000-0002-7711-2487) |

Xem chi tiết vai trò và phần đóng góp của từng người tại
[`ho-so/00-thong-tin-ho-so.md`](https://github.com/thuyhuongctu/School-of-Economics/blob/main/ho-so/00-thong-tin-ho-so.md)
trong kho hồ sơ đăng ký quyền tác giả.

## Chức năng chính

- Phát bản ghi âm ca khúc, lời hiển thị đồng bộ theo mili-giây (karaoke)
- Chuyển ngôn ngữ Việt / Anh tức thời — đổi cả bản ghi âm lẫn lời hiển thị
- Chế độ **Nốt**: hiển thị khuông nhạc kèm lời theo từng đoạn
- Điều hướng nhanh theo từng đoạn bài hát (Intro, Verse, Chorus…)
- Cài đặt được lên màn hình chính như một ứng dụng thường (web app)
- Giao diện tương thích máy tính và thiết bị di động

## Công nghệ

TypeScript 5.7 · React 19 · Vite 6 · Tailwind CSS 4. Chạy hoàn toàn phía trình duyệt,
không có máy chủ, không thu thập dữ liệu người dùng.

## Cấu trúc mã nguồn

```
src/
  App.tsx                 Điểm vào ứng dụng
  main.tsx                Khởi tạo React
  components/
    header.tsx             Thanh đầu trang: chọn bài hát, chế độ xem
    karaoke-stage.tsx       Màn hình karaoke chính, đồng bộ lời
    player-bar.tsx          Thanh điều khiển phát/tạm dừng, tua
    section-nav.tsx         Điều hướng theo từng đoạn bài hát
    sheet-view.tsx           Chế độ hiển thị khuông nhạc (Nốt)
    staff.tsx                Vẽ khuông nhạc
    brand.tsx                Hình ảnh nhận diện (logo, ảnh nhân vật)
  lib/
    anthem.ts               Dữ liệu lời bài hát đồng bộ theo thời gian, cả hai ngôn ngữ
    audio-engine.ts          Điều khiển phát âm thanh
    player-store.ts          Trạng thái phát nhạc dùng chung
    utils.ts                 Hàm tiện ích dùng chung
  styles.css               Bảng màu, hiệu ứng nền, bố cục chung
public/
  brand/                   Hình ảnh nhận diện (logo, ảnh nhân vật, nền)
  audio/                   Hai tệp bản ghi âm
  favicon.svg, icon-*.png  Biểu tượng ứng dụng
```

## Chạy thử

```bash
npm install
npm run dev       # máy phát triển, http://localhost:5173
npm run build     # build production vào dist/
```

Triển khai tự động lên GitHub Pages qua GitHub Actions mỗi khi có push vào `main`
(xem [`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

## Trích dẫn

Lưu trữ độc lập trên Zenodo (CERN), phiên bản v.1.0, chế độ Restricted Access:
[DOI 10.5281/zenodo.22080061](https://doi.org/10.5281/zenodo.22080061). Xem thêm
[`CITATION.cff`](CITATION.cff).

## Bản quyền

© 2026 Phan Anh Tú, Đỗ Thùy Hương. Bảo lưu mọi quyền — xem [LICENSE](LICENSE).

Đây là tác phẩm đi kèm bộ hồ sơ đăng ký quyền tác giả tại
[thuyhuongctu/School-of-Economics](https://github.com/thuyhuongctu/School-of-Economics)
(loại hình "Chương trình máy tính"). Hai ca khúc dùng trong ứng dụng được đăng ký quyền
tác giả riêng, loại hình "Tác phẩm văn học" (phần lời).
