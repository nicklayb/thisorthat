# ThisOrThat

## Purposes

Let's you give an object with a template. It'll fill the object within defined template.

## Usage

Here is an example :
```js
let thisOrThat = require('thisorthat');
//  You have your object
let myObject = {
    firstname: 'Bob',
    age: 20
};
//  But your object MUST have these properties and will merge them together
const TEMPLATE = {
    firstname: 'John',
    lastname: 'Doe',
    age: 18,
}
// There is two way of doing it. Since it it a recursive function you can pass
// a structured object as third parameter
//      First
let output = thisOrThat(myObject, TEMPLATE);
//      Second
let output = {};
output = thisOrThat(myObject, TEMPLATE, output);
```
## Conclusion

Thank you for using, testing and improving it and feel free to contact me for any question.

Ending joke :
> I’ve got a really good UDP joke to tell you, but I don’t know if you’ll get it
