import React, { Component } from 'react';

import { styles } from './styles.scss';

export class Footer extends Component {

  render() {
    return (
      <footer className={styles}>
        <a href="http://ayk.com.br">
          © AYK Sistemas
        </a>
        <div className="bott">Icons made by
          <a
            href="http://www.flaticon.com/authors/egor-rumyantsev"
            title="Egor Rumyantsev"
          > Egor Rumyantsev </a> from
          <a href="http://www.flaticon.com" title="Flaticon"> www.flaticon.com
          </a> is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
          > CC BY 3.0
          </a>
        </div>

      </footer>
    );
  }
}
