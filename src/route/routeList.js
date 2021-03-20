import AddPlayer from '../client/pages/addPlayer';
import PlayGame from '../client/pages/gameScreen';
import Dashboard from '../client/pages/dashboard';

export const RouteList = [
    {
        path: '/add-Player',
        component: AddPlayer,
    },
    {
        path: '/start-Game/:player1/:player2/:rounds/:start',
        component: PlayGame,
    },
    {
        path: '/',
        component: Dashboard,
    },
]