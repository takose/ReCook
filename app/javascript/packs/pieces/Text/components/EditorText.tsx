import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextState } from '../../../../types';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
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

  bodyOnChange = e => this.setState({ body: e.target.value });

  render() {
    const { createOrUpdate, id } = this.props;
    const text = id ?
      <div><FontAwesomeIcon icon={faCheck} /> &nbsp; Update</div> :
      <div><FontAwesomeIcon icon={faPlus} /> &nbsp; Add</div>;

    return (
      <Main>
        <Textbox
          onChange={this.bodyOnChange}
          value={this.state.body} />
        <Add
          onClick={() => {
            const { body } = this.state;
            createOrUpdate({ body });
            this.setState({ body: '' });
          }}>
          {text}
        </Add>
      </Main>
    );
  }
}
