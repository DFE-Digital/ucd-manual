const digitalData = require('./digital-data');

module.exports = (config) => (req, res, next) => { // eslint-disable-line arrow-parens
  res.locals.BASE_URL = config.baseURL;
  res.locals.ENVIRONMENT = config.env;
  res.locals.mtype = config.mtype;

  // Adobe Analytics
  res.locals.adobeTrackingUrl = config.adobeTrackingUrl;
  res.locals.githubrepo = config.githubrepo

  // Datalayer info
  res.locals.digitalData = digitalData(req);

  next();
};
