import{
    ALBUM_CREATE
} from '../actions/types'

const INITIAL_STATE ={
    caption: '',
    image: ''    
};

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ALBUM_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}