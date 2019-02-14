import {DrawerNavigator} from 'react-navigation';
import Profile from './Profile';
import AlbumList from './AlbumList';

export default DrawerNavigator(
    {
        AlbumList:{
            screen: AlbumList
        },
        Profile:{
            screen : Profile
        }
    },
    {
        initialRouteName: 'AlbumList',
        headerMode: 'none'
    }
)