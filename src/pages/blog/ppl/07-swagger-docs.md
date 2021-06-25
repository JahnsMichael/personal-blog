---
title: 'Blog#7 Dokumentasi API dengan *Swagger Documentation*'
published: 2021-06-25
summary: Catatan dan tutorial menambahkan Swagger Documentation pada Django REST Framework
layout: blog
---

<div slot="toc">

- [Mengapa membuat dokumentasi?](#mengapa-membuat-dokumentasi)
- [Dokumentasi Django REST Framework dengan Swagger Documentation](#dokumentasi-django-rest-framework-dengan-swagger-documentation)
  - [Setup](#setup)
  - [Hasil](#hasil)
- [Kesimpulan](#kesimpulan)

</div>

# Mengapa membuat dokumentasi?

Pada [blog sebelumnya](./02-scrum#dibanding-dengan-agile-manifesto) mengenai penerapan *Scrum Framework*, saya menuliskan kalimat berikut ini:

> Saya perlu *comprehensive documentation*. Saya merasa, website admin [TBCare](https://tbcare.cs.ui.ac.id) adalah *working software* tapi saya butuh "mengapa software ini *works*".

Pada saat itu saya mencoba membandingkan pengalaman saya dengan Agile Manifesto, secara khusus untuk poin ini:

> **Working software** over **comprehensive documentation**

Saya tidak mengatakan bahwa poin Agile Manifesto tersebut salah, melainkan saya *masih* membutuhkan dokumentasi, dan saya yakin *developer* lain juga demikian.

Dokumentasi adalah hal yang perlu dilakukan, terlebih lagi jika pada suatu proyek terdapat ciri-ciri di bawah ini:
- Satu *service* API dipakai untuk beberapa aplikasi *Front End*.
- *Open-source*, melibatkan banyak *developer* lain dengan workflow dan paradigma *programming* yang berbeda.
- Akan dilanjutkan oleh tim developer atau maintainer selanjutnya.

Aplikasi TBCare memenuhi 3 ciri di atas sehingga dokumentasi teknis adalah hal yang penting.

Informasi yang menurut saya perlu ada dalam dokumentasi adalah:
- Setup *development environment*.
- Cara menjalankan aplikasi untuk tahap *development*.
- Cara menjalankan aplikasi untuk tahap *production*.
- Cara *deployment*.
- Detail API : list tiap *endpoint* dan *field-field* yang perlu diisi.
- Detail *Front End* : list tiap page dan komponen serta *property* yang dapat diberikan kepada komponen tersebut.

Beberapa cara untuk membuat dokumentasi teknis untuk suatu project adalah sebagai berikut:
- Membuat README di repository, dokumentasi seperti ini wajib dimiliki, minimal perlu mencakup sampai bagaimana aplikasi bisa berjalan.
- Membuat dokumen PDF yang berisikan dokumentasi teknis, sifatnya publik atau dapat diakses oleh developer selanjutnya.
- Membuat dokumentasi interaktif yang dapat langsung dicoba di aplikasi yang sedang berjalan dalam mode debug.
  - Untuk *Front End*, dapat menggunakan *tools* seperti [Storybook](https://storybook.js.org/)
  - Untuk API, dapat menggunakan *tools* seperti [Swagger](https://swagger.io/)

Pada blog ini saya akan fokus membahas cara membuat dokumentasi teknis untuk Django REST Framework API (stack Backend yang digunakan pada aplikasi TBCare) menggunakan Swagger.


# Dokumentasi Django REST Framework dengan Swagger Documentation

*Swagger Documentation* adalah *tools* untuk membuat dokumentasi pada REST API. Hasil akhir dari dokumentasi Swagger adalah terdapat *endpoint* khusus yang berisikan list semua endpoint yang tersedia pada aplikasi REST API serta bersifat interaktif, artinya developer dapat mencoba secara langsung membuat request tanpa bantuan aplikasi semacam *curl* dan *Postman*, walaupun dibalik layar yang dilakukan Swagger adalah menjalankan *curl*.

## Setup

Pada dasarnya Swagger hanya menyediakan library untuk menambahkan dokumentasi dan semua dokumentasi harus dibuat sendiri. Namun terdapat *library* yang dapat diinstall dengan `pip` yang dapat secara otomatis men-*generate* dokumentasi dari tiap endpoint yang ada pada aplikasi Django REST Framework. *Library* bernama `drf-yasg` yang adalah singkatan dari *Django REST Framework - Yet Another Swagger Generator*.

Pertama-tama kita perlu menginstall `drf-yasg`. Jalankan perintah di bawah ini.

```bash
pip install `drf-yasg`
```

Bisa juga menambahkan `drf-yasg==1.20.0` (`1.20.0` adalah versi terbaru dari `drf-yasg` pada saat blog ini ditulis) ke `requirements.txt` lalu jalankan perintah di bawah ini.

```bash
pip install -r requirements.txt
```

Selanjutnya, kita perlu menambahkan `drf-yasg` sebagai aplikasi yang terinstall di project Django. Tambahkan `drf-yasg` pada bagian `INSTALLED_APPS` di file `settings.py`.

```python
INSTALLED_APPS = [
    # ... apps sebelumnya
    "drf-yasg",
]
```

Jika aplikasi kita memiliki metode *authentication* dan *authorization* tertentu, maka ada variable baru yang perlu ditambahkan di `settings.py`.

```python
LOGIN_URL = "/auth/token/" # sesuaikan dengan login url anda
SWAGGER_SETTINGS = {
    "SECURITY_DEFINITIONS": {
        "Token": {"type": "apiKey", "in": "header", "name": "Authorization"} # sesuaikan dengan metode auth anda
    },
    "USE_SESSION_AUTH": False, # jika anda tidak memakai session auth dari django
}
```

Dengan ini, aplikasi `drf-yasg` bisa dijalankan di aplikasi anda. Namun kita perlu mendaftarkan endpoint mana yang dapat dipakai untuk melihat dokumentasi. Daftarkan satu endpoint di `{project_dir}/urls.py`.

```py
from django.conf import settings
from django.conf.urls import url
from rest_framework import permissions

# swagger
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

urlpatterns = [
# ...
# ... url patterns yang sudah ada
# ...
]

schema_view = get_schema_view(
    openapi.Info(
        title="Your App Title",    # Sesuaikan dengan nama aplikasi anda
        default_version="v1",      # Sesuaikan dengan nomor versi aplikasi anda
        description="Your app description", # Sesuaikan dengan deskripsi aplikasi anda
        license=openapi.License(name="Your App License"), # Sesuaikan dengan license aplikasi anda
    ),
    public=True, # Dokumentasi ini di set publik
    permission_classes=(permissions.AllowAny,), # Dapat dibuka oleh siapapun
)

# Pastikan di settings.py ada variable DEBUG, url didaftakan hanya pada saat DEBUG=True.
if settings.DEBUG: 
    urlpatterns.append(
        # Versi json
        url(
            r"^docs(?P<format>\.json|\.yaml)$",
            schema_view.without_ui(cache_timeout=0),
            name="schema-json",
        )
    )
    urlpatterns.append(
        # Versi UI
        url(
            r"^docs/$",
            schema_view.with_ui("swagger", cache_timeout=0),
            name="schema-swagger-ui",
        )
    )
    urlpatterns.append(
        # Versi redoc
        url(
            r"^redoc",
            schema_view.with_ui("redoc", cache_timeout=0),
            name="schema-redoc",
        )
    )

```

Terdapat beberapa versi dokumentasi yang disediakan oleh Swagger. Perbedaannya dapat dilihat di bagian [hasil](#hasil) setelah ini.

`drf-yasg` mengenerate request body dan response data dari serializer yang dipakai dari tiap `ViewSets`. Jika anda memakai `GenericViewSets` dan semua class yang meng-`extends` GenericViewSets, maka pasti terdapat `serializer_class` yang dipakai dan method `get_serializer_class`. `drf-yasg` bergantung pada method `get_serializer_class`. Jika tidak ada, maka anda perlu membuatnya supaya request body dapat muncul pada dokumentasi.

Untuk class-class yang memiliki atribut `serializer_class` namun tidak memiliki method `get_serializer_class`, anda dapat melakukan hal berikut ini.

```python
# Tambahkan import
from drf_yasg.utils import swagger_auto_schema
# Import juga serializer anda jika belum
from your.serializer import YourSerializer

class YourView(APIView): # class anda, yang disini hanya contoh penamaan

    # Tambahkan decorator swagger_auto_schema
     @swagger_auto_schema(
        request_body=YourSerializer
    )
    def post(self, request):
        # fungsi endpoint anda
```

Anda dapat melakukan setting manual terhadap schema yang dipakai di masing-masing endpoint. Lebih lengkapnya, dapat dilihat di [dokumentasi `drf-yasg`](https://drf-yasg.readthedocs.io/en/stable/custom_spec.html).

## Hasil

Berikut adalah tampilan `swagger-ui`:

![Swagger UI](/images/blogppl/swagger-ui.png)

Berikut adalah tampilan `swagger-redocs`:

![Swagger Redocs](/images/blogppl/swagger-redocs.png)

Selanjutnya, anda dapat memakai Swagger seperti memakai Postman namun tidak perlu lagi memasukkan url yang ingin dituju. Anda juga dapat melakukan *authentication* dengan memasukkan token ke bagian *Authorize*.

Selain dokumentasi yang digenerate oleh `drf-yasg`, anda juga bisa menambahkan docstring di setiap class `ViewSets` untuk menambahkan catatan tambahan. Docstring yang ditampilkan support untuk format text markdown.

# Kesimpulan

Walau dokumentasi bukanlah fokus dari pengembangan aplikasi, namun dokumentasi perlu dibuat untuk memudahkan developer lain baik di dalam maupun di luar tim (jika *open-source*). Dokumentasi membuat developer lebih produktif karena tidak perlu bertanya-tanya mengenai hal-hal kompleks yang dikerjakan developer lain. Dengan tools seperti Swagger, developer dapat fokus mengembangkan aplikasi tanpa memperdulikan dokumentasi, namun dokumentasi tetap akan digenerate dengan informasi default yang cukup baik.