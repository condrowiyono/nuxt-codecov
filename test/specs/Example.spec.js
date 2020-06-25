import test from 'ava'
import { mount } from '@vue/test-utils'
import Example from '@/components/Example.vue'

const DefaultComponent = '<input type="text">'

const wrapper = mount(Example, {
  slots: {
    default: DefaultComponent
  }
})

test('Example has "Example" as its name', (expect) => {
  expect.true(Example.name === 'Example', 'Example has "Example" as name')
})

test('is a Vue instance', (t) => {
  t.truthy(wrapper.vm)
})
