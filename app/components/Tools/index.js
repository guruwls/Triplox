import React, {Component} from 'react';

/* component styles */
import {styles} from './styles.scss';

/* images */
const imgDev = [{
    file: './files/nodejs.png',
    name: 'Node'
  },{
    file: './files/koa.png',
    name: 'Koa'
  },{
    file: './files/mocha.png',
    name: 'Mocha'
  },{
    file: './files/yeoman.png',
    name: 'Yo'
  },{
    file: './files/reactjs.png',
    name: 'React'
  },{
    file: './files/redux.png',
    name: 'Redux'
  },{
    file: './files/babel.png',
    name: 'Babel'
  },{
    file: './files/webpack.png',
    name: 'Webpack'
  },{
  file: './files/bootstrap.png',
  name: 'Bootstrap'
}];

const imgPower = [{
  file: './files/docker.png',
  name: 'Docker'
},{
  file: './files/postgresql.png',
  name: 'Postgresql'
},{
  file: './files/elastic.png',
  name: 'Elastic Search'
},{
  file: './files/redis.png',
  name: 'Redis'
},{
  file: './files/couchdb.png',
  name: 'Couchdb'
}];

const icons = 'col-xs-2 col-sm-2 col-md-2 col-lg-1 tool col-centered';

const makeDiv = img => (
  <div className={icons}>
    <img src={require(img.file)}/>
    <h6>
      {img.name}
    </h6>
  </div>
);

export class Tools extends Component {
  render() {
    return (
      <section className={styles}>
        <div className='container text-center'>
          <h1>Sistemas com as mais modernas tecnologias</h1>
          <br/>
          <br/>
        </div>
        <div className='container'>
          <div className='tool'>
            <div className='text-center'>
              <h4>
                Developed with
              </h4>
            </div>
            <div className='row row-centered'>
              {imgDev.map( img => makeDiv(img) )}
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='text-center'>
            <h4>
              Powered by
            </h4>
          </div>
          <div className='row row-centered'>
            {imgPower.map( img => makeDiv(img) )}
          </div>
        </div>
      </section>
    );
  }
}
