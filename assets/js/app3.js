const cl = console.log;

const sweetAlert = (msg, icon) => {
    Swal.fire({
        title : msg,
        timer : 2500,
        icon : icon
    })
}

let blogsArr = [
    {
        title : "HTML",
        content : "Html stands for hyper text markup language",
        blogId : "123"
    },
    {
        title : "CSS",
        content : "Css stands for cascading style sheet",
        blogId : "456"
    }
]

const createBlogs = (blog) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                blogsArr.push(blog)
                resolve(`New blog created Successfully`)
            }else{
                reject(`Something went wrong while creating new blog`)
            }
        }, 2500)
    })
}

const fetchAllBlog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(blogsArr)
            }else{
                reject(`Something went wrong while fetching data`)
            }
        }, 2000);
    })
}

const createBlogCards = (arr) => {
    if(arr.length === 0){
        alert(`Plz provide valid data`);
    }

    let result = ``;
    arr.forEach(ele => {
        result += `
                    <div class="col-md-8 offset-2  mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h2>${ele.title}</h2>
                        </div>
                        <div class="card-body">
                            <p class="m-0">
                                ${ele.content}
                            </p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-sm btn-outline-info">
                                Edit
                            </button>
                            <button class="btn btn-sm btn-outline-danger float-right">
                                remove
                            </button>
                        </div>
                    </div>
                </div>
        `
    });
    cardContainer.innerHTML = result
}

let newBlog = {
    title : "Javascript",
    content : "Javascript is world's most popular programming language",
    blogId : "789"
}

const init = async () => {
    try{
        await createBlogs(newBlog)
        await fetchAllBlog()
        createBlogCards(blog)
    }catch(err){
        sweetAlert(err, 'error')
    }
}

init()

// createBlogs({
//     title : "Javascript",
//     content : "Javascript is world's most popular programming language",
//     blogId : "789"
// })
//     .then((res) => {
//         cl(res)
//         return fetchAllBlog()
//     })
//     .then((res) => {
//         cl(res)
//     })
//     .catch((err) => {
//         // cl(err)
//         sweetAlert(err, 'error')
//     })