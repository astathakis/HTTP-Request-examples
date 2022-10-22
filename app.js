// 'https://swapi.dev/api/people/1';

// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log('it loaded!!!');
//   const data = JSON.parse(this.responseText);
//   console.log(data.hair_color);
// };
// req.onerror = function () {
//   console.log('Error!!!');
//   console.log(this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1');
// req.send();

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     console.log('resolved', res);
//     return res.json(); //returns a promise
//   })

//   .then((data) => {
//     console.log('JSON done!', data);
//     return fetch('https://swapi.dev/api/people/2');
//   })
//   .then((res) => {
//     console.log('second request!! resolved');
//     return res.json(); //returns a promise
//   })
//   .then((data) => {
//     console.log('JSON done for 2!', data);
//   })
//   .catch((err) => {
//     console.log('erroor', err);
//   });

const loadSW = async () => {
  try {
    const res2 = await fetch('https://swapi.dev/api/people/2');
    const data2 = await res2.json();
    console.log(data2);
    const res = await fetch('https://swapi.dev/api/peple/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('error');
  }
};

loadSW();
