// import { Checkbox } from '../../common/components/FormComponents';
import { Table } from 'react-bootstrap';
import { defineMessages, useIntl } from 'react-intl';
import { optionallyFormatMessage } from '../../common/utility';
import { Ingredient } from '../store/RecipeTypes';

export interface IIngredientsProps {
  data: Array<Ingredient>;
  // checkIngredient: (id: number, checked: boolean) => void;
}

const Ingredients: React.FC<IIngredientsProps> = ({ data /* , checkIngredient */ }: IIngredientsProps) => {
  const intl = useIntl();

  const messages = defineMessages({
    quantity: {
      id: 'ingredients.table.quantity',
      description: 'Ingredients table quantity header',
      defaultMessage: 'Quantity',
    },
    ingredient: {
      id: 'ingredients.table.ingredient',
      description: 'Ingredients table ingredient header',
      defaultMessage: 'Ingredient',
    },
  });

  const ingredients = data.map(ingredient => {
    const quantityString    = ingredient.quantity;
    const measurementString = optionallyFormatMessage(intl, 'measurement.', ingredient.measurement, { itemCount: ingredient.quantity });
    const titleString       = ingredient.title;
    return (
      <tr className='ingredient' key={String(ingredient.id)}>
        {/*
        <Checkbox
            name    = {String(ingredient.id)}
            checked = {ingredient.checked ?? false}
            change  = {(name, newValue) => checkIngredient(parseInt(name), newValue)} /> */}
        <td className='quantity'>
          <span>
            {quantityString}
            {quantityString != null && quantityString.length > 0 && measurementString.length > 0 && ' '}
            {measurementString}
          </span>
        </td>
        <td className='ingredient'>
          <span>
            {titleString}
          </span>
        </td>
      </tr>
    );
  });

  return (
    <Table striped size='sm' className='table ingredients-table'>
      <thead className='hideme'>
        <tr>
          <th><span>{intl.formatMessage(messages.quantity)}</span></th>
          <th><span>{intl.formatMessage(messages.ingredient)}</span></th>
        </tr>
      </thead>
      <tbody>
        {ingredients}
      </tbody>
    </Table>
  );
};

export default Ingredients;
