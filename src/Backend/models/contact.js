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
    dbConn.query(
        `SELECT 
            CONCAT(CON.last_name," " ,CON.first_name) AS Contactos,
            CONCAT(COUN.country, " - ", R.region) AS "País / Región",
            COM.company AS Compañía,
            CON.position AS Cargo,
            GROUP_CONCAT(CC.channel) AS "Canal preferido",
            CON.interest AS Interés    
                FROM contact_preferences AS CP
                    JOIN contacts AS CON ON CON.id_contact = CP.id_contact
                    JOIN companies AS COM ON COM.id_company = CON.id_company
                    JOIN users AS U ON U.id_user = COM.id_user
                    JOIN contact_channel AS CC ON CC.id_channel = CP.id_channel
                    JOIN cities AS C ON C.id_city = CON.id_city
                    JOIN countries AS COUN ON COUN.id_country = C.id_country
                    JOIN regions AS R ON R.id_region = COUN.id_region
                GROUP BY CP.id_contact
                ORDER BY CON.last_name;`,
id, (err, res) => err ? result(err, null) : result(null, res)
)}

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