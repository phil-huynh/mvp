const db = require('./index.js')

module.exports = {

  addNotes: (user, body) => {
    return db.pool.query(
      `INSERT INTO chordnotes (username, body)
      VALUES (${user}, ${body})`
    )
  }
}