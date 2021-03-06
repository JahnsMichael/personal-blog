---
title: "Blog#1 Review Aplikasi"
published: 2021-03-07
summary: Review dari aplikasi-aplikasi yang akan dikembangkan pada mata kuliah PPL A Sosial Open Source, yaitu BisaGo, Pilar Home Industry, dan TBCare.
layout: blog
---

<div slot="toc">

- [Industri Pilar](#industri-pilar)
  - [Latar Belakang](#latar-belakang)
  - [Struktur dan Fitur Aplikasi](#struktur-dan-fitur-aplikasi)
  - [Teknologi yang digunakan](#teknologi-yang-digunakan)
- [TBCare](#tbcare)
  - [Latar Belakang](#latar-belakang-1)
  - [Struktur dan Fitur Aplikasi](#struktur-dan-fitur-aplikasi-1)
  - [Teknologi yang digunakan](#teknologi-yang-digunakan-1)
- [bisaGo](#bisago)
  - [Latar Belakang](#latar-belakang-2)
  - [Struktur dan Fitur Aplikasi](#struktur-dan-fitur-aplikasi-2)
  - [Teknologi yang digunakan](#teknologi-yang-digunakan-2)
- [Persiapan Teknis dan Kendala](#persiapan-teknis-dan-kendala)

</div>


# Industri Pilar

![Industri Pilar](/images/blogppl/industri-pilar.jpg)

## Latar Belakang

Aplikasi Industri Pilar adalah sebuah aplikasi e-dagang hasil kerja sama antara PILAR Jakarta dengan kelompok Post-RPL, yaitu kelompok PPL semester genap 2020, dan dilanjutkan oleh kelompok PPL Social Open Source berikutnya. Aplikasi ini dilatarbelakangi dengan kondisi pandemi yang membuat kegiatan berbelanja kebutuhan-kebutuhan hidup menjadi sulit karena harus menghindari kerumunan. Tujuan dari Industri Pilar adalah memajukan kegiatan sosial usaha komunitas dan UMKM, dan tentu saja memudahkan masyarakat untuk berbelanja dan memenuhi kebutuhan hidup. Fitur utama dari aplikasi ini adalah pengguna dapat berbelanja membeli produk-produk yang disediakan dan memberikan donasi untuk acara-acara sosial yang akan diadakan oleh komunitas sekitar.

## Struktur dan Fitur Aplikasi

Aplikasi ini memiliki 3 bagian utama, yaitu:

1. Backend, berfungsi sebagai API untuk 2 services lainnya.
2. Frontend Mobile, aplikasi yang digunakan oleh pengguna pada umumnya untuk berbelanja dan melakukan transaksi.
3. Frontend Web, digunakan oleh Admin komunitas untuk memasukkan produk-produk dan event-event komunitas sehingga bisa dilihat oleh pengguna lainnya.

## Teknologi yang digunakan

Untuk aplikasi ini, ada beberapa teknologi yang digunakan, diantaranya:

1. Django Rest Framework untuk backend server
2. Postgresql untuk database
3. React untuk frontend web admin
4. Flutter untuk frontend aplikasi mobile

Selain itu, untuk test teknologi yang digunakan adalah Jest untuk React, dan Sonar untuk keseluruhan aplikasi.

---

# TBCare

![TBCare](/images/blogppl/tbcare.jpg)

## Latar Belakang

TBCare adalah aplikasi hasil kerja sama Perkumpulan Pemberantasan Tuberkulosis Indonesia (PPTI) Depok dengan kelompok Neza, yaitu kelompok PPL semester genap 2020 yang juga dilanjutkan di semester-semester selanjutnya oleh kelompok lain di kelas PPL Social Open Source. TBCare bertujuan memudahkan proses investigasi dan pencatatan data wabah TBC di kawasan Depok. Biasanya, alur kerja pencatatan data wabah TBC dilakukan secara manual, yaitu dengan mengisi kertas formulir data, dan nantinya dimasukkan secara manual. Dengan TBCare, pencatatan data dilakukan secara modern, langsung mencatat di aplikasi dan langsung tersimpan di database. Data yang ada nantinya juga dapat divisualisasikan dengan berbagai format penyajian sehingga memudahkan admin melakukan pemantauan dan analisis.

## Struktur dan Fitur Aplikasi

Aplikasi ini memiliki 3 bagian utama, yaitu:

1. Backend, berfungsi sebagai API untuk 2 services lainnya.
2. Frontend Mobile, aplikasi yang digunakan oleh sukarelawan untuk mengisi data.
3. Frontend Web, digunakan oleh Admin PPTI untuk mengolah data dan melihat ringkasan data dengan visualisasi statistik.

## Teknologi yang digunakan

Untuk aplikasi ini, ada beberapa teknologi yang digunakan, diantaranya:

1. Django Rest Framework untuk backend server
2. Postgresql untuk database
3. React untuk frontend web admin
4. React Native untuk frontend aplikasi mobile

Selain itu, untuk test teknologi yang digunakan adalah Jest untuk React, dan Sonar untuk keseluruhan aplikasi.

Untuk React dan React Native, aplikasi ini menggunakan salah satu *Javascript flavor* yaitu *Typescript*. Ciri khas sekaligus manfaat Typescript adalah menambah *type annotation* pada Javascript. Ada beberapa keuntungan yang didapatkan dengan menggunakan Typescript dibandingkan Javascript biasa, yaitu:

- Jika menggunakan IDE atau text-editor modern yang memiliki *intellisense*, *type annotation* sangat berguna karena *intellisense* dapat memberikan code completion dan preview informasi tambahan.
- Javascript biasa sangat rentan dengan error pada runtime, karena memang tidak ada pengecekan kompilasi, sedangkan source code Typescript nantinya dikonversi menjadi Javascript biasa, namun pada proses kompilasinya akan ada pengecekan yang memudahkan mendeteksi error pada proses build, bukan pada runtime.
- Typescript lebih fleksible jika dibandingkan dengan bahasa static typing lain semacam Java. Typescript pada dasarnya adalah superset dari Javascript, sehingga semua code Javascript biasa adalah code yang valid untuk Typescript. Developer dapat memilih apakah akan memanfaatkan *type annotation* atau tidak.
- Khususnya untuk proses fetching data dari API, dengan Typescript dapat dijamin bahwa data yang didapatkan dan diproses memiliki struktur yang sesuai dengan ekspektasi.

---

# bisaGo

![BisaGo](/images/blogppl/bisago.jpg)

## Latar Belakang

bisaGo adalah aplikasi hasil kerja sama organisasi Disabilitas Tanpa Batas dengan kelompok PPLapanganTembak dan PoiPoLeGan. Tujuan aplikasi ini adalah menyediakan platform untuk berbagi informasi mengenai ketersedian fasilitas disabilitas di tempat-tempat umum. User dapat mencari lokasi tertentu dan melihat review ketersediaan fasilitas di lokasi tersebut. User juga bisa menambahkan review sehingga user yang lain juga bisa mendapatkan informasi terupdate.

## Struktur dan Fitur Aplikasi

Aplikasi ini terbagi menjadi 2 bagian, yaitu:

1. Backend, berfungsi sebagai API untuk service lain.
2. Frontend mobile, bagian aplikasi yang secara langsung berinteraksi dengan user

## Teknologi yang digunakan

Untuk aplikasi ini, ada beberapa teknologi yang digunakan, diantaranya:

1. Django Rest Framework untuk backend server
2. Postgresql untuk database
3. Flutter untuk frontend aplikasi mobile

---

# Persiapan Teknis dan Kendala

Sejauh ini saya sudah melakukan *clone* untuk semua repository dan mencoba menjalankannya di komputer saya, namun saya menemukan beberapa kendala dalam setup environment local komputer saya. Untuk mencoba frontend aplikasi web, saya juga terkendala karena aplikasi tersebut ditujukan untuk admin, sementara saya tidak memiliki informasi username dan password adminnya, sehingga sampai saat ini belum bisa mencoba fitur-fitur yang ada. Untuk aplikasi mobile, saat ini masih berusaha supaya aplikasi dapat dipreview dengan device saya sendiri atau dengan emulator.