# We Create Tomorrow

**Phần mềm karaoke song ngữ cho ca khúc nhận diện của Trường Kinh tế, Đại học Cần Thơ**

[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.22080061-blue)](https://doi.org/10.5281/zenodo.22080061)

## Tóm tắt

*We Create Tomorrow* là một ứng dụng web trình diễn karaoke, phát triển để phổ biến ca
khúc nhận diện của Trường Kinh tế, Đại học Cần Thơ (School of Economics, Can Tho
University) dưới hai phiên bản ngôn ngữ — tiếng Việt ("Chúng ta cùng đi") và tiếng Anh
("We Create Tomorrow"). Ứng dụng hiển thị lời bài hát đồng bộ theo thời gian thực (karaoke),
cho phép chuyển đổi ngôn ngữ tức thời, và cung cấp một chế độ hiển thị khuông nhạc bổ trợ
cho việc luyện tập. Toàn bộ xử lý diễn ra phía trình duyệt của người dùng; ứng dụng không
có thành phần máy chủ và không thu thập dữ liệu cá nhân.

**Bản chạy trực tuyến:** <https://thuyhuongctu.github.io/we-create-tomorrow/>

## Tác giả và phần đóng góp

| Tác giả | Đơn vị công tác | ORCID | Vai trò đóng góp |
|---|---|---|---|
| Phan Anh Tú | Phó giáo sư, tiến sĩ, Phó Hiệu trưởng Trường Kinh tế, Đại học Cần Thơ, Khoa Kinh doanh quốc tế | [0000-0003-0667-3137](https://orcid.org/0000-0003-0667-3137) | Định hướng phương pháp khoa học; thiết kế mô hình logic của chương trình |
| Đỗ Thùy Hương | Giảng viên Trường Đại học Sư phạm Kỹ thuật Vĩnh Long (VLUTE); nghiên cứu sinh Trường Kinh tế, Đại học Cần Thơ | [0000-0002-7711-2487](https://orcid.org/0000-0002-7711-2487) | Thiết kế hệ thống; lập trình cốt lõi và giao diện; triển khai |

Mô tả đầy đủ về phần đóng góp và tình trạng sở hữu quyền tác giả được trình bày tại
[`ho-so/00-thong-tin-ho-so.md`](https://github.com/thuyhuongctu/School-of-Economics/blob/main/ho-so/00-thong-tin-ho-so.md),
thuộc kho hồ sơ đăng ký quyền tác giả đi kèm.

## Chức năng

1. Phát bản ghi âm ca khúc kèm lời hiển thị đồng bộ theo thời gian thực (karaoke).
2. Chuyển đổi tức thời giữa bản ghi âm và lời hiển thị tiếng Việt / tiếng Anh.
3. Chế độ hiển thị khuông nhạc ("Nốt"), trình bày lời theo từng đoạn nhạc lý.
4. Điều hướng nhanh theo cấu trúc bài hát (Dạo đầu, Điệp khúc, Cao trào…).
5. Giao diện sáng/tối theo lựa chọn của người dùng (lưu cục bộ trên trình duyệt).
6. Cài đặt được lên màn hình chính như một ứng dụng web độc lập (progressive web app).
7. Bố cục đáp ứng, tương thích máy tính để bàn và thiết bị di động.

## Công nghệ sử dụng

TypeScript 5.7, React 19, Vite 6, Tailwind CSS 4. Ứng dụng chạy hoàn toàn phía máy khách
(client-side), không phụ thuộc dịch vụ máy chủ nào; xem thêm về giấy phép của các thư viện
sử dụng tại
[`chuong-trinh/mo-ta-chuc-nang.md`](https://github.com/thuyhuongctu/School-of-Economics/blob/main/chuong-trinh/mo-ta-chuc-nang.md)
(mục 6) trong kho hồ sơ đăng ký quyền tác giả.

## Cấu trúc mã nguồn

```
src/
  App.tsx                    Điểm vào ứng dụng, bố cục tổng thể
  main.tsx                   Khởi tạo React
  components/
    header.tsx               Đầu trang: chọn bài hát, chế độ xem, chuyển giao diện sáng/tối
    karaoke-stage.tsx         Màn hình karaoke chính, đồng bộ lời
    player-bar.tsx            Thanh điều khiển phát/tạm dừng, tua
    section-nav.tsx           Điều hướng theo cấu trúc bài hát
    sheet-view.tsx            Chế độ hiển thị khuông nhạc
    staff.tsx                 Vẽ khuông nhạc
    brand.tsx                 Hình ảnh nhận diện
    footer.tsx                Chân trang: bản quyền, liên kết mã nguồn và DOI
  lib/
    anthem.ts                 Dữ liệu lời bài hát đồng bộ theo thời gian, cả hai ngôn ngữ
    audio-engine.ts            Điều khiển phát âm thanh
    player-store.ts            Trạng thái dùng chung của trình phát
    i18n.ts                    Chuỗi giao diện song ngữ
    utils.ts                   Hàm tiện ích dùng chung
  styles.css                 Bảng màu, hiệu ứng nền, bố cục chung
public/
  brand/                    Hình ảnh nhận diện (biểu trưng, minh hoạ nhân vật, nền)
  audio/                    Hai bản ghi âm (Việt, Anh)
  favicon.svg, icon-*.png   Biểu tượng ứng dụng
```

## Triển khai và tái lập

```bash
npm install
npm run dev       # máy chủ phát triển cục bộ, http://localhost:5173
npm run build     # build bản chạy production vào dist/
```

Ứng dụng được triển khai tự động lên GitHub Pages thông qua GitHub Actions ở mỗi lần cập
nhật nhánh `main` (xem cấu hình tại
[`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

## Trích dẫn

Bản ghi lưu trữ độc lập được thực hiện qua Zenodo (CERN Data Centre), phiên bản v.1.0, ở
chế độ truy cập hạn chế (Restricted Access — siêu dữ liệu công khai, tệp chỉ tải khi được
chủ sở hữu quyền tác giả phê duyệt):

> Phan, A. T., & Đỗ, T. H. (2026). *We Create Tomorrow: karaoke software for the anthem of
> Trường Kinh tế, Đại học Cần Thơ* (Version v.1.0) [Software]. Zenodo.
> https://doi.org/10.5281/zenodo.22080061

Định dạng trích dẫn máy đọc được: xem [`CITATION.cff`](CITATION.cff).

## Bản quyền

© 2026 Phan Anh Tú, Đỗ Thùy Hương. Bảo lưu mọi quyền — xem [LICENSE](LICENSE). Mã nguồn và
tư liệu đi kèm được công bố công khai nhằm mục đích tham chiếu, thẩm định và phục vụ hồ sơ
đăng ký quyền tác giả; không cấp phép sao chép, sửa đổi hay phân phối lại nếu không có sự
đồng ý bằng văn bản của cả hai đồng tác giả.

Phần mềm này là một tác phẩm đi kèm bộ hồ sơ đăng ký quyền tác giả tại
[thuyhuongctu/School-of-Economics](https://github.com/thuyhuongctu/School-of-Economics)
(loại hình đăng ký: "Chương trình máy tính"). Phần lời của hai ca khúc sử dụng trong ứng
dụng được đăng ký quyền tác giả theo một hồ sơ riêng, loại hình "Tác phẩm văn học".
