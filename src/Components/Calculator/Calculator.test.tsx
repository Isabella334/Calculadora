import { expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

test('Cambio de signo funciona', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('5', { selector: 'button' }))
  fireEvent.click(getByText('+/-', { selector: 'button' }))

  expect(getByText('-5', { selector: '._display_4089ed' })).toBeTruthy()
})

test('Operación módulo', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('9', { selector: 'button' }))
  fireEvent.click(getByText('%', { selector: 'button' }))
  fireEvent.click(getByText('4', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('1', { selector: '._display_4089ed' })).toBeTruthy()
})

test('Suma con cero no cambia el número', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('7', { selector: 'button' }))
  fireEvent.click(getByText('+', { selector: 'button' }))
  fireEvent.click(getByText('0', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('7', { selector: '._display_4089ed' })).toBeTruthy()
})

test('Reiniciar la calculadora con C', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('9', { selector: 'button' }))
  fireEvent.click(getByText('+', { selector: 'button' }))
  fireEvent.click(getByText('1', { selector: 'button' }))
  fireEvent.click(getByText('C', { selector: 'button' }))

  expect(getByText('0', { selector: '._display_4089ed' })).toBeTruthy()
})

test('Multiplicación con decimales', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('3', { selector: 'button' }))
  fireEvent.click(getByText('.', { selector: 'button' }))
  fireEvent.click(getByText('1', { selector: 'button' }))
  fireEvent.click(getByText('4', { selector: 'button' }))
  fireEvent.click(getByText('x', { selector: 'button' }))
  fireEvent.click(getByText('2', { selector: 'button' }))
  fireEvent.click(getByText('.', { selector: 'button' }))
  fireEvent.click(getByText('5', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('7.85', { selector: '._display_4089ed' })).toBeTruthy()
})
