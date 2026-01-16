### Reservation System API ###


## Proje/Ödev Açıklaması

Bu proje, Sunucu Tabanlı Programlama dersi kapsamında Node.js kullanılarak geliştirilmiş bir Rezervasyon / Randevu Yönetim Sistemi'dir. Uygulama, MVC (Model-View-Controller) mimarisine uygun olarak tasarlanmış, REST prensiplerine uygun API uç noktaları içermektedir.

(KSD dersimi ve ders kapsamında yapmış olduğum projeyi geçmiş senelerde yapıp tamamladığımdan dolayı elimde projenin kodları bulunmamaktadır. Bu nedenle özellikle MVC mimarisine uygun, CRUD işlemlerini doğal bir şekilde gerçekleştirebileceğim restoran rezervasyon sistemi üzerinden bir çalışma yapmak istedim.)

---

## Kullanılan Teknolojiler

* Node.js
* Express.js
* MySQL
* dotenv

---

## Proje Klasör Yapısı

```
reservation-system/
│
├─ src/
│   ├─ controllers/
│   │   └─ reservationController.js
│   ├─ models/
│   │   └─ reservationModel.js
│   ├─ routes/
│   │   └─ reservationRoutes.js
│   ├─ config/
│   │   └─ db.js
│   ├─ app.js
│   └─ server.js
│
├─ .env
├─ .env.example
├─ package.json
├─ package-lock.json
└─ README.md

```

---

##  Kısa Senaryo Tanımı

Sistem bir restoran veya işletme için rezervasyonların yönetilmesini sağlar. Kullanıcılar API aracılığıyla rezervasyon ekleyebilir, mevcut rezervasyonları listeleyebilir, güncelleyebilir ve silebilir. 

---

## İş Kuralları

Projede aşağıdaki iş kuralları uygulanmıştır:

1. Geçmiş Tarihli Rezervasyon Oluşturulamaz.
2. Aynı tarih ve saatte birden fazla rezervasyon yapılamaz.

Bu iş kuralları controller katmanında kontrol edilmekte ve ihlal durumunda istemciye uygun hata mesajı döndürülmektedir.

---

## API Endpoint Listesi

| HTTP Metodu | Endpoint              | Açıklama                     |
| ----------- | --------------------- | ---------------------------- |
| POST        | /api/reservations     | Yeni rezervasyon ekler       |
| GET         | /api/reservations     | Tüm rezervasyonları listeler |
| PUT         | /api/reservations/:id | Rezervasyon günceller        |
| DELETE      | /api/reservations/:id | Rezervasyon siler            |

---

## Veritabanı Yapısı (ER Diyagram Açıklaması)

**reservations** tablosu aşağıdaki alanlardan oluşmaktadır:

* id (INT, Primary Key, Auto Increment)
* name (VARCHAR)
* date (DATE)
* time (TIME)
* people (INT)

Bu yapı, rezervasyon bilgilerini saklamak için kullanılmıştır ve model katmanı bu tablo üzerinden işlem yapmaktadır.

---

## Kurulum Adımları

1. Proje dosyaları bilgisayara indirildikten sonra proje klasörü açılır.

2. Terminal veya PowerShell üzerinden proje klasörüne girilir.

3. Gerekli paketlerin yüklenmesi için aşağıdaki komut çalıştırılır:

```
npm install
```

4. Proje ana dizininde `.env` dosyası oluşturulur ve veritabanı bilgileri girilir:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
```

5. MySQL üzerinde `reservation_db` isimli veritabanı ve `reservations` tablosu oluşturulur.

6. Aşağıdaki komut ile uygulama çalıştırılır:

```
node src/server.js
```

---

## Sonuç & Özet

Bu ödev/proje Sunucu Tabanlı Programlama dersi kapsamında, ders boyunca işlenen konular dikkate alınarak geliştirilmiştir. Ödev hazırlanırken MVC mimarisi, REST prensipleri ve temel iş kuralları uygulanmaya çalışılmıştır.


