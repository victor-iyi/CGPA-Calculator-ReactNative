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
    width: 40,
    // backgroundColor: color.blueviolet,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
};