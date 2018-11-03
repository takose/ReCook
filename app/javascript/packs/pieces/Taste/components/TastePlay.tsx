import * as React from 'react';
import { TasteState } from '../../../../types';
import TasteStep from './TasteStep';
export interface Props {
  step: TasteState;
}

export interface State {
}

class TastePlay extends React.Component<Props, State> {
  componentDidMount() {
    const { soysauce, mirin, sake, vinegar } = this.props.step;
    const params = `b1=${soysauce}000&b2=${mirin}000&b3=${sake}000&b4=0${vinegar}00`;
    const mode: RequestMode = 'no-cors';
    const credentials: RequestCredentials = 'include';
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa('foo' + ':' + 'bar'));
    headers.append('X-Auth-Token', '');
    const options = {
      mode,
      headers,
      credentials,
      method: 'GET',
      secure: true,
    };
    // fetch(`http://192.168.10.4/prepare?${params}`, options)
    //  .then((res) => {
    //    console.log('set done');
    //    fetch(`http://192.168.10.4/pushbutton`, options)
    //      .then((res) => {
    //        console.log('request succeeded');
    //      });
    //  });
    fetch(`https://192.168.10.8:3000/taste?${params}`, options)
      .then((res) => {
        console.log('set done');
      });
  }
  render() {
    return (
      <TasteStep step={this.props.step} />
    );
  }
}

export default TastePlay;
