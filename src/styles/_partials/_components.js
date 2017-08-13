const color = require('./_colors');

module.exports = {
  // button component styling
  button: {
    width: 95,
    height: 95,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 2,
  },
  buttonText: {
    padding: 30,
    fontSize: 30,
    color: color.black,
    textAlign: 'center',
  },
  // InputStepper stylign
  inputStepperContainer: {
    flex: 1,
    flexDirection: 'row',
    // width: 90,
    height: 30,
    margin: 15,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: color.black,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 40,
    fontWeight: 'normal',
  },
  inputStepperValue: {
  },

};
