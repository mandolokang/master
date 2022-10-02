# master
Library BE using nodejs
# You can clone the app at https://github.com/mandolokang/master
# use npm or yarn
# 'npm install' to install the dependencies
# 'npm run dev' to run the server
# 'npm run test' to run test suite
# Use insomnia or postman to test the API 
 customer endpoint:
1. method GET --> http://localhost:3001/v1/customer/library/book-list  --> book list from open library
2.  method POST --> http://localhost:3001/v1/customer/library/book-schedule --> add data to array
  example body request (JSON) :
  {
	"fullName": "Andika",
	"pickUpTime" : "20221001",
	"bookingDetail": [
		{
			"bookId": "/works/OL21177W",
      "bookTitle": "Wuthering Heights",
      "author": "Emily Brontë",
      "editionNumber": "OL38586477M"
		},
		{
			"bookId": "/works/OL21177W",
      "bookTitle": "Romeo and Juliet",
      "author": "Emily Brontë",
      "editionNumber": "OL38586477M"
		}
		
	]
}

admin endpoint:
3. method GET --> http://localhost:3001/v1/admin/library/pickup-schedule-list --> get data from array
 
