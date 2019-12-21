import{ type as findResultsType } from '../actions/findResults';
import items from '../../data/items';
const defaultState = [];

const reducer = ( state = defaultState, { type, payload } ) => {
    switch(type){
        case findResultsType: {
            const regex =  new RegExp(`^${payload}`, 'i');
            return items.filter(n => regex.test(n.name))
        }
        default: 
            return state;
    }
}

export default reducer; 