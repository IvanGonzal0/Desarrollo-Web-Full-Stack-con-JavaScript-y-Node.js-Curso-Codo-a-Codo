//CRUD (CREATE, READ, UPDATE, DELETE)
//POST = CREA
//PUT = MODIFICA TODO EL REGISTRO
//PATCH = MODIFICA UNA PARTE DEL REGISTRO
//DELETE = ELIMINA EL REGISTRO

// //el fetch me genera una promesa, y espero que se resuelva o que no se pueda resolver(siempre tenemos una rta(response))
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())  //el primer then es para obtener el response
//   .then((json) => console.log(json));   //el segundo then es para mostrarlo por consola

// //ESTA ES OTRA FORMA DE USAR FETCH CON ASYNC Y AWAIT
// const getPosts = async () => {

//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const json = await res.json();

//         return json;

//     }catch(error){
//         console.error(error);
//     }

//esta funcion me va adevolver un json o un error, uso try catch para caputar error en caso que lo haya y no se corte la ejecucion del programa
//};

// //ESTO ES PARA LEER 1 solo registro con el ID

// const readPost = async (id) => {
//     try{
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         const json = await res.json();

//         return json;

//     }catch(error){
//         console.error(error);
//     }

// }

// //ACA VAMOS A CREAR UN POST

// const createPost = async (post) => {
//     try{
//         //para hacer el fetch voy a pasar el url, un objeto que contiene el json con method body y header
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: "POST",
//             body: JSON.stringify(post),
//             headers:{
//                 "Content.type": "application/json; charset=UTF-8"
//             },
//         });
//         const json = await res.json();
//         return json;

//     }catch(error){
//         console.error(error);
//     }

// }

// createPost({
//     title: "foo",
//     body: "bar",
//     userId: 1,
// }).then((res) => console.log(res));

// //VAMOS A HACER UN UPDATE (2 formas PUT Y PATCH

// const updatePost = async (post, id) => {
//     try{
//         //para hacer el fetch voy a pasar el url, un objeto que contiene el json con method body y header
//         const res = await fetch(
//             `https://jsonplaceholder.typicode.com/posts/${id}`,
//             {
//             method: "PUT",
//             body: JSON.stringify(post),
//             headers:{
//                 "Content.type": "application/json; charset=UTF-8"
//             },
//         });

//         const json = await res.json();
//         return json;

//     }catch(error){
//         console.error(error);
//     }

// }

// updatePost({

//     title: "foo 2",
//     body: "bar 2 ",
//     userId: 1,

// }).then(post, 1).then((json) => console.log(res));

//DELETE

// const deletePost = async (id) =>{

//     try{
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
//         {
//             method: "DELETE"
//         });

//         const json = await res.json();

//     }catch(error){
//         console.error(error);
//     }
// };

// deletePost(1)

//REPO CLASES

// CRUD

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

const createPost = async (post) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const readPosts = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    const json = await res.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

const readPost = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await res.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

const updatePost = async (post, id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (id) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

// createPost({
//   title: "foo",
//   body: "bar",
//   userId: 1,
// }).then((json) => console.log(json));

// readPosts().then((json) => console.log(json));
// readPost(8).then((json) => console.log(json));

// const post = {
//   title: "foo 2",
//   body: "bar 2",
//   userId: 1,
// };

// updatePost(post, 1).then((json) => console.log(json));
// deletePost(1).then((json) => console.log(json));

readPosts().then((posts) => {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  main.innerHTML += `<h1>Posts</h1>`;

  posts.forEach((post) => {
    const html = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
    main.innerHTML += html;
  });

  body.appendChild(main);
});

// ---

axios
  .get("https://jsonplaceholder.typicode.com/posts?_page=1")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
