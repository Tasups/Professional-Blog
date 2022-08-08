import React from 'react';

import bug_Bank from '../images/Bug_Bank.jpg';
import dailyTaskAppImg from '../images/DailyTaskApp.jpg';
import snakeGameImg from '../images/SnakeGame.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-list">
        <div className="portfolio-project">
          <h2 className="portfolio-project-title">BUG BANK</h2>
          <a
            href="https://bug-bank.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bug_Bank} alt="bug bank" />
            {/*A bug tracker system*/}
          </a>
        </div>

        <div className="portfolio-project">
          <h2 className="portfolio-project-title">DAILY TASK APP</h2>
          <a
            href="https://yesitisa-todo-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dailyTaskAppImg} alt="daily task app" />
            {/*Internal data sets React's state in this simple CRUD application*/}
          </a>
        </div>

        <div className="portfolio-project">
          <h2 className="portfolio-project-title">SNAKE GAME</h2>
          <a
            href="https://snakegameforbubba.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={snakeGameImg} alt="snake game app" />
            {/*A simple game mostly using method arrays and useRef hook*/}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;