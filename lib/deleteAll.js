module.exports = function(db, params, options) {
  try {
    db.prepare(`DROP TABLE ${options.table}`).run();
    return true;
  } catch(e) {
    return false;
  }
}
