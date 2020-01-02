const newsFeed = {
  page: "front_page",
    articles: [{
      headline: "Programming: Expectations vs. Reality",
      image: [],
      date_published: "2019-01-05T08:00:00+08:00",
      date_modified: "2019-01-05T09:20:00+08:00",
      author: {
        username: "Mr. Coffee",
        name: "Pat Comb"
      },
      likes: 10571,
      dislikes: 14,
      shares: 54,
      comments: 461,
      section: {
        name: "Programming",
        subscribers: 18101
      },
      url: "http://www.binary-bugle.com/programming-expectations-vs-reality"
    },{},{},{},{},{}
  ]}

newsFeed.articles[0].author.username = 'Mr Coffee'
/*

Continue practice using bracket and dot notation with objects by changing the number of subscribers to 18103 and then back to its original value of 18101. 

*/
