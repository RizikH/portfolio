import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cn } from './utils.ts'

test('merges multiple class strings', () => {
  assert.equal(cn('px-2', 'px-4', 'text-sm'), 'px-4 text-sm')
})

test('handles conditional classes', () => {
  assert.equal(cn('foo', { bar: true, baz: false }), 'foo bar')
})
