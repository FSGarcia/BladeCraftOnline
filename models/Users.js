var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  /* title: String,
  upvotes: {type: Number, default: 0}, */
  
  username: String,
  level: {type: Number, default: 1},
  exp: {type: Number, default: 0},
  kills: {type: Number, default: 0},
  currentHP: {type: Number, default: 20},
  maxHP: {type: Number, default: 20},
  attack: {type: Number, default: 10}
});

UserSchema.methods.attack = function(cb) {
    
    
    
    
}

mongoose.model('User', UserSchema);

/*  1 - 0
    2 - 20
    3 - 45
    4 - 101
    5 - 228
    6 - 513
    7 - 1153
    8 - 2595
    9 - 5839
    10 - 13137
    
*/