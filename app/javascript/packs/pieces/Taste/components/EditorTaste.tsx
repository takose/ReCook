import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  main as Main,
  input as Input,
  add as Add,
  form as Form,
  itemWrapper as ItemWrapper,
  label as Label,
} from '../../style';

interface State {
  sake: number;
  soysauce: number;
  mirin: number;
  vinegar: number;
}

export interface Props {
  createStep(sake: number, soysauce: number, mirin: number, vinegar: number): void;
}

export default class EditorTaste extends React.Component<Props, State> {
  private sakeDom;
  private soysauceDom;
  private mirinDom;
  private vinegarDom;
  state = {
    sake: 0,
    soysauce: 0,
    mirin: 0,
    vinegar: 0,
  };

  reset() {
    this.setState({
      sake: 0,
      soysauce: 0,
      mirin: 0,
      vinegar: 0,
    });
    this.sakeDom.value = '';
    this.soysauceDom.value = '';
    this.mirinDom.value = '';
    this.vinegarDom.value = '';
  }

  componentDidMount() {
    if (this.props.step) {
      this.setState({ ...this.props.step });
    }
  }

  sakeOnChange = e => this.setState({ sake: parseInt(e.target.value, 10) });
  soysauceOnChange = e => this.setState({ soysauce: parseInt(e.target.value, 10) });
  mirinOnChange = e => this.setState({ mirin: parseInt(e.target.value, 10) });
  vinegarOnChange = e => this.setState({ vinegar: parseInt(e.target.value, 10) });

  render() {
    const { createStep } = this.props;
    return (
      <Main>
        <Form>
          <ItemWrapper>
            <Label>醤油</Label>
            <Input
              type="number" min={0}
              onChange={this.soysauceOnChange}
              value={this.state.soysauce}
              innerRef={e => this.soysauceDom = e} />
            CC
          </ItemWrapper>
          <ItemWrapper>
            <Label>みりん</Label>
            <Input
              type="number" min={0}
              onChange={this.mirinOnChange}
              value={this.state.mirin}
              innerRef={e => this.mirinDom = e} />
            CC
          </ItemWrapper>
          <ItemWrapper>
            <Label>酒</Label>
            <Input
              type="number" min={0}
              onChange={this.sakeOnChange}
              value={this.state.sake}
              innerRef={e => this.sakeDom = e} />
            CC
          </ItemWrapper>
          <ItemWrapper>
            <Label>酢</Label>
            <Input
              type="number" min={0}
              onChange={this.vinegarOnChange}
              value={this.state.vinegar}
              innerRef={e => this.vinegarDom = e} />
            CC
          </ItemWrapper>
        </Form>
        <Add
          onClick={() => {
            const { soysauce, mirin, sake, vinegar } = this.state;
            createStep(sake, soysauce, mirin, vinegar);
            this.reset();
          }}>
          <FontAwesomeIcon icon={faPlus} />&nbsp; Add
        </Add>
      </Main>
    );
  }
}
