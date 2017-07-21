import { shallow } from 'vue-test-utils'
import test from 'tape'
import List from '../../src/components/List.vue'

test('List.vue', t => {
    t.plan(1)
    const items = ['', '']
  const wrapper = shallow(List, {
    propsData: { items }
  })
  t.equal(wrapper.findAll('li').length, items.length)
})
