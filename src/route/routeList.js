import LandingPage  from '../client/pages/landingPage';
import AddPlayer from '../client/pages/addPlayer';
import PlayGame from '../client/pages/gameScreen';

export const RouteList = [
    {
        path: '/dashboard',
        component: LandingPage,
    },
    {
        path: '/add-Player',
        component: AddPlayer,
    },
    {
        path: '/start-Game/:player1/:player2/:rounds',
        component: PlayGame,
    },
]