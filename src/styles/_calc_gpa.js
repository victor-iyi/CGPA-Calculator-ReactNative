import color from './_partials/_colors';

/**
 ***********************************
 *        Custom StyleSheet        *
 ***********************************
 */
export default {

  // CalcGPA Page Styling
  calcGPAContainer: {
    marginTop: 10,
    marginBottom: 50,
  },
  gparow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: color.grey,
    borderBottomWidth: .5,
    marginBottom: 10,
    padding: 5,
  },
  courseLabel: {
    fontSize: 20,
  },
  calcButton: {
    marginBottom: 30,
  },
};