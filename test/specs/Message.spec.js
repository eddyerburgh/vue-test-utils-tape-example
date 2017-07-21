import { shallow } from 'vue-test-utils'
import test from 'tape'
import Message from '../../src/components/Message'

test('renders props.msg when passed', t => {
   t.plan(1)
   const msg = 'new message'
  const wrapper = shallow(Message, {
    context: { props: { msg } }
  })
  t.equal(wrapper.text(), msg)
})

test('renders default message if not passed a prop', t => {
    t.plan(1)
    const defaultMessage = 'default message'
  const wrapper = shallow(Message, {context: {}})
  t.equal(wrapper.text(), defaultMessage)
})
