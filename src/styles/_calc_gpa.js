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
    alignItems: 'flex-start',
  },
  gpaHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gpaElement: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 8,
  },
  gpaInput: {
    height: 40,
    width: 80,
    backgroundColor: color.darkgray,
    margin: 5,
    color: color.white,
    textAlign: 'center',
    fontSize: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
};