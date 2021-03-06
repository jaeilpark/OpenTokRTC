// configure your variables here

var config = {}

config.opentok = {};
config.db = {};
config.web = {};
config.middleware = {};

// OpenTok Credentials
config.opentok.key = process.env.TB_KEY || '45708382';
config.opentok.secret=  process.env.TB_SECRET || '68c0df03f41a1fac8a3d90e269b3fa3790983b4c';

// Database configuration. Do not change if you do not plan to use redis
config.db.redis = false; // are you using redis?
config.db.REDISTOGO_URL = process.env.REDISTOGO_URL;

// optional middleware to support
config.middleware.p2p = /^\/.*p2p[^\/.]*(\.json)?$/; // urls matching regex will have p2p enabled sessions. Set to false to disable
config.middleware.json = /.*\.json$/; // urls matching regex will have json responses. Set to false to disable
config.middleware.reservations = [{ // reserved rooms. If you want specific rooms to use different opentok Credentials, set it here
  key: process.env.TNW_KEY,
  secret: process.env.TNW_SECRET,
  roomName: "yourdemoroom"
}]; // reserved rooms. set to false to disable

config.web.port = process.env.PORT || 9393;
config.web.env = process.env.NODE_ENV || "development"; // environment, change to production

module.exports = config;
