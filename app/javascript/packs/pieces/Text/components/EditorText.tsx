import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextState } from '../../../../types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  main as Main,
  textbox as Textbox,
  add as Add,
} from '../../style';

export interface Props {
  createOrUpdate(content: any): void;
  step?: TextState;
  id: number;
}

export default class EditorText extends React.Component<Props, TextState> {
  private textDom;
  state = {
    body: '',
  };

  componentDidMount() {
    if (this.props.step) {
      this.setState({ ...this.props.step });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ ...this.props.step });
    }
  }

  reset() {
    this.setState({ body: '' });
    this.textDom.value = '';
  }
  bodyOnChange = e => this.setState({ body: e.target.value });

  render() {
    const { createOrUpdate } = this.props;
    return (
      <Main>
        <Textbox
          onChange={this.bodyOnChange}
          value={this.state.body}
          innerRef={e => this.textDom = e} />
        <Add
          onClick={() => {
            const { body } = this.state;
            createOrUpdate({ body });
            this.reset();
          }}>
          <FontAwesomeIcon icon={faPlus} />&nbsp; Add
        </Add>
      </Main>
    );
  }
}
