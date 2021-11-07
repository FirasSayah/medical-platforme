'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked .
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:8000',
  SESSION_SECRET:   'angularfullstack-secret',

  FACEBOOK_ID:      'app-id', /// WE SHOULD CHANGE THEM IN ORDER TO HAVE FB AN TWITTER AND GOOGLE LOGIN
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        'app-id',
  GOOGLE_SECRET:    'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
