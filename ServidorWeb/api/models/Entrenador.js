/**
 * Entrenador.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: "string"
    },
    apellido:{
      type: "string"
    },
    medallas:{
      type: "number"
    },
    edad:{
      type: "number"
    },
    pokemons:{
      collection:"Pokemon",
      via:"entrenadorId"
    }
  },

};

