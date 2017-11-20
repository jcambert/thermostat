/**
 * Periode.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var _ = require('lodash');
var validate = function(periode,next){
    if(periode.fin<= periode.debut)
      next(new Error('La fin de la période ne peut etre anterieur au debut'));
    else
      next();
};
module.exports = {

  attributes: {
    jour:{
      type:'string',
      enum:['semaine','lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'],
      required:true,
    },
    debut:{
      type:'integer',
      required:true,
      isDayTime:true
    },
    fin:{
      type:'integer',
      required:true,
      isDayTime:true
    },
    mode:{
      type:'string',
      enum:['arret','hors-gel','reduit', 'confort']

    }
  },
  types:{
    isDayTime:function(value){
      return _.isInteger(value) && value>=0 && value<24
    }
  },

  beforeCreate:function(values,cb){
    validate(values,cb);
  },
  beforeUpdate:function(values,cb){
    validate(values,cb);
  }
};

