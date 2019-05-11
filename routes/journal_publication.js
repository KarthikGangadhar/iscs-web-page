const express = require('express');
const router = express.Router();
const profile = require("../config/profile")
const settings = require("../config/settings")
const soPosts = require("../lib/so_posts")
/* GET home page. */
soPosts.getPosts().then((resp) => {
  router.get('/', function (req, res, next) {
    res.render('journal_publication', {
      profile: profile,
      settings: settings,
      stPost: resp
    });
  });
});


module.exports = router;