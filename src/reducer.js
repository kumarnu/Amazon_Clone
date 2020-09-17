import { Switch } from "@material-ui/core";

export const initialState ={
    basket: [],  //initial state
    user: null
};

export const getBasketSum = (basket) => basket?.reduce((amount,item) => item.price + amount,0); // method toPulling the data from  
                                                                                            //basket and adding prices in subtotal

const reducer = (state, action) => {  //state = state of the application, action is what action we need to perform
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
        return{
            ...state,
            basket: [...state.basket, action.item],
        };

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[] // make it empty array
            }
        case "REMOVE_FROM_BASKET":
            const index= state.basket.findIndex(
                (basketItem) => basketItem.id ===action.id
            );

            let newBasket = [...state.basket];

            if(index >=0){
                newBasket.splice(index,1);

            }else{
                console.warn('cant remove product (id: ${action.id}) as its not in basket!')
            }

            return{
                ...state, 
                basket: newBasket
            }

            case "SET_USER":
                return{
                    ...state,
                    user:action.user  // user coming from logged in
                }

            default:
                return state;

    }
};

export default reducer;