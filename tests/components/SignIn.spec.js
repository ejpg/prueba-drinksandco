import { mount } from '@vue/test-utils'
import { getRandomArbitrary } from './sharedFunctions'
import SignIn from '../../src/components/SignIn.vue'

const fields = ['name', 'lastname', 'email', 'password'];

test('set invalid fields', async () => {
  // USO @vue/test-utils ya que @testing-library/vue no tiene setData
  const wrapper = mount(SignIn);
  const account = {
    name: 'John',
    lastname: 'Doe',
    email: 'john@doe.com',
    password: 'admin'
  }

  // Elimino algun parametro de la cuenta
  delete account[fields[Math.floor(getRandomArbitrary(0, 4))]];

  await wrapper.setData(
    { 
      submitted: true,
      account
    }
  );

  expect(wrapper.find('.is-invalid').exists()).toBeTruthy();
})
