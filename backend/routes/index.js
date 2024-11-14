// routes/index.js

const router = require('express').Router();

// Sample professional data
/*
const professionalData = {
    professionalName: "Jane Doe",
    base64Image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEyMCc+Cgk8ZGVmcz4KCQk8cGF0dGVybiBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBpZD0nYycgd2lkdGg9JzYwJyBoZWlnaHQ9JzEyMCcgeD0nMCcgeT0nMCcgdmlld0JveD0nMCAwIDUgMTAnPgoJCQk8cGF0aCBmaWxsLW9wYWNpdHk9JzAnIHN0cm9rZT0nIzI5MjkyOScgc3Ryb2tlLXdpZHRoPScwLjA5JyBkPSdNLTIsMUw3LDEwTS0yLDZMNywxNU0tMiwtNEw3LDUnLz4KCQk8L3BhdHRlcm4+CgkJPHBhdHRlcm4gcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgaWQ9J2MyJyB3aWR0aD0nNjAnIGhlaWdodD0nMTIwJyB4PScxMDAlJyB5PScwJyB2aWV3Qm94PScwIDAgNSAxMCc+CgkJCTxwYXRoIGZpbGwtb3BhY2l0eT0nMCcgc3Ryb2tlPScjMjkyOTI5JyBzdHJva2Utd2lkdGg9JzAuMDknIGQ9J003LDFMLTIsMTBNNyw2TC0yLDE1TTcsLTRMLTIsNScvPgoJCTwvcGF0dGVybj4KCTwvZGVmcz4KCTxyZWN0IHdpZHRoPSc1MCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNjKScvPgoJPHJlY3QgeD0nNTAlJyB3aWR0aD0nNTAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjYzIpJy8+Cjwvc3ZnPg==",
    nameLink: {
      firstName: "Jane",
      url: "https://example.com"
    },
    primaryDescription: "Software Developer with expertise in full-stack development.",
    workDescription1: "Experienced in building scalable web applications.",
    workDescription2: "Proficient in JavaScript, Node.js, React, and more.",
    linkTitleText: "Connect with me",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com/in/janedoe"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/janedoe"s
    }
  };
*/

// Defines route for professional
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/professional', require('./professionals'))

module.exports = router;