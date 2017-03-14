const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
    let artist = new Artist({ 
        age: artistProps.age, 
        genre: artistProps.genre,
        name: artistProps.name,
        yearsActive: artistProps.yearsActive
    });
    return artist.save();
};
