import * as React from 'react';

import HomeScreen from '../screens/Home';
import LibraryScreen from '../screens/Library';
import SearchScreen from '../screens/Search';
import { FontAwesome, Foundation, Ionicons } from '@expo/vector-icons';
import { decideSize } from '../utils';

const SONGS = [
  {
    name: 'Como Estrellas Radio',
    image:
      'https://cdn.dribbble.com/users/59947/screenshots/16144105/media/5a7d651f14cfb76751783dbd9a8de7b1.jpg?compress=1&resize=1200x900',
    subtitle: 'Programa · Iterando Podcast',
  },
  {
    name: 'Éxitos Colombia',
    image:
      'https://cdn.dribbble.com/users/3941202/screenshots/15669115/media/da970931bdf6e4552d69e5c589c8246d.jpg?compress=1&resize=1200x900',
    subtitle: 'Programa · NoSoloTech',
  },
  {
    name: 'Todo Indie',
    image:
      'https://cdn.dribbble.com/users/3941202/screenshots/13913299/media/1739d29445afd8812a8d8041d14a7ab3.png?compress=1&resize=800x600',
    subtitle: 'Programa · NoSoloTech',
  },
  {
    name: 'Música sin copyright',
    image:
      'https://cdn.dribbble.com/users/2089694/screenshots/16135247/media/50e6a4196d33387070fccfa3ab50e67b.png?compress=1&resize=1200x900',
    subtitle: 'Programa · Iterando Podcast',
  },
  {
    name: 'Descubrimiento semanal',
    image:
      'https://cdn.dribbble.com/users/413551/screenshots/15828518/media/43ad8280c9311add74e174c150c807cd.png?compress=1&resize=1200x900',
    subtitle: 'Programa · Iterando Podcast',
  },
  {
    name: 'SGarcia Radio',
    image:
      'https://cdn.dribbble.com/users/413551/screenshots/12484193/media/6d9eba2cae57dd9d38dac2257dafa239.png?compress=1&resize=1200x900',
    subtitle: 'Programa · Iterando Podcast',
  },
];

const TAB_ROUTES = {
  home: {
    name: 'Inicio',
    component: HomeScreen,
  },
  search: {
    name: 'Búsqueda',
    component: SearchScreen,
  },
  library: {
    name: 'Tu biblioteca',
    component: LibraryScreen,
  },
};

const TAB_ICON_SIZE = decideSize(24);

const TAB_ICONS = {
  [TAB_ROUTES.home.name]: (color) => (
    <Foundation name="home" size={TAB_ICON_SIZE} color={color} />
  ),
  [TAB_ROUTES.search.name]: (color) => (
    <FontAwesome name="search" size={TAB_ICON_SIZE} color={color} />
  ),
  [TAB_ROUTES.library.name]: (color) => (
    <Ionicons name="ios-library" size={TAB_ICON_SIZE} color={color} />
  ),
};

export { SONGS, TAB_ROUTES, TAB_ICONS };
