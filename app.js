/* eslint-disable */

const http = new EasyHTTP
let url = 'https://jsonplaceholder.typicode.com/posts'
let urlPut = 'https://jsonplaceholder.typicode.com/posts/1'
let data = {
  userId: 1,
  id: 101,
  title: "title 1",
  body: "text"
}

http.get(url)
  .then(data => console.log(data))

http.post(url, data)
  .then(console.log)
  .catch(console.log)

http.put(urlPut, data)
  .then(console.log)
  .catch(console.log)

http.delete(urlPut)
  .then(console.log)
  .catch(console.log)