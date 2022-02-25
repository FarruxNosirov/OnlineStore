const initialState = []

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddBasket": {
      return [...state, action.product];
    }
    case "RemovBasket": {
      return [...state].filter((item,index)=>{
          return (index)!==(action.payloud)
      }) ;
    }
    default: {
      return state;
    }
  }
};
export default counterReducer;
