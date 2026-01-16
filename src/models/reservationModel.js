const db = require("../config/db");

const Reservation = {
  create: (data, callback) => {
    const sql =
      "INSERT INTO reservations (name, date, time, people) VALUES (?,?,?,?)";
    db.query(sql, [data.name, data.date, data.time, data.people], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM reservations";
    db.query(sql, callback);
  },

  update: (id, data, callback) => {
    const sql =
      "UPDATE reservations SET name=?, date=?, time=?, people=? WHERE id=?";
    db.query(sql, [data.name, data.date, data.time, data.people, id], callback);
  },

  delete: (id, callback) => {
    const sql = "DELETE FROM reservations WHERE id=?";
    db.query(sql, [id], callback);
  },

  // 🔴 2. iş kuralı için ÇAKIŞMA KONTROLÜ
  checkConflict: (date, time, callback) => {
    const sql =
      "SELECT id FROM reservations WHERE date = ? AND time = ?";
    db.query(sql, [date, time], callback);
  }
};

module.exports = Reservation;

