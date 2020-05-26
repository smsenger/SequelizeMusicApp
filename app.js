const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'));
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true}));

app.get('/album', (req, res) => {
    db.Album.findAll().then((results => {
        res.json(results);
    }));
});

app.get('/artist', (req, res) => {
    db.Artist.findAll().then((results => {
        res.json(results);
    }));
});

app.get('/track', (req, res) => {
    db.Track.findAll().then((results => {
        res.json(results);
    }));
});

app.get('/newsequelize_music_app', (req, res) => {
    res.render('newsequelize_music_app', {
        title: 'Create a new app'
    });
});

app.post('/artist', (req, res) => {
    const name = req.body.name;
    db.Artist.create({
        artist_name: name
    })
    .then(result => {
        res.json(result);
    });
});

app.post('/artist/:id', (req, res) => {
    const name = req.params.id;
    const release_year = req.body.year;
    const art_id = req.body.id;
    db.Album.create({
        album_name: name,
        year: release_year,
        artist_id: art_id
    })
    .then(result => {
        res.json(result);
    });
});

app.post('/track', (req, res) => {
    const name = req.body.name;
    const release_year = req.body.year;
    const alb_id = req.body.id;
    db.Track.create({
        track_name: name,
        year: release_year,
        album_id: alb_id
    })
    .then(result => {
        res.json(result);
    });
});

app.put('/artist', (req, res) => {
    const name = req.body.name;
    db.Artist.create({
        artist_name: name
    })
    .then(result => {
        res.json(result);
    });
});

app.put('/artist/:id', (req, res) => {
    const name = req.params.id;
    const release_year = req.body.year;
    const art_id = req.body.id;
    db.Album.create({
        album_name: name,
        year: release_year,
        artist_id: art_id
    })
    .then(result => {
        res.json(result);
    });
});

app.put('/track', (req, res) => {
    const name = req.body.name;
    const release_year = req.body.year;
    const alb_id = req.body.id;
    db.track.create({
        track_name: name,
        year: release_year,
        album_id: alb_id
    })
    .then(result => {
        res.json(result);
    });
});

app.get('/sequelize_music_app/:id', (req, rest) => {
    db.sequelize_music_app.findByPk(req.params.id).then(result => {
        res.json(result);
    });
});

app.delete('/sequelize_music_app/:id', (req, rest) => {
    let id = parseInt(req.params.id)
    db.destroy({where: {id}}).then(rowsDeleted => {
        if(rowsDeleted === 1) {
            console.log('Deleted successfully')
        }
    })
    .catch(err => {
        console.log(err);
    });
});
    

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`))