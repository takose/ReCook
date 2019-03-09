import * as React from 'react';
import { RecipeState, StepState } from '../../../types';
import { Tree } from 'react-d3-tree';
import {
  main as Main,
  treeWrapper as TreeWrapper,
} from '../styles/RecipeTree';

export interface Props {
  recipes: RecipeState[];
  steps: StepState[];
  getRecipe(id: number): void;
  resetRecipe(): void;
}

export interface State {
  result: object;
}

class RecipeTree extends React.Component<Props, State> {
  state = {
    result: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.recipes.length <= 0 && this.props.recipes.length > 0) {
      this.buildRecipe();
    }
  }

  buildRecipe = () => {
    const result = [];
    this.buildTree(null, result);
    this.setState({ result });
  }
  buildTree = (originId, result) => {
    this.props.recipes.filter(recipe => recipe.originId === originId).forEach((recipe) => {
      const diff = recipe.desc ? { diff: recipe.desc } : null;
      result.push({
        id: recipe.id,
        name: recipe.title,
        attributes: { ...diff, id: recipe.id },
        children: [],
      });
      this.buildTree(recipe.id, result.find(r => r.id === recipe.id).children);
    });
  }
  render() {
    if (this.state.result.length !== 0) {
      const tree = this.state.result.filter(r => r.children.length !== 0).map(r => (
        <TreeWrapper>
          <Tree
            data={r}
            key={r.id}
            translate={{ x: 80, y: 320 }}
            textLayout={{ y: -50, x: 0, textAnchor: 'middle', size: '18' }}
            zoomable={true}
            nodeSize={{ x: 200, y: 100 }}
            nodeSvgShape={{ shape: 'circle', shapeProps: { r: 18 } }}
            onClick={(nodeData, e) => {
              this.props.getRecipe(nodeData.attributes.id);
            }}
            collapsible={false}
            styles={{
              links: {
                stroke: '#87BEC1',
                strokeWidth: 8,
              },
              nodes: {
                leafNode: {
                  circle: {
                    stroke: '#87BEC1',
                    fill: '#2E424B',
                    strokeWidth: 8,
                  },
                  name: {
                    stroke: '#87BEC1',
                    fill: '#fff',
                    strokeWidth: 0,
                  },
                  attributes: {
                    stroke: '#87BEC1',
                    strokeWidth: 0,
                  },
                },
                node: {
                  circle: {
                    stroke: '#87BEC1',
                    fill: '#2E424B',
                    strokeWidth: 8,
                  },
                  name: {
                    stroke: '#87BEC1',
                    fill: '#fff',
                    strokeWidth: 0,
                  },
                  attributes: {
                    stroke: '#87BEC1',
                    strokeWidth: 0,
                  },
                },
              },
            }}
          />
        </TreeWrapper>
      ));
      return (
        <Main>{tree}</Main>
      );
    }
    return null;
  }
}

export default RecipeTree;
