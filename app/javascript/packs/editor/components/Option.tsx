import * as React from 'react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import {
  optionWrapper as OptionWrapper,
  optionButton as OptionButton,
} from '../styles/Editor';

export interface Props {
  updateEditOption(direction): void;
}

class Option extends React.Component<Props, object> {
  render() {
    return (
      <OptionWrapper>
        <OptionButton onClick={() => this.props.updateEditOption('before')}>ステップを前に追加</OptionButton>
        <OptionButton onClick={() => this.props.updateEditOption('after')}>ステップを後に追加</OptionButton>
      </OptionWrapper>
    );
  }
}

export function mapStateToProps(state: object) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);
