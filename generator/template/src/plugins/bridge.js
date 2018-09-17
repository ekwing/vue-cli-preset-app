import bridge from '@ek/jsbridge'

bridge.extend({})

export {bridge}

export default vue => {
  vue.prototype.$bridge = bridge
}
