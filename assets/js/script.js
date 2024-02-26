

async function traerPost() {

    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await respuesta.json();
        let data1 = data[0];

        let getPost = document.querySelector("#getPost");
        console.log(getPost);


        getPost.addEventListener('click', () => {
            for (let i = 0; i < 5; i++) {
                document.querySelector('#post-data').innerHTML += `<ul><li>
                        <p id="title">${data[i].title}</p>
                        <p>${data[i].body}</p>
                        </ul></li>`;

            };
        });




    } catch (e) {
        console.log(e);
    };



};

traerPost();

