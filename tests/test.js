var assert = require('assert')
var dom = require('./testdom')('<html><body></body></html>')
var React = require('react')
var TestUtils = require('react/lib/ReactTestUtils')
var TestCompoent = require('./testcompoent')

describe('Validate Mixin', function () {
  it('is required', function () {
    var el = <TestCompoent required='true' />
    var compoent = TestUtils.renderIntoDocument(el);

    assert.equal(compoent.isValid.call(compoent), false)

    compoent.setValue.call(compoent, 'foobar')
    assert.equal(compoent.isValid.call(compoent), true)
  })

  it('has max characters', function () {
    var el = <TestCompoent maxCharacters='5' />
    var compoent = TestUtils.renderIntoDocument(el);

    compoent.setValue.call(compoent, 'foo')
    assert.equal(compoent.isValid.call(compoent), true)

    compoent.setValue.call(compoent, 'foobar')
    assert.equal(compoent.isValid.call(compoent), false)
  })

  it('has min characters', function () {
    var el = <TestCompoent minCharacters='5' />
    var compoent = TestUtils.renderIntoDocument(el);

    compoent.setValue.call(compoent, 'foo')
    assert.equal(compoent.isValid.call(compoent), false)

    compoent.setValue.call(compoent, 'foobar')
    assert.equal(compoent.isValid.call(compoent), true)
  })

  it('is email', function () {
    var el = <TestCompoent email='true' />
    var compoent = TestUtils.renderIntoDocument(el);

    compoent.setValue.call(compoent, 'foo.bar@test.com')
    assert.equal(compoent.isValid.call(compoent), true)
  })

  it('is equal', function () {
    var el = <TestCompoent equals='foobar' />
    var compoent = TestUtils.renderIntoDocument(el);

    compoent.setValue.call(compoent, 'foobar')
    assert.equal(compoent.isValid.call(compoent), true)

    compoent.setValue.call(compoent, 'baz')
    assert.equal(compoent.isValid.call(compoent), false)
  })

})