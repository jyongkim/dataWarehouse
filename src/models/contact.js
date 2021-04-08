let dbConn = require('../dataBase/dbConn')

let Contact = function(contact) {
    this.first_name = contact.first_name
    this.last_name = contact.last_name
    this.doc_type = contact.doc_type
    this.doc_num = contact.doc_num
    this.position = contact.position
    this.interest = contact.interest
    this.id_city = contact.id_city
}

Contact.create = (id, newContact, result) => {
    dbConn.query('INSERT INTO Contacts SET ?, id_company = ?', [newContact, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.read = (id, result) => {
    dbConn.query('SELECT * FROM Contacts WHERE id_company = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.find = (id, contact, result) => {
    dbConn.query('SELECT * FROM Contacts WHERE id_company = ? AND doc_num = ? AND id_city = ?', [id, contact.doc_num, contact.id_city], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.update = (id, user, result) => {
    dbConn.query('UPDATE Contacts SET ? WHERE id_contact = ?', [user, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.delete = (id, result) => {
    dbConn.query('DELETE FROM Contacts WHERE id_contact = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

module.exports = Contact;