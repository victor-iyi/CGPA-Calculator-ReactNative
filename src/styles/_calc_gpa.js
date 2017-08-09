const color = require('./_partials/_colors');

/**
 ***********************************
 *        Custom StyleSheet        *
 ***********************************
 */
module.exports = {

  // CalcGPA Page Styling
  gparow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: color.grey,
    borderBottomWidth: .5,
    marginBottom: 10,
    padding: 5,
  },
  gpaHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gpaGrade: {
    borderWidth: .5,
    borderColor: color.grey,
    width: 50,
  }
};