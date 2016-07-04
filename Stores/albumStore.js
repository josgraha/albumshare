import { createStore } from 'redux';


const defaultAlbums = [
    {
        name: 'Joe Album 1',
        state: 'private'
    },
];

const defaultState = {
    albums: defaultAlbums,
    filter: 'private',
    filteredAlbums: defaultAlbums,
};

function getFilteredAlbums(allAlbums, filter) {
    return allAlbums.filter(album => album.state === filter);
}

function albums(state = defaultState, action) {
    switch (action.type) {
    case 'SHARE_ALBUM':
        const sharedAlbum = Object.assign({}, action.album, {
                state: 'shared',
            });
        const privateAlbum = Object.assign({}, action.album, {
                state: 'private',
            });
        const allAlbumsContainingShared = state.albums
            .map((album) => {
                return album === action.album ? sharedAlbum : album;
            });
        const allAlbumsContainingPrivate = state.albums
            .map((album) => {
                return album === action.album ? privateAlbum : album;
            });
        return Object.assign({}, state, {
            albums: allAlbumsContainingPrivate,
            filteredTodos: getFilteredAlbums(allAlbumsContainingPrivate, state.filter),
        });
    case 'TOGGLE_STATE':
        const filter = state.filter === 'shared' ? 'private' : 'shared';
        return Object.assign({}, state, {
            filter,
            filteredAlbums: getFilteredAlbums(state.albums, filter),
        });
    default:
        return state;
    }
}

export default createStore(todos);
