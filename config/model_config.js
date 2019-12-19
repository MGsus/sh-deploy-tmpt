var pg = require('pg');
var defaults = {};

defaults.user = "aoczvmoy";
defaults.password = "8DeOP8SXg84ZymyIofHzJ4bnwTnNpNbT";
defaults.database = "aoczvmoy";
defaults.host = "rajje.db.elephantsql.com";
defaults.port = 5432;
defaults.ssl = true;

// defaults.user = "rbbpatry";
// defaults.password = "Q1SMOjXiBO6d_Wqx3uHrCrLIjhl5lQAj";
// defaults.database = "rbbpatry";
// defaults.host = "rajje.db.elephantsql.com";
// defaults.port = 5432;
// defaults.ssl = true;

var db = new pg.Client(defaults);
db.connect();

module.exports = db;        