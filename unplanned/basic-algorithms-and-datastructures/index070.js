const newsFeed = {
  page: "front_page",
    articles: [{
      headline: "Programming: Expectations vs. Reality",
      image: [],
      date_published: "2019-01-05T08:00:00+08:00",
      date_modified: "2019-01-05T09:20:00+08:00",
      author: {
        username: "PeoplePerson",
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

/*
To access nested objects we can also use bracket notation and a numerical value to select with object as index. *Note computers count values starting at zero.

For example, in the following object countObject, we can select and change the count value property of 1 to 0 in our first index. 
var countObject = {nestedCounts: [{count: 1}, {count: 2}]} 
countObject.nestedCounts[0].count = 0 // returns countObject = {nestedCounts: [{count: 0}, {count: 2}]}

Back in our newsFeed, the author with the username 'PeoplePerson' has now officially changed his name to 'Mr. Coffee'.
Change the string of 'PeoplePerson' to the string of 'Mr Coffee' accordingly by selecting the username value in the nested author object. 
*/
