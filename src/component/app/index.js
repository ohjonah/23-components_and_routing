import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteContainer from '../note-container';
import NoteCreateForm from '../note-create-form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };

    this.appState = this.appState.bind(this);
  }

  appState() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    };
  }

  componentDidUpdate() {
    console.log('__STATE__:', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route
              exact path='/'
              component={ () =>
                <NoteContainer appState={this.appState()} />
              }
            />
          </section>
        </BrowserRouter>
      </main>
    );
  }


}

export default App;