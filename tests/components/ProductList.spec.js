import { render, fireEvent } from '@testing-library/vue'
import ProductList from '../../src/components/ProductList.vue'
import { getRandomProducts } from './sharedFunctions'

import '../../src/filters/currecy'

test('delete product', async () => {
  const products = getRandomProducts();
  const productsLength = products.length;
  const { getAllByRole } = await render(ProductList,
    { 
      props: {
        products
      }
    }
  )
  
  await fireEvent.click(getAllByRole('button')[0]);

  expect(products.length).toBe(productsLength - 1);
})
