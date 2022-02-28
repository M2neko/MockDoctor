Heroku link: mockdoctor.herokuapp.com

Total amount of time: 2.5 hours

For this small app, I used Node.js and Express to accomplish. I utilized MySQL in the Back-End to save the doctor data (mock data), and Bootstrap as well as JQuery in the Front-End. I created and employed models, views, and controllers folders (also public to save images, css, and frontend js; routes to serve as middleware). 
The three doctor images are from the open source website; the logo (MockDoctor) is from Adobe Logo Generator. To prevent that the user hard-coded the incorrect doctor name in th URL, I also did an Error page.

In the home list of doctors, I sort them first by their ratings, then by their names in lexicography order.

To find the similar doctors, I define "similar" to be only if they have the same speciality as the given doctor. I sort them first by rating; if they are the same, the doctor who has the same location with the given doctor has the higher priority; lastly, I sort their names by lexicography order.

The code can found in controller/sort.js.

If Given more time, I would like to make the "similar" to be if they have the same speciality as the given doctor OR if they have the same location as the given doctor. And the sorting (after sorting by ratings) will be based on the distance from place to place. Futhermore, I would like to finish the home page and make more attributes (like Education and Publications) in the profile when one doctor is selected. I would also like to use the real datasets by some public APIs and real images. Lastly, due to the limitation of time, the mobile side app is not perfect-pixel. I will improve them if given more time.


Image Sources:
https://www.freepik.com/free-photos-vectors/doctor
https://unsplash.com/photos/279xIHymPYY

Logo Source (open source generator):
https://express.adobe.com/express-apps/logomaker/
