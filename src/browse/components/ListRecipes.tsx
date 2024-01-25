import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

import '../css/list-recipes.css';

import ListTags from './ListTags';
import Ratings from '../../rating/components/Ratings';
import { RecipeList } from '../../recipe/store/RecipeTypes';
import { getRecipeImagePlaceholder, getResourcePath, getRoutePath } from '../../common/utility';
import Tooltip from '../../common/components/Tooltip';

export interface IListRecipes {
  data:   Array<RecipeList> | undefined;
  lg?:    3 | 4;
  onOpenRecipe: (rec: RecipeList) => void;
}

function hashCode(str: string): number {
  // Code by Barak (https://stackoverflow.com/a/8831937).

  let hash = 0;
  for (let i = 0; i < str.length; ++i) {
    const char = str.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + char;
    // eslint-disable-next-line no-bitwise
    hash &= hash;
  }

  return hash;
}

function getRecipeImage(recipe: RecipeList) {
  if (recipe.photoThumbnail) {
    return recipe.photoThumbnail ?? getRecipeImagePlaceholder();
  } else {
    const images = ['fish', 'fried-eggs', 'pizza', 'soup', 'steak'];
    const recipeImageHash = Math.abs(hashCode(recipe.title));
    return getResourcePath(`/images/${images[recipeImageHash % 5]}.jpg`);
  }
}

const ListRecipes: React.FC<IListRecipes> = ({ data, lg = 4, onOpenRecipe }: IListRecipes) => {
  const IMAGE_PLACEHOLDER = useMemo(() => getRecipeImagePlaceholder(), []);
  const PLACEHOLDER_STYLE = useMemo(() => ({ background: `url(${IMAGE_PLACEHOLDER}) 100% center / cover` }), [IMAGE_PLACEHOLDER]);

  const recipes = data?.map(recipe => {
    const link = getRoutePath(`/recipe/${recipe.slug}`);
    return (
      <Col key={recipe.id}>
        <Card className={classNames('recipe')}>
          <Link to={link} onClick={() => onOpenRecipe(recipe)}>
            <Card.Img variant='top' src={getRecipeImage(recipe)} alt='' style={PLACEHOLDER_STYLE} />
            <Ratings stars={recipe.rating} count={recipe.ratingCount} collapsed />
            <Card.Title as='h3'><Tooltip id={recipe.slug} tooltip={recipe.title} placement='bottom' className='card-title-tooltip'>{recipe.title}</Tooltip></Card.Title>
            {recipe.oTags && <ListTags recipe={recipe} />}
            <Card.Text>{recipe.info}</Card.Text>
          </Link>
        </Card>
      </Col>
    );
  });

  return (
    <Row xs={1} sm={2} lg={lg} className='g-3 recipes-list'>
      {recipes}
    </Row>
  );
};

export default ListRecipes;
