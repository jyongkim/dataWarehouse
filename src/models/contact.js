let dbConn = '';

let Contact = function(contact) {
    this.first_name = contact.first_name
    this.last_name = contact.last_name
    this.position = contact.position
    this.interest = contact.interest
    this.id_city = contact.id_city
}

Contact.create = (id, newContact, result) => {
    dbConn.query('INSERT INTO Contacts SET ? WHERE id_company = ?', [newContact, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.read = (id, result) => {
    dbConn.query('SELECT * FROM Contacts WHERE id_company = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.find = (id, result) => {
    dbConn.query('SELECT * FROM Contacts WHERE id_company = ? AND (user_name LIKE ? OR last_name LIKE ?)', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.update = (id, user, result) => {
    dbConn.query('UPDATE Contacts SET ? WHERE id_user = ?', [user, id], (err, res) => {
        err ? result(err, null) : result(null, res)
})}

Contact.delete = (id, result) => {
    dbConn.query('DELETE FROM Contacts WHERE id_user = ?', id, (err, res) => {
        err ? result(err, null) : result(null, res)
})}