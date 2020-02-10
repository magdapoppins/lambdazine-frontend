import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup} from 'react-bootstrap';
import ArticleTile from "./ArticleTile";
import Navigation from "./Navigation";
import Footer from "./Footer";

const themeColors = ["#f92a82", "#ed7b84", "#f5cdbd", "#d6d5d3", "#7eb77f"]
const today = new Date();
const articles = [
  {
    title: 'asd 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'jny',
    publishDate: today,
    imageURL: "https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: 'asd 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'jny',
    publishDate: today,
    imageURL: "https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: 'asd 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'jny',
    publishDate: today,
    imageURL: "https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: 'asd 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'jny',
    publishDate: today,
    imageURL: "https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: 'asd 5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'jny',
    publishDate: today,
    imageURL: "https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: 'asd 6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'jny',
    publishDate: today,
    imageURL: "https://images.unsplash.com/photo-1581328493669-71ac1ccfbbe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
]

const App = () => (
  <div style={{paddingTop: "1rem",
    backgroundImage: "linear-gradient(102deg, #f92a82, #f5cdbd)"}}>
    <Navigation />
    <div style={{padding: "2rem 0"}}>
      <CardGroup style={{padding: "1rem 2rem", backgroundColor: "white"}}>
        {articles.map(article =>
          <ArticleTile key={article.title} article={article} />)}
      </CardGroup>
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
