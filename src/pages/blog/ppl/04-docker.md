---
title: 'Blog#4 Jalankan Aplikasi di mana pun dengan Docker'
published: 2021-04-27
summary: Pengenalan tentang docker dan manfaatnya, dicontohkan pada aplikasi NodeJS.
layout: blog
---

<div slot="toc">

- [Apa itu Container dan Docker?](#apa-itu-container-dan-docker)
- [Terminologi](#terminologi)
- [Membuat Dockerfile](#membuat-dockerfile)
- [Build Docker Image dari Dockerfile](#build-docker-image-dari-dockerfile)
- [Menjalankan Docker Container](#menjalankan-docker-container)
- [Bacaan lebih lanjut:](#bacaan-lebih-lanjut)

</div>


*Dependency conflict* adalah keadaan di mana aplikasi yang mau dijalankan, baik untuk *development* maupun *production* tidak dapat berjalan karena masalah *dependency* seperti *dependency* yang belum terinstall secara baik dan lengkap, perbedaan versi dependency, dsb. Masalah tersebut bisa timbul dikarenakan beberapa hal, salah satunya adalah perbedaan hardware. Contoh paling sederhana adalah jika mesin yang dipakai oleh developer untuk development adalah mesin bersistem operasi Windows, sedangkan server tempat mendeploy aplikasi menjalankan Ubuntu Server. Beberapa *script* yang dibuat spesifik untuk Windows (contohnya *script* dengan ekstensi `.bat`) tidak akan berjalan pada Ubuntu Server, begitu juga sebaliknya, `bash` script tidak akan berjalan di Windows.

Salah satu solusi dari permasalahan di atas adalah dengan memanfaatkan *Docker Container*. Blog kali ini menjelaskan secara singkat apa itu docker, dan bagaimana memakainya.

Tulisan ini sebagian besar terinspirasi dan bersumber dari tutorial di YouTube oleh [fireship.io](https://fireship.io) berjudul [Learn Docker in 7 Easy Steps - Full Beginner's Tutorial](https://youtu.be/gAkwW2tuIqE.).

# Apa itu Container dan Docker?

*Container* adalah sebuah *process* yang berjalan di atas Operating System, sehingga selevel dengan *process* aplikasi. *Container* bertujuan sebagai pembungkus untuk process lain, yang salah satu kegunaannya adalah sebagai penyedia dependency. Normalnya, aplikasi berjalan langsung di atas Operating System, sehingga semua dependency disediakan oleh Operating System. Jadi semisal kita memiliki aplikasi NodeJS dengan library ExpressJS sebagai dependency-nya, kita perlu menginstall dependency tersebut pada mesin kita (dalam kasus ini mungkin tidak harus diinstall di OS, `npm install` dapat mendownload library dan memasukkannya ke dalam direktori `node_modules`, lalu semua code yang memerlukannya melakukan import ke file libary yang diinginkan). Dengan adanya *containerization*, *process-process* sebuah aplikasi dibungkus oleh *container process* sehingga *dependency* dan *environtment variable* yang digunakan adalah yang disediakan oleh *container*, bukan OS. Sederhananya, dari sudut pandang aplikasi, *container* berperan sebagai "pengganti" OS. Tentunya pengandaian tersebut kurang tepat, karena  *container process* pun berjalan di atas OS.

Mengapa *containerization* diperlukan? Tentu saja anda tidak harus melakukan *containerization*. *Containerization* dilakukan untuk menyelesaikan masalah, jika masalahnya tidak sedang dirasakan oleh developer, maka mereka tidak perlu melakukan *containerization*. Anda tidak perlu melakukan *containerization* jika:

1. Anda dan teman setim anda dalam sebuah project bersepakat untuk memakai mesin dengan jenis dan OS yang sama dengan server tempat mendeploy.
2. Anda dan teman setim anda dalam sebuah project bersepakat untuk melakukan modifikasi yang sama jika diperlukan.
3. Anda dan teman setim anda dalam sebuah project bersepakat untuk menginstall software yang sama dengan versi yang sama pula yang berkaitan dengan project ini.

dan kesepakatan-kesepakatan lainnya. Tentunya, kesepakatan di atas sulit diterapkan karena terlalu membatasi kebebasan developer. Oleh karena itu, *containerization* diperlukan sebagai salah satu solusi. Tentunya ada solusi-solusi lain, dan sebagaian besar framework sudah mencoba supaya masalah dependency tidak terjadi (contohnya, dengan mengunduh library yang dilakukan NodeJS dan sebagian besar package manager lain, atau untuk python adalah menggunakan virtual environtment). *Containerization* akan sangat berguna jika anda sudah banyak melakukan modifikasi pada framework yang anda pakai supaya cocok dengan workflow project anda. *Containerization* juga cocok digunakan untuk project-project besar yang perlu menjamin setiap processnya berjalan pada environtment yang tepat.

... Oh ya! Sederhananya, docker adalah salah satu tools untuk melakukan *containerization*. Terima kasih sudah mengingatkan.

# Terminologi

- Dockerfile: Sebuah *"blueprint"* untuk merancang docker image.
- Image: template docker container yang menyimpan *dependency* dan *environtment variable*.
- Container: sebuah process yang menggunakan template dari docker image

# Membuat Dockerfile

Seperti yang sudah kita sebutkan di atas, Dockerfile adalah *"blueprint"* untuk merancang docker image. Dockerfile nantinya akan dipakai untuk men*generate* docker image yang bisa dipublikasikan untuk dipakai oleh orang lain. Dockerfile dapat dibuat menggunakan image yang sebelumnya sudah ada. Inilah keuntungan memakai docker, yaitu docker image yang bisa dibagikan dan dipakai di berbagai project, bahkan bisa dijadikan dasar docker image yang lain.

Di bawah ini adalah contoh Dockerfile untuk sebuah aplikasi NodeJS.

```dockerfile
# base image, di bawah ini memakai docker image official dari NodeJS
FROM node:12

# working directory
WORKDIR /app

# copy package*.json ke direktori saat ini (wroking directory, => /app)
COPY package*.json ./

# Melakukan instalasi dependency
RUN npm install

# copy semua source code ke current working directory
COPY . .

# environtment variable*
ENV PORT=8080

# Port yang diekspose supaya bisa diakses oleh public
EXPOSE 8080

# command yang ingin dijalankan, dengan format exec form => perintah terminal dipisah menjadi array of token
CMD [ "npm", "start" ] 
```

Tentunya, pada perintah `COPY`, kita belum tentu ingin menyalin semua source code. Ada beberapa hal yang tidak kita ingin copy, seperti hasil built dan library dependency karena nantinya pun akan diinstall kembali. Untuk itu, kita dapat membuat file `.dockerignore` dengan penulisan format sama seperti menulis `.gitignore`. 

Contoh di bawah ini adalah `.dockerignore` untuk mengignore `node_module`

```
node_modules
```

# Build Docker Image dari Dockerfile

Gunakan perintah `docker build`. Flag `-t` digunakan untuk memberi nama dari docker image yang dibuat.

```console
docker build -t <dockerhub_username>/<nama_app>:<version_number> <path_ke_dockerfile>
```

Contohnya seperti ini:

```console
docker build -t tbcare/backend:1.0 .
```

Setelah docker image berhasil dibuat, docker image tersebut dapat dijadikan *base* dari docker image lain, atau diunggah ke *container registry* seperti *dockerhub*. Tentunya, docker image bisa dipakai untuk menjalankan *container* pada aplikasi anda.

Gunakan perintah `docker push` untuk mengirim image ke container registry, `docker pull` untuk mengunduh dan menggunakan docker image lain dari registry ke mesin lokal.

# Menjalankan Docker Container

Dengan adanya docker image, kita sudah bisa menjalankan docker container. Gunakan perintah `docker run`. Lalu, kita perlu memahami bahwa docker container pun adalah sebuah process yang berjalan di mesin lokal sehingga docker container pun memakai sebuah port dari komputer anda. Namun, di dalam Dockerfile yang kita buat, kita mengekspos sebuah port. Port tersebut bukanlah milik komputer lokal anda, tetapi milik docker container. Dengan menjalankan docker container, anda memiliki sebuah set port baru yang tidak sama seperti post komputer lokal anda.

Kita akan memanfaatkan fitur *port forwarding*, di mana anda melakukan pemetaan dari sebuh port di komputer lokal anda ke port pada docker container. Gunakan flag `-p`. 

Berikut adalah formatnya.

```
docker run -p <port_lokal>:<docker_port_yang_diekspos> <image-id>
```

Contoh, jika dijalankan seperti di bawah ini,

```
docker run -p 5000:8080 <image-id>
```

maka yang terjadi ialah saat anda membuka `localhost:5000`, akan diarahkan ke port `8080` milik docker container.

Untuk mengetahui process yang berjalan pada docker, gunakan perintah `docker ps`.

# Bacaan lebih lanjut:

- [Blog Fireship.io tentang Docker](https://fireship.io/lessons/docker-basics-tutorial-nodejs/)
- [What is Container dari website resmi Docker](https://www.docker.com/resources/what-container)