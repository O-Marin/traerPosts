

async function traerPost() {

    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await respuesta.json();
        let data1 = data[0];

        let getPost = document.querySelector("#getPost");
        console.log(getPost);
        
        let ul = document.createElement('ul');
        document.querySelector('#post-data').appendChild(ul);
        getPost.addEventListener('click', () => {
            for (let i = 0; i < 5; i++) {
                document.querySelector('#post-data ul').innerHTML += `<li>
                        <p id="title">${data[i].title}</p>
                        <p>${data[i].body}</p>
                        </li>`;

            };

            
        });




    } catch (e) {
        console.log(e);
    };



};

traerPost();

