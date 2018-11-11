import * as React from 'react';
import { RecipeState } from '../../../types';
import { Tree } from 'react-d3-tree';

export interface Props {
  recipes: RecipeState[];
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
        attributes: diff,
        children: [],
      });
      this.buildTree(recipe.id, result.find(r => r.id === recipe.id).children);
    });
  }
  render() {
    if (this.state.result.length !== 0) {
      const tree = this.state.result.filter(r => r.children.length !== 0).map(r => (
          <Tree
            data={r}
            key={r.id}
            translate={{ x: 80, y: 160 }}
            textLayout={{ y: -30, textAnchor: 'middle', size: '10' }}
            zoomable={false}
            nodeSize={{ x: 150, y: 60 }}
            nodeSvgShape={{ shape: 'circle', shapeProps: { r: 5 } }}
            styles={{
              links: {
                stroke: '#333',
              },
              nodes: {
                leafNode: {
                  circle: {
                    stroke: '#ccc',
                    fill: '#ccc',
                  },
                  name: {
                    stroke: '#333',
                    strokeWidth: 0,
                  },
                  attributes: {
                    strokeWidth: 0,
                  },
                },
                node: {
                  circle: {
                    stroke: '#ccc',
                    fill: '#ccc',
                  },
                  name: {
                    stroke: '#333',
                    strokeWidth: 0,
                  },
                  attributes: {
                    strokeWidth: 0,
                  },
                },
              },
            }}
          />
      ));
      return (
        <div id="treeWrapper" style={{ width: '100%', height: '16em' }}>
          {tree}
        </div>
      );
    }
    return null;
  }
}

export default RecipeTree;
