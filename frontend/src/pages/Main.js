import React from 'react';
import './Main.css'

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/8212896?v=4"
            alt=""
          />
          <footer>
            <strong>Camilo Gonçalves</strong>
            <p>Qualquer coisa</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/8212896?v=4"
            alt=""
          />
          <footer>
            <strong>Camilo Gonçalves</strong>
            <p>Qualquer coisa</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/8212896?v=4"
            alt=""
          />
          <footer>
            <strong>Camilo Gonçalves</strong>
            <p>Qualquer coisa</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/8212896?v=4"
            alt=""
          />
          <footer>
            <strong>Camilo Gonçalves</strong>
            <p>Qualquer coisa</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
