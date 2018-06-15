import React from 'react'
import { Cart } from 'react-pdv'
import { Button, Alert } from 'react-native'
import { MonoText } from './StyledText'

const SubmitButton = props => (
  <Button {...props} style={{ backgroundColor: '#007777', marginTop: 20 }}>
    Comprar
  </Button>
)

const Title = ({ children, ...otherProps }) => (
  <MonoText {...otherProps}>{`Total: ${children}`}</MonoText>
)

const basicCart = {
  items: [
    {
      id: 'prod1',
      name: 'prod1',
      description: 'lorem ipsum dolor flanders',
      amount: 1,
      price: 123.45
    },
    {
      id: 'prod2',
      name: 'prod2',
      description: 'lorem ipsum dolor flanders',
      amount: 6,
      price: 678.9
    }
  ]
}

export default class extends React.Component {
  state = {
    cart: basicCart
  }

  updateCartItem = item =>
    this.setState(state => ({
      cart: {
        ...state.cart,
        items: state.cart.items.map(it => (it.id !== item.id ? it : item))
      }
    }))

  render() {
    return (
      <Cart
        cart={this.state.cart}
        updateCartItem={this.updateCartItem}
        Title={Title}
        Button={Button}
        SubmitButton={SubmitButton}
        onSubmit={cart => Alert.alert('Carrinho', JSON.stringify(cart, null, 2))}
      />
    )
  }
}
