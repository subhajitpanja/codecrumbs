const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const KOTLIN_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(KOTLIN_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
