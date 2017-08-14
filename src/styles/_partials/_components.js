const color = require('./_colors');

module.exports = {
  // button component styling
  button: {
    alignItems: 'center',
    margin: 2,
  },
  buttonText: {
    padding: 30,
    fontSize: 30,
    color: color.black,
    textAlign: 'center',
  },
  // InputStepper styling
  inputStepperContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 90,
    height: 40,
    margin: 10,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: color.black,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputStepperIncrease: {
    width: 30,
    borderRightWidth: .5,
  },
  inputStepperDecrease: {
    width: 30,
    borderLeftWidth: .5,
  },
  inputStepperControlText: {
    width: 30,
    fontSize: 20,
    padding: 10,
  },
  inputStepperValue: {
  },
  // LevelCard styling
  levelCard: {
    borderWidth: 1,
    borderColor: color.black,
    // margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 5,
  },
  levelTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,
  },
  semesterRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  semester: {
    flexGrow: 1,
    fontSize: 16,
  },
  semesterInput: {
    flexGrow: 2,
    padding: 10,
    textAlign: 'center',
    color: color.grey,
    fontSize: 16,
  },
};
