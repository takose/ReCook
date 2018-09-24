import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TasteState } from '../../../../types';
import {
  main as Main,
  input as Input,
  add as Add,
  form as Form,
  itemWrapper as ItemWrapper,
  label as Label,
  deleteButton as DeleteButton,
} from '../../style';

export interface Props {
  createOrUpdate({}): void;
  deleteStep(): void;
  step: TasteState;
  id: number;
}

export default class EditorTaste extends React.Component<Props, TasteState> {
  state = {
    sake: 0,
    soysauce: 0,
    mirin: 0,
    vinegar: 0,
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

  sakeOnChange = e => this.setState({ sake: parseInt(e.target.value, 10) });
  soysauceOnChange = e => this.setState({ soysauce: parseInt(e.target.value, 10) });
  mirinOnChange = e => this.setState({ mirin: parseInt(e.target.value, 10) });
  vinegarOnChange = e => this.setState({ vinegar: parseInt(e.target.value, 10) });

  render() {
    const { createOrUpdate, id } = this.props;
    const { soysauce, mirin, sake, vinegar } = this.state;
    const text = id ?
      <div><FontAwesomeIcon icon={faCheck} /> &nbsp; Update</div> :
      <div><FontAwesomeIcon icon={faPlus} /> &nbsp; Add</div>;
    const formItem = (label, onChange, value) => (
      <ItemWrapper>
        <Label>{label}</Label>
        <Input
          type="number" min={0}
          onChange={onChange}
          value={value} />
        CC
      </ItemWrapper>
    );

    return (
      <Main>
        <Form>
          {formItem('醤油', this.soysauceOnChange, soysauce)}
          {formItem('みりん', this.mirinOnChange, mirin)}
          {formItem('酒', this.sakeOnChange, sake)}
          {formItem('酢', this.vinegarOnChange, vinegar)}
        </Form>
        <Add
          onClick={() => {
            const { soysauce, mirin, sake, vinegar } = this.state;
            createOrUpdate({ sake, soysauce, mirin, vinegar });
            this.setState({
              sake: 0,
              soysauce: 0,
              mirin: 0,
              vinegar: 0,
            });
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
