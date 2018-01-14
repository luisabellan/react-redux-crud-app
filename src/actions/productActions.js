import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './actionTypes'
import axios from 'axios'

export function getProducts() {
  return dispatch => {
    axios
      .get('http://localhost:8000/products')
      .then(response => dispatch(getProductsSuccess(response.data)))
      .catch(error => console.error('getAPIProducts failed:', error))
  }
}

export function getProductsSuccess(payload) {
  return { type: GET_PRODUCTS, payload }
}

export function createProduct(payload) {
  return dispatch => {
    axios
      .post('http://localhost:8000/products', payload)
      .then(() => dispatch(createProductSuccess(payload)))
      .catch(error => console.error('createProduct failed:', error))
  }
}

export function createProductSuccess(payload) {
  return { type: CREATE_PRODUCT, payload }
}

export function updateProduct(payload) {
  return dispatch => {
    axios
      .put(`http://localhost:8000/products/${payload.id}`, payload)
      .then(() => dispatch(updateProductSuccess(payload)))
      .catch(error => console.error('updateProduct failed:', error))
  }
}

export function updateProductSuccess(payload) {
  return { type: UPDATE_PRODUCT, payload }
}

export function deleteProduct(id) {
  return dispatch => {
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then(() => dispatch(deleteProductSuccess(id)))
      .catch(error => console.error('deleteProduct failed:', error))
  }
}

function deleteProductSuccess(id) {
  return { type: DELETE_PRODUCT, id }
}
