---
title: 'Blog#2 Scrum: "*Langsung Terjun ke Jurang*"'
published: 2021-03-22
summary: Pengalaman pertama kali menerapkan Agile Development dan Scrum pada pengembangan perangkat lunak.
layout: blog
---

<div slot="toc">

- [Sedikit mengenai *Scrum Framework*](#sedikit-mengenai-scrum-framework)
  - [*Scrum* sebagai kerangka kerja *Agile Development*](#scrum-sebagai-kerangka-kerja-agile-development)
  - [*Scrum Pillars and Values*](#scrum-pillars-and-values)
  - [*Scrum Events and Artifacts*](#scrum-events-and-artifacts)
- [Pengalaman pribadi dalam menerapkan Scrum Framework](#pengalaman-pribadi-dalam-menerapkan-scrum-framework)
  - [Dibanding dengan *Agile Manifesto*](#dibanding-dengan-agile-manifesto)
  - [Dibanding dengan *Scrum Pillars and Values*](#dibanding-dengan-scrum-pillars-and-values)
  - [Penerapan *Scrum Events*](#penerapan-scrum-events)
  - [Isu-isu lainnya](#isu-isu-lainnya)
- [Kesimpulan](#kesimpulan)

</div>


Proyek TBCare yang saya kerjakan untuk perkuliahan PPL ini adalah proyek "sungguhan" pertama yang saya pernah kerjakan. Dalam proyek ini pula saya pertama kali menerapkan ilmu *Agile Development* dan *Scrum Framework* dalam kerangka kerja pengembangan software. Sebelumnya saya pernah menerapkan *Waterfall* secara tidak sadar (tidak tahu kalau alur kerja tersebut dinamakan Waterfall) di perkuliahan PPW dan AP, serta *Unified Process* pada perkuliahan RPL. 

Pada blog kali ini saya ingin membagikan pengalaman bagaimana menerapkan *Scrum Framework* pada proyek *Open Source* TBCare. Nantinya akan ada beberapa kendala yang saya rasakan pada Sprint 1 ini dan usaha saya untuk menanggulanginya. Namun, sebelum menceritakan tentang pengalaman saya, ada baiknya mengenal apa itu *Scrum Framework* terlebih dahulu.

## Sedikit mengenai *Scrum Framework*

> "The illetrate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."
> 
> Alvin Toffler

### *Scrum* sebagai kerangka kerja *Agile Development*

*Scrum Framework* adalah kerangka kerja yang berbasis *Agile Development*, itu artinya Scrum pasti menganut *Agile Manifesto*.

Berikut adalah isi dari *Agile Manifesto*:

1. **Individuals** and **interaction** over **processes** and **tools**
2. **Working software** over **comprehensive documentation**
3. **Customer collaboration** over **contract negotiation**
4. **Responding to change** over **following a plan**

### *Scrum Pillars and Values*

Gambar di bawah ini adalah penggambaran dari *Scrum Pillars* dan *Scrum Values*. 

![Scrum Pillars and Values](https://www.pngkit.com/png/detail/495-4954929_june-18-2018-scrum-pillars-and-values.png)

*Scrum Pillars* digambarkan dengan tiga pilar yang menopang bangunan. *Scrum Values* digambarkan dengan anak-anak tangga di bawah sebagai fondasi bangunan. Atap dari semuanya adalah *trust*, yaitu goal dari *Scrum Framework*. Kepercayaan ditopang oleh penerapan tiga pilar scrum yang hanya bisa dilakukan jika anggota-anggota tim memiliki kelima nilai.

### *Scrum Events and Artifacts*

![Scrum Events](https://auditeste.com.br/wp-content/uploads/2020/01/scrum_framework.jpg)

Berikut adalah alur kerja *scrum* dalam satu *sprint*, dibagi menjadi beberapa *events* dan beberapa diantaranya menghasilkan *artifacts*.

\* yang disebut sprint di sini ialah periode implementasi program

1. Sebelum memulai *sprint*, sebuah project memiliki *Product Backlog* sebagai *artifact*, yaitu sekumpulan *user stories*.
2. *Sprint Planning* adalah *event* untuk merencanakan bagaimana sebuah *sprint* akan dijalankan, bagaimana pembagian tugasnya, dan sebagainya. Event ini menghasilkan *sprint backlog* sebagai *artifacts*.
3. *Sprint* dimulai, masing-masing anggota mengerjakan tugasnya masing-masing selama periode waktu yang ditentukan, dan diselang dengan *Daily Scrum Meeting* tiap harinya (dalam kuliah ini tidak tiap hari, namun 2 kali seminggu). Pertanyaan yang ditanyakan pada *daily scrum meeting* ialah:
   - Apa yang sudah dilakukan?
   - Kendala apa yang ditemukan?
   - Apa yang akan dilakukan?
4. Di akhir *sprint* akan dilakukan sebuah event yang dinamakan *Sprint Review* yang menilai apakah produk yang dihasilkan sudah sesuai keinginan *product owner* atau belum, jika sudah, maka dihasilkan sebuah *artifact* yang disebut *increment product* atau *deployable product*.
5. Sebelum memulai kembali siklus dari awal, dilakukan *Sprint Retrospective* yang adalah evaluasi kerja dari tim. Hal yang dievaluasi adalah:
   - Apa hal-hal yang sudah baik dilakukan?
   - Apa hal-hal yang perlu diperbaiki atau ditingkatkan?
   - Apa yang akan dilakukan untuk meningkatkan hal tersebut?

## Pengalaman pribadi dalam menerapkan Scrum Framework

Saya menganalogikan pengalaman ini seperti "langsung terjun ke jurang". Alasannya, karena saya merasa semuanya perlu dilakukan dengan cepat, di mana saya masih belajar mengenal "apa yang saya harus kerjakan", "bagaimana saya mengerjakannya", "dengan orang seperti apa saya sedang bekerja". 

Mengenai apa yang harus saya kerjakan, saya sudah cukup mengenal teknologi yang digunakan oleh proyek TBCare, yaitu setidaknya untuk sprint pertama, React dengan Typescript. Namun, saya belum mengenal detailnya. Saya belum mengenal bagaimana sebuah komponen dibuat dalam proyek ini, belum mengenal fungsionalitas apa saja yang sudah diimplementasi, dan kenapa diimplementasikan dengan cara demikian. Saya seperti harus membaca isi kepala dari kontributor sebelumnya sudah lakukan.

Saya juga harus bekerja dengan orang-orang yang tidak saya kenal seluk-beluknya. Saya perlu mengenal kelemahan dan kekuatan masing-masing, dan saya merasa tidak cukup mengenal mereka dalam waktu 2 minggu ini.

Karena banyak kendala dan kekurangan dalam performa saya dan kelompok, saya ingin mengevaluasinya berdasarkan nilai-nilai dan karakteristik yang ideal dari *Scrum Framework*.

### Dibanding dengan *Agile Manifesto*

Saya perlu *comprehensive documentation*. Saya merasa, website admin [TBCare](https://tbcare.cs.ui.ac.id) adalah *working software* tapi saya butuh "mengapa software ini *works*". Mungkin saja ini kasus khusus, karena TBCare adalah proyek mata kuliah PPL Social-Open Source, yang mana sebelumnya dikerjakan oleh mahasiswa tahun lalu, dan kami (mahasiswa PPL tahun ini) melanjutkan pekerjaan mereka. Yah, mungkin saja saya harus belajar mentrace program baris-per-baris untuk mengetahui mekanismenya. Kagum apabila membayangkan proyek-proyek *open source* di luar sana yang memiliki puluhan bahkan ratusan kontributor, bagaimana cara mereka benar-benar mengerti aplikasi yang mereka sedang kembangkan bersama?

Untuk poin lain dalam Agile Manifesto, saya belum menemukan kendala.

### Dibanding dengan *Scrum Pillars and Values*

> "Saya masih ada masalah nih, *error*nya belum *ilang-ilang*."
> 
> "Saya masih coba-coba memahami *code*-nya."

Kendala yang saya temukan adalah kurangnya aspek *openness* sehingga tidak transparan, sulit melakukan *inspection*, dan tidak siap beradaptasi dengan kemungkinan buruk yang mungkin terjadi (yang sayangnya, pada sprint pertama terjadi).

Yang saya maksud dengan kurangnya *openness* adalah saat anggota tim memiliki kendala, namun tidak mengelaborasikan kendalanya. Saya tidak cukup hanya mendapatkan perkataan "Ya dari saya sih masih ada masalah nih, masih error". Saya butuh kejelasan untuk membantu. Dan selama mereka tidak memberikan kejelasan apapun, saya juga tidak dapat memberikan bantuan apapun. Mungkin juga karena "masalah" tersebut, program yang sudah ditulis tidak kunjung di*commit*. Tidak ada *source code* yang bisa saya inspeksi. Jika demikian, pekerjaan dia terhambat, begitu pula pekerjaan saya. Namun, kekurangan dan kesalahan saya adalah, saya tidak memiliki keberanian (*courage*) untuk menanyakan lebih detail, serta secara pribadi mencoba mengerjakan task mereka untuk tau apakah benar-benar sulit (tidak menerapkan nilai *respect* dan *opennes*).

Kondisi diperparah dengan kondisi server UI yang down! Di bagian selanjutnya saya akan ceritakan apa yang saya lakukan sebagai usaha menanganinya.

### Penerapan *Scrum Events*

Untuk *Scrum Events*, kelompok kami melakukan semuanya, mungkin hanya tidak efektif saja. Misal, setelah *daily scrum meeting* tidak ada *follow-up* lebih lanjut dan masing-masing tidak berkomunikasi lagi mengenai progress dan kendala, dan ternyata, di *meeting* berikutnya, beberapa masih memiliki masalah yang sama.

### Isu-isu lainnya

Beberapa isu lain yang tidak berkaitan dengan Scrum:

1. Saya masih kesulitan menerapkan *best practice TDD* pada *React*. Saya perlu mempelajari lebih lanjut mengenai teknologi yang digunakan untuk melakukan test.
2. Server UI down! Bahkan Gitlab tidak bisa diakses. Saya terpaksa membuat repository baru di gitlab.com agar tetap bisa memberikan perkembangan implementasi. Mungkin di blog selanjutnya jika saya membahas mengenai Git dan Gitlab, saya akan menceritakan lebih detail mengenai apa yang saya lakukan untuk kasus ini, dan apa hal baru yang saya pelajari dari bagaimana Git dan Gitlab bekerja.
3. Pembagian tugas yang saling bergantung. Saya sempat bingung harus melakukan apa lagi karena masih menunggu pekerjaan teman saya yang tidak kunjung selesai.

## Kesimpulan

Mungkin blog ini jadinya lebih ke *curhat* dibandingkan menjelaskan pemahaman saya tentang *Scrum*. Namun, saya bisa belajar banyak dari menulis blog ini. Saya mengevaluasi hal-hal yang masih kurang dan salah dalam bekerja menggunakan kerangka kerja *Scrum* ini. Saya merasa *Scrum* adalah kerangka kerja yang sangat baik, bukan dalam pengembangan software saja, melainkan dapat diterapkan pula di jenis pekerjaan lainnya yang membutuhkan kerja sama tim.

Semoga blog ini (walaupun isinya hanya cerita saya) dapat berguna bagi pembaca sekalian yang mungkin sedang melakukan *Scrum* pula dan punya kendala yang serupa. 

Terima kasih, *have a nice day!*
