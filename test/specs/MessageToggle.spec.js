import { shallow } from 'vue-test-utils'
import test from 'tape'
import MessageToggle from '../../src/components/MessageToggle.vue'
import Message from '../../src/components/Message'

test('toggles msg passed to Message when button is clicked', t => {
  t.plan(2)
  const wrapper = shallow(MessageToggle)
  const button = wrapper.find('#toggle-message')
  button.trigger('click')
  const MessageComponent = wrapper.find(Message)
  t.ok(MessageComponent.hasProp('msg', 'message'))
  button.trigger('click')
  t.ok(MessageComponent.hasProp('msg', 'toggled message'))
})
