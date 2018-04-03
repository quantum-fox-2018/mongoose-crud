const oneDay = 24 * 60 * 60000

module.exports = {
  getDueDate: function(outDate, days) {
    let dueDate = new Date(+new Date(outDate) + days * oneDay)

    return dueDate
  },

  calculateFine: function(dueDate, inDate) {
    let fine = 0
    inDate = new Date(inDate)
    let diffDay = Math.round((inDate.getTime() - dueDate.getTime()) / oneDay)

    if (diffDay > 0) {
      fine = diffDay * 1000
    }

    return fine
  }
}