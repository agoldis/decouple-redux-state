const books = [
  {
    isbn: "9781593275846",
    title: "Eloquent JavaScript, Second Edition",
    subtitle: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    published: "2014-12-14T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 472,
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    website: "http://eloquentjavascript.net/"
  },
  {
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    subtitle: "A JavaScript and jQuery Developer's Guide",
    author: "Addy Osmani",
    published: "2012-07-01T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 254,
    description:
      "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    website:
      "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  },
  {
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    subtitle: "An In-Depth Guide for Programmers",
    author: "Axel Rauschmayer",
    published: "2014-02-01T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 460,
    description:
      "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    website: "http://speakingjs.com/"
  },
  {
    isbn: "9781491950296",
    title: "Programming JavaScript Applications",
    subtitle:
      "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
    author: "Eric Elliott",
    published: "2014-07-01T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 254,
    description:
      "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
    website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
  }
];
const users = [
  {
    id: "user01",
    name: "Dan Markhasin",
    profileImage:
      "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
    books: ["9781491950296", "9781449365035", "9781593275846"]
  },
  {
    id: "user02",
    name: "John Jackson",
    profileImage:
      "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
    books: ["9781449365035", "9781491950296"]
  },
  {
    id: "user03",
    name: "Frank Sinatra",
    books: ["9781593275846", "9781449331818", "9781449365035"],
    profileImage:
      "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
  }
];
const comments = [
  {
    id: "comment01",
    user: "user01",
    book: "9781449365035",
    content: "Nice book!",
    published: "2014-08-01T00:00:00.000Z"
  },
  {
    id: "comment02",
    user: "user01",
    book: "9781593275846",
    content: "love this book!",
    published: "2015-12-14T00:00:00.000Z"
  },
  {
    id: "comment03",
    user: "user03",
    book: "9781449331818",
    content: "awesome!!!!",
    published: "2015-12-14T00:00:00.000Z"
  },
  {
    id: "comment04",
    user: "user02",
    book: "9781491950296",
    content: "waiting for second edition",
    published: "2016-07-01T00:00:00.000Z"
  },
  {
    id: "comment05",
    user: "user01",
    book: "9781491950296",
    content: "what a great book!",
    published: "2016-07-01T00:00:00.000Z"
  }
];

export const initialState = {
  app: {
    books,
    users,
    comments
  }
};
