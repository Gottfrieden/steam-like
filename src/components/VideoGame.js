import React from 'react';
import './videogames.css';

const videoGames = [
    {
        icon: 'url(https://media3.spiralknights.com/wiki-images/8/8d/Icon-sword.png)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://i.ytimg.com/vi/mUEv7unHQKI/maxresdefault.jpg)',
        name: 'Spiral Knights',
        link: 'spiral-knights',
        logo: 'url(https://media3.spiralknights.com/wiki-images/2/28/SK_logo.png)',
        windows: true,
        mac: true,
        installed:false
    },
    {
        icon: 'url(https://steamuserimages-a.akamaihd.net/ugc/860612455486950246/A1754BD654E7AF9A5B867BC031AF0D155B7DB76C/)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://image.jeuxvideo.com/medias-md/157683/1576825228-1639-card.jpg)',
        name: 'Age of Empires II: Definitive Edition',
        link: 'age-of-empire-ii-definitive-edition',
        logo:'URL(https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/hero-logo-age2_ea9d88d4.png)',  
        windows :true,
        installed:true
    },
    {
        icon:'url(https://lh5.ggpht.com/A2tnYb18vL2QCbdCA0n4ktYxOsUUf6mtiF7RCFYW8aNE2dmbI6SL57t6KFr7A3StR6E=w300)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://steamuserimages-a.akamaihd.net/ugc/930427803645981406/092978A25831BA61D65E69C1605EC193F0B29E62/)',
        name:'The Binding of Isaac: Rebirth',
        link:'the-binding-of-isaac-rebirth',
        logo:'URL(https://upload.wikimedia.org/wikipedia/fr/e/ea/The_Binding_of_Isaac_Rebirth_Logo.png)', 
        active: true,
        windows: true,
        mac: true,
        installed:true
    },
    {
        icon:'url(https://images-eu.ssl-images-amazon.com/images/I/61-3e-uL7VL.png)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2018/10/15/fdd8848a/promo_04.jpg)',
        name:'Hollow Knight',
        link:'hollow-knight',
        logo:'URL(https://hollowknight.com/wp-content/uploads/2015/08/logo_main.png)', 
        windows: true,
        mac: true,
        installed:true
    },
    {
        icon:'url(https://steamcdn-a.akamaihd.net/steam/apps/653530/capsule_616x353.jpg?t=1560608077)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://store-images.s-microsoft.com/image/apps.30265.13910202224242316.37724338-1fc2-4d15-94d9-f6c11a92b4a6.7cd9d963-7110-40c4-ac3d-4ac1d347eddb)',
        name:'Return of the Obra Dinn',
        link:'return-of-the-obra-dinn',
        logo:'URL(https://d38w655bqoyvyi.cloudfront.net/logo_thumb/b052e2e0c0ad1b2d5036bd56e27d061c.png)', 
        windows: true,
        mac: true,
        installed:true
    },
    {
        icon:'url(https://b.thumbs.redditmedia.com/amAIbUWu332-u03vktDnwKH1BkJbYVuP8q3OtNZrTPM.png)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://i.imgur.com/Z8a3B9e.png)',
        name:'Realm Grinder',
        link:'realm-grinder',
        logo:'URL(./images/realm-grinder.png)', 
        windows: true,
        mac: true,
        installed:false
    },
    {
        icon:'url(https://i0.wp.com/mac-torrent-download.net/wp-content/uploads/2020/03/Borderlands-3-icon.png?fit=246%2C246&ssl=1)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://sm.ign.com/t/ign_fr/news/b/borderland/borderlands-3s-box-art-has-leaked-and-its-wild_hhzr.1280.jpg)',
        name:'Borderlands 3',
        link:'borderlands-3',
        logo:'url(https://upload.wikimedia.org/wikipedia/fr/c/c4/Borderlands_3_Logo.png)',
        windows: true,
        mac: true,
        installed:false
    },
    {
        icon:'url(https://miro.medium.com/max/1080/1*LteTIiHyftNwRfY5b4OPMQ.png)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://i.redd.it/inqm81x3cr711.jpg)',
        name:'Destiny 2',
        link:'destiny-2',
        logo:'URL(https://www.freepnglogos.com/uploads/destiny-logo-png/destiny-logo-destiny-review-morbid-play-12.png)', 
        windows: true,
        installed:true
    },
    {
        icon:'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d6r6i19-7abfad81-e58a-4603-94f6-2b89f1dda221.png/v1/fill/w_256,h_256,strp/the_stanley_parable___icon_by_blagoicons_d6r6i19-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNDZiNjNkM2MtYWU2Ny00NjRjLTlhMzctNjcwODI5YjJhMTU3XC9kNnI2aTE5LTdhYmZhZDgxLWU1OGEtNDYwMy05NGY2LTJiODlmMWRkYTIyMS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lGOZeJEmAjQHGChV6WJk2vTBQLVbsTB8STv9qcl0g10)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://xboxsquad.fr/wp-content/uploads/2019/11/the-stanley-parable-review.jpg)',
        name:'The Stanley Parable',
        link:'the-stanley-parable',
        logo:'URL(https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_The_Stanley_Parable.png)', 
        windows: true,
        mac: true,
        installed:false
    },
    {
        icon:'url(http://getdrawings.com/free-icon/tekken-7-icon-52.png)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://store-images.s-microsoft.com/image/apps.247.66354120331917142.8b99bed0-9862-4f95-8a11-3db3d1b2d09c.57955b35-01fb-45da-9c8e-e4a7642d7663?mode=scale&q=90&h=1080&w=1920&format=jpg)',
        name:'TEKKEN 7',
        link:'tekken-7',
        logo:'URL(https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Tekken_7_Logo.svg/1200px-Tekken_7_Logo.svg.png)', 
        windows: true,
        installed:true
    },
    {
        icon:'url(https://www.customscenerydepot.com/downloads/3/1_24_12_16_3_36_50_0.png)',
        banner:'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://steamcdn-a.akamaihd.net/steam/apps/2700/0000002706.1920x1080.jpg?t=1485262035)',
        name:'RollerCoaster Tycoon 3: Platinium!',
        link:'roller-coaster-tycoon-3-platinium',
        logo:'URL(https://coasterpedia.net/w/images/4/47/RollerCoaster_Tycoon_3_logo.png)', 
        windows: true,
        installed:true
    },
]

function ProductPage(props) {
        const params = props.match.params; 
        return (
            <div className="app-browser">
                {videoGames.filter(videoGame => videoGame.link === params.videoGameName).map(videoGame => (
                <div className="product-content">
                    <div className={"videogame-banner " + videoGame.link} style={{backgroundImage: videoGame.banner}}>
                        <div className="video-game-logo" style={{backgroundImage: videoGame.logo}}></div>
                    </div>
                    <div className="video-game-content">
                        <div className="video-game-content-background" style={{backgroundImage: videoGame.banner}}></div>
                        <div className="game-play-stats-container">
                            <a href="#"><button className="play-game"><span className="play-icon"></span>Jouer</button></a>
                            <div className="two-lines-content">
                                <h3>Dernière utilisation</h3>
                                <p>29 Juillet 2015</p>
                            </div>
                            <div className="two-lines-content">
                                <h3>Temps de jeu</h3>
                                <p>2 minutes</p>
                            </div>
                            <div className="two-lines-content">
                                <h3>Succès</h3>
                                <p>41/138</p>
                            </div>
                            <div className="game-icon-container">
                                <div className="game-icon settings"></div>
                                <div className="game-icon information"></div>
                                <div className="game-icon favorite"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                ))}
            </div>
    )
}

export default ProductPage;
