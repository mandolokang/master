const listBookService = require('../../library/service')
const bookListMock = require('../service/mock/book')

describe('Library book list test', function () {
  it('Should return all books for customer', async function () {
    const result = await listBookService.listBookService(null)

    expect(result.book).toEqual(bookListMock.book)
  })
})
