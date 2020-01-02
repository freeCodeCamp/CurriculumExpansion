const newsFeed = {
  page: "front_page",
  articles:  [
    {
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
    },
    {
      headline: "Will Web Development Ever Rule the World?",
      image: [],
      date_published: "2018-12-29T10:00:00+09:00",
      date_modified: "",
      author: {
        username: "webly_weberson",
        name: "Julie Holmes"
      },
      likes: 8945,
      dislikes: 31,
      shares: 2,
      comments: 109,
      section: {
        name: "Web Development",
        subscribers: 9183
      },
      url:
        "http://www.binary-bugle.com/will-web-development-ever-rule-the-world"
    },
    {
      headline: "The Next Big Thing in Algorithms",
      image: [],
      date_published: "2018-12-30T11:58:00+11:00",
      date_modified: "",
      author: {
        username: "enigmaGadget",
        name: "Steve Ramsey"
      },
      likes: 459,
      dislikes: 2,
      shares: 1,
      comments: 64,
      section: {
        name: "Algorithms",
        subscribers: 5743
      },
      url: "http://www.binary-bugle.com/the-next-big-thing-in-algorithms"
    },
    {
      headline: "Programming Explained in Fewer than 140 Characters",
      image: [],
      date_published: "2019-03-30T05:30:00+03:00",
      date_modified: "",
      author: {
        username: "Mr. Coffee",
        name: "Pat Comb"
      },
      likes: 308,
      dislikes: 0,
      shares: 3,
      comments: 29,
      section: {
        name: "Programming",
        subscribers: 18101
      },
      url:
        "http://www.binary-bugle.com/programming-explained-in-fewer-than-140-characters"
    },
    {
      headline: "This Week's Top Stories About Web Development",
      image: [],
      date_published: "2019-04-02T12:30:00+08:00",
      date_modified: "",
      author: {
        username: "webly_weberson",
        name: "Julie Holmes"
      },
      likes: 127,
      dislikes: 10,
      shares: 1,
      comments: 34,
      section: {
        name: "Web Development",
        subscribers: 9183
      },
      url:
        "http://www.binary-bugle.com/this-weeks-top-stories-about-web-development"
    },
    {
      headline: "Everything You've Ever Wanted to Know About A.I.",
      image: [],
      date_published: "2019-03-09T10:10:00+10:00",
      date_modified: "",
      author: {
        username: "notarobot",
        name: "Trista Campbell"
      },
      likes: 99,
      dislikes: 3,
      shares: 2,
      comments: 31,
      section: {
        name: "Artificial Intelligence",
        subscribers: 2374
      },
      url:
        "http://www.binary-bugle.com/everything-youve-ever-wanted-to-know-about-ai"
    }
  ]
};

// Iterate through the newsFeed Object and set the results to newsFeedArray.
let newsFeedArray = []
for (property in newsFeed) {
  newsFeedArray = newsFeed[property]
}
console.log('Convert the newsFeed object property values to an array with the for...of statement:', newsFeedArray); 

// Return an array with the values of the newsFeed object to the newsFeedObjValues.
const newsFeedObjValues = Object.values(newsFeed)
console.log('Convert the newsFeed object property values to an array with Object.values: ', newsFeedObjValues)

// Return an array of the property names of newsFeed in the same order of a normal loop.
Object.keys(newsFeed)

// Select and map through the articles property of the newsFeed object.
newsFeed.articles.map(article => article)

//  Return and map an array of the property names of newsFeed with the index of property names
// as well as the index of map set to newsFeed.
Object.keys(newsFeed).map(index => [index, newsFeed[index]])

new Date()

/*
The datestring of new Date(datestring) inputs a string in new Date() and returns a new object with the current date. 

From the newsFeedArray, return a new date object of the date_published property 
value's string in the article headline "Will Web Development Ever Rule the World?"

To acces and return the date_published value as a new Date object with the headline: "Programming: Expectations vs. Reality" we would do the following: 

new Date(newsFeedArray[0].date_published)
returns // Fri Jan 04 2019 19:00:00 GMT-0500 (Eastern Standard Time)
*/
