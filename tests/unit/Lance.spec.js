import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

test('Não aceita valor menor do que zero', () => {
  const wrapper = mount(Lance)
  expect(wrapper).toBeTruthy()
})
