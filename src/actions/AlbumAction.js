import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import {
    ALBUM_CREATE,
    ALBUM_GETLIST_SUCCESS
} from './types'

export const albumCreate = (caption,image) =>{
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.id}/album`)
        .push({caption,image})
        .then(()=>{
            dispatch({type: ALBUM_CREATE})
        });
    };
};

export const getAlbumList = () =>{
    const {currentUser} = firebase.auth();

    return( dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/album`)
        .on('value', snapshot=>{
            console.log('dari actions: '+ snapshot.val());
            dispatch({type: ALBUM_GETLIST_SUCCESS, payload: snapshot.val()})
        })
    }
}