let one = 0;

const Reduser = (value = one, action) => {
  switch (action.type) {
    case "ADD": {
      return value + 1;
    }
    case "DOWN": {
      return value - 1;
    }
    default: {
      return value;
    }
  }
};
export default Reduser;
