import * as React from 'react';
import { RecipeState } from '../../../types';
import * as Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

export interface Props {
  recipes: RecipeState[];
}

class RecipeTree extends React.Component<Props, object> {
  buildRecipe = () => {
    const result = [];
    this.buildTree(null, result);
    return result;
  }
  buildTree = (originId, result) => {
    this.props.recipes.filter(recipe => recipe.originId === originId).forEach((recipe) => {
      result.push({ id: recipe.id, name: recipe.title, children: [] });
      this.buildTree(recipe.id, result.find(r => r.id === recipe.id).children);
    });
  }
  render() {
    const data = this.buildRecipe();
    const tree = data.map(recipe => (
      <Tree
        data={recipe}
        height={200}
        width={800}
      />
    ));
    return tree;
  }
}

export default RecipeTree;
