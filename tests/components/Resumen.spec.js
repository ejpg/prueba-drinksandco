import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { getRandomProducts } from './sharedFunctions'
import Resumen from '../../src/components/Resumen.vue'
import '../../src/filters/currecy'

test('values calculated', async () => {
  const products = getRandomProducts();
  const { getByTestId, updateProps } = await render(Resumen);

  await updateProps({ products });

  const total = parseFloat(getByTestId('total').innerHTML.replace('€', ''));
  const totalwithouthiva = parseFloat(getByTestId('totalwithouthiva').innerHTML.replace('€', ''));
  const totaliva = parseFloat(getByTestId('totaliva').innerHTML.replace('€', ''));
  const totalwithdiscount = parseFloat(getByTestId('totalwithdiscount').innerHTML.replace('€', ''));

  expect(total).toBeGreaterThan(0);
  expect(totalwithouthiva).toBeGreaterThan(0);
  expect(totaliva).toBeGreaterThan(0);
  expect(totalwithdiscount).toBeGreaterThan(0);
})

test('price greater than iva', async() => {
  const products = getRandomProducts();
  const { getByTestId, updateProps } = await render(Resumen);

  await updateProps({ products });

  const totalwithouthiva = parseFloat(getByTestId('totalwithouthiva').innerHTML.replace('€', ''));
  const totaliva = parseFloat(getByTestId('totaliva').innerHTML.replace('€', ''));

  expect(totalwithouthiva).toBeGreaterThan(totaliva);
})

test('applies discount', async() => {
  // USO @vue/test-utils ya que @testing-library/vue no tiene setData
  const wrapper = mount(Resumen);

  await wrapper.setData({ discount: 2 });

  expect(wrapper.find('.discount').exists()).toBeTruthy();
});
