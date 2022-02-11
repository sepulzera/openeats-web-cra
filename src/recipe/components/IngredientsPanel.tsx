import Spinner from 'react-spinkit';
import { defineMessages, useIntl } from 'react-intl';

import '../css/ingredients_panel.css';

import { Recipe } from '../store/types';

import SubRecipes from './SubRecipes';
import IngredientGroups from './IngredientGroups';
// import IngredientButtons from './IngredientButtons';
import GenericReducerType, { PendingState } from '../../common/store/GenericReducerType';
import P from '../../common/components/P';
import IngredientsHeader from './IngredientsHeader';

export interface IIngredientsPanelProps {
  recipe: Recipe;
  recipeState: GenericReducerType;

  // lists: Array<any>;

  // bulkAdd: (listId: number) => void;
  // checkAllIngredients: () => void;
  // uncheckAllIngredients: () => void;

  // checkIngredient: (id: number, checked: boolean) => void;
  // checkSubRecipe:  (id: number, checked: boolean) => void;

  updateServings: (servings: number) => void;
}

const IngredientsPanel: React.FC<IIngredientsPanelProps> = ({ recipe, recipeState, updateServings }: IIngredientsPanelProps) => {
  const { formatMessage } = useIntl();
  const messages = defineMessages({
    no_ingredients: {
      id: 'recipe.recipe_ingredient_button.no_ingredients',
      description: 'No ingredients provided message',
      defaultMessage: '(This recipe has no ingredients.)',
    },
  });

  const pending = recipeState.pending;
  const hasNoIngredients = pending === PendingState.COMPLETED && recipe.subrecipes.length === 0 && recipe.ingredientGroups.length === 0;

  return (
    <article className='ingredients-panel'>
      <IngredientsHeader recipe={recipe} recipeState={recipeState} updateServings={updateServings} />
      {pending === PendingState.LOADING && <Spinner name='circle' className='recipe-list-spinner' fadeIn='none' />}
      {hasNoIngredients && (
        <P className='placeholder'>{formatMessage(messages.no_ingredients)}</P>
      )}
      {!hasNoIngredients && (
        <>
          <SubRecipes
              subRecipes = {recipe.subrecipes}
              // checkSubRecipe = {checkSubRecipe}
              />
          <IngredientGroups
              groups  = {recipe.ingredientGroups}
              // checkIngredient = {checkIngredient}
              />
          {/*
          <IngredientButtons
              pending    = {pending}
              lists      = {lists}
              bulkAdd    = {bulkAdd}
              checkAll   = {checkAllIngredients}
              unCheckAll = {uncheckAllIngredients} /> */}
        </>
      )}
    </article>
  );
};

export default IngredientsPanel;
