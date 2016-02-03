import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';

const metaData = {
  title: 'Opal boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    }
  }
};

export class Home extends Component {

  static propTypes = {
    loggedIn: React.PropTypes.bool
  };

  render() {
    return (
      <section>
        <TopImage />
        <Tools />
      </section>
    );
  }
}
