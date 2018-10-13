import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextState } from '../../../../types';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  main as Main,
  textbox as Textbox,
  add as Add,
  deleteButton as DeleteButton,
  input as Input,
  label as Label,
  itemWrapper as ItemWrapper,
} from '../../style';

export interface Props {
  createOrUpdate(content: any): void;
  deleteStep(): void;
  step?: TextState;
  id: number;
}

export default class EditorText extends React.Component<Props, TextState> {
  state = {
    body: '',
    photoUrl: '',
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
  photoUrlOnChange = e => this.setState({ photoUrl: e.target.value });

  render() {
    const { createOrUpdate, id } = this.props;
    const text = id ?
      <div><FontAwesomeIcon icon={faCheck} /> &nbsp; Update</div> :
      <div><FontAwesomeIcon icon={faPlus} /> &nbsp; Add</div>;

    return (
      <Main>
        <div>
          <ItemWrapper>
            <Label>テキスト</Label>
            <Textbox
              onChange={this.bodyOnChange}
              value={this.state.body} />
          </ItemWrapper>
          <ItemWrapper>
            <Label>画像 URL</Label>
            <Input
              type="text"
              value={this.state.photoUrl}
              onChange={this.photoUrlOnChange}
            />
          </ItemWrapper>
        </div>
        <Add
          onClick={() => {
            const { body, photoUrl } = this.state;
            createOrUpdate({ body, photoUrl });
            this.setState({ body: '', photoUrl: '' });
          }}>
          {text}
        </Add>
        {this.props.id ? (
          <DeleteButton
            onClick={this.props.deleteStep}
          >
          delete
          </DeleteButton>
        ) : ''}
      </Main>
    );
  }
}
