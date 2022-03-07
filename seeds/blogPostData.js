const { BlogPost } = require('../models');

const blogPostData = [
  {
    subject: 'GameBoy colour',
    body: 'April 20, 2021 07:00:00The GameBoy colour may be the apex of gaming equipment',
    date: 'March 7, 2022 21:00:00',
  },
  {
    subject: 'Pokemon Card Collection',
    body: 'While expensive, pokemon cards are fun to collect an stuff',
    date: 'March 3, 2022 13:00:00',
  },
  {
    subject: 'XXXXXXXXXXXXXX',
    body: 'STUFF AND THINGS',
    date: 'January 20, 2022 14:30:00',
  },
  {
    subject: 'YYYYYYYYYYYYYYY',
    body: 'Stress is often stressful',
    date: 'March 1, 2022 20:00:00',
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
