import React from 'react';
import './index.css';
import Header from './components/Header';
import TopNavBar from './components/TopNavBar';
import './components/sidebar.css';
import SideBar from './components/SideBar';
import ProductPage from './components/VideoGame';
import './components/videogames.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';

const videoGames = [
  {
      icon: 'url(https://media3.spiralknights.com/wiki-images/8/8d/Icon-sword.png)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://i.ytimg.com/vi/mUEv7unHQKI/maxresdefault.jpg)',
      name: 'Spiral Knights',
      link: 'spiral-knights',
      windows: true,
      mac: true
  },
  {
      icon: 'url(https://steamuserimages-a.akamaihd.net/ugc/860612455486950246/A1754BD654E7AF9A5B867BC031AF0D155B7DB76C/)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://image.jeuxvideo.com/medias-md/157683/1576825228-1639-card.jpg)',
      name: 'Age of Empires II: Definitive Edition',
      link: 'age-of-empire-ii-definitive-edition',  
      windows :true
  },
  {
      icon:'url(https://lh5.ggpht.com/A2tnYb18vL2QCbdCA0n4ktYxOsUUf6mtiF7RCFYW8aNE2dmbI6SL57t6KFr7A3StR6E=w300)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheBindingOfIsaacAfterbirthPlus.jpg)',
      name:'The Binding of Isaac: Rebirth',
      link:'the-binding-of-isaac-rebirth',
      active: true,
      windows: true,
      mac: true
  },
  {
      icon:'url(https://images-eu.ssl-images-amazon.com/images/I/61-3e-uL7VL.png)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://hollowknight.com/wp-content/uploads/2018/09/false_knight.jpg)',
      name:'Hollow Knight',
      link:'hollow-knight',
      windows: true,
      mac: true
  },
  {
      icon:'url(https://steamcdn-a.akamaihd.net/steam/apps/653530/capsule_616x353.jpg?t=1560608077)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://steamcdn-a.akamaihd.net/steam/apps/653530/capsule_616x353.jpg?t=1560608077)',
      name:'Return of the Obra Dinn',
      link:'return-of-the-obra-dinn',
      windows: true,
      mac: true
  },
  {
      icon:'url(https://b.thumbs.redditmedia.com/amAIbUWu332-u03vktDnwKH1BkJbYVuP8q3OtNZrTPM.png)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://media.senscritique.com/media/000017163904/source_big/Realm_Grinder.png)',
      name:'Realm Grinder',
      link:'realm-grinder',
      windows: true,
      mac: true
  },
  {
      icon:'url(https://i0.wp.com/mac-torrent-download.net/wp-content/uploads/2020/03/Borderlands-3-icon.png?fit=246%2C246&ssl=1)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://www.hrkgame.com/media/games/.thumbnails/Borderlands-3-cover-art-1280x720.jpg/Borderlands-3-cover-art-1280x720-460x215.jpg)',
      name:'Borderlands 3',
      link:'borderlands-3',
      windows: true,
      mac: true
  },
  {
      icon:'url(https://miro.medium.com/max/1080/1*LteTIiHyftNwRfY5b4OPMQ.png)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://cdn2.nextinpact.com/images/bd/wide-linked-media/16444.jpg)',
      name:'Destiny 2',
      link:'destiny-2',
      windows: true
  },
  {
      icon:'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d6r6i19-7abfad81-e58a-4603-94f6-2b89f1dda221.png/v1/fill/w_256,h_256,strp/the_stanley_parable___icon_by_blagoicons_d6r6i19-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNDZiNjNkM2MtYWU2Ny00NjRjLTlhMzctNjcwODI5YjJhMTU3XC9kNnI2aTE5LTdhYmZhZDgxLWU1OGEtNDYwMy05NGY2LTJiODlmMWRkYTIyMS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lGOZeJEmAjQHGChV6WJk2vTBQLVbsTB8STv9qcl0g10)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://media.begeek.fr/2018/10/The-Stanley-Parable-succ%C3%A8s-Steam.jpg)',
      name:'The Stanley Parable',
      link:'the-stanley-parable',
      windows: true,
      mac: true
  },
  {
      icon:'url(http://getdrawings.com/free-icon/tekken-7-icon-52.png)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://store-images.s-microsoft.com/image/apps.247.66354120331917142.8b99bed0-9862-4f95-8a11-3db3d1b2d09c.57955b35-01fb-45da-9c8e-e4a7642d7663?mode=scale&q=90&h=1080&w=1920&format=jpg)',
      name:'TEKKEN 7',
      link:'tekken-7',
      windows: true
  },
  {
      icon:'url(https://www.customscenerydepot.com/downloads/3/1_24_12_16_3_36_50_0.png)',
      banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://steamcdn-a.akamaihd.net/steam/apps/2700/0000002706.1920x1080.jpg?t=1485262035)',
      name:'RollerCoaster Tycoon 3: Platinium!',
      link:'roller-coaster-tycoon-3-platinium',
      windows: true
  },
]

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <Header />
        <div className="body">
          <SideBar />
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/:videoGameName" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
