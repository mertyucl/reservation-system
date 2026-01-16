const Reservation = require("../models/reservationModel");

// CREATE
exports.createReservation = (req, res) => {
  const { name, date, time, people } = req.body;

  // İş Kuralı 1: Geçmiş tarihli rezervasyon yapılamaz
  const today = new Date();
  const reservationDate = new Date(date);

  if (reservationDate < today) {
    return res
      .status(400)
      .json({ message: "Geçmiş tarihli rezervasyon yapılamaz" });
  }

  // İş Kuralı 2: Aynı tarih ve saatte çakışan rezervasyon olamaz
  Reservation.checkConflict(date, time, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Veritabanı hatası" });
    }

    if (results.length > 0) {
      return res
        .status(400)
        .json({ message: "Bu tarih ve saatte başka bir rezervasyon mevcut" });
    }

    // Çakışma yoksa oluştur
    Reservation.create({ name, date, time, people }, (err) => {
      if (err) {
        return res.status(500).json({ message: "Veritabanı hatası" });
      }

      res.status(201).json({ message: "Rezervasyon oluşturuldu" });
    });
  });
};

// READ
exports.getReservations = (req, res) => {
  Reservation.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Veritabanı hatası" });
    }
    res.json(results);
  });
};

// UPDATE
exports.updateReservation = (req, res) => {
  const { id } = req.params;

  Reservation.update(id, req.body, (err) => {
    if (err) {
      return res.status(500).json({ message: "Güncelleme hatası" });
    }
    res.json({ message: "Rezervasyon güncellendi" });
  });
};

// DELETE
exports.deleteReservation = (req, res) => {
  const { id } = req.params;

  Reservation.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ message: "Silme hatası" });
    }
    res.json({ message: "Rezervasyon silindi" });
  });
};

