import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  main as Main,
  textbox as Textbox,
  add as Add,
} from '../../style';

interface State {
  body: string;
}

export interface Props {
  createStep(content: any): void;
}

export default class EditorText extends React.Component<Props, State> {
  private textDom;
  state = {
    body: '',
  };

  reset() {
    this.setState({ body: '' });
    this.textDom.value = '';
  }
  bodyOnChange = e => this.setState({ body: e.target.value });

  render() {
    const { createStep } = this.props;
    return (
      <Main>
        <Textbox
          onChange={this.bodyOnChange}
          value={this.state.body}
          innerRef={e => this.textDom = e} />
        <Add
          onClick={() => {
            const { body } = this.state;
            createStep(body);
            this.reset();
          }}>
          <FontAwesomeIcon icon={faPlus} />&nbsp; Add
        </Add>
      </Main>
    );
  }
}
