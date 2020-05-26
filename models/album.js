'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    album_name: DataTypes.STRING,
    year: DataTypes.DATE,
    artist_id: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.Artist, {
      foreignKey: "artist_id"
    });
    Album.hasMany(models.Track);
    // associations can be defined here
  };
  return Album;
};