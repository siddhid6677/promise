const cl = console.log;

const postForm = document.getElementById("postForm")

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

// async js >> non-blocking >>  createBlogs

const createBlogs = (blog) => {
    return new Promise((resolve, reject) => {
        // API call to add new blog
        setTimeout(() => {
            let error = Math.random() >= .2 ? false : true;
            if(!error){
                blogsArr.push(blog)
                resolve(`New blog created successfully`);
            }else{
                reject(`Something went wrong while creating new blog`);
            }
        }, 2500);
    })
}

const fetchAllBlog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .2 ? false : true;
            if(!error){
                resolve(blogsArr)
            }else{
                reject(`Something went wrong while fetching data`)
            }
        })
    })
}


const createBlogCards = (arr) => {
    // cl(`created ui`)
    if(arr.length === 0){
        alert(`Plz provide valid data`);
    }

    let result = ``;
    arr.forEach(ele => {
        result += `
                    <div class="col-md-6 offset-3  mt-4">
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
                            <button class="btn btn-sm btn-outline-danger ">
                                remove
                            </button>
                        </div>
                    </div>
                </div>
        `
    });
    cardContainer.innerHTML = result
}

createBlogs({
    title : "Javascript",
    content : "Javascript is world's most popular programming language",
    blogId : "789"
})
    .then((res) => {
        cl(res);
        // sweetAlert(res, 'success');
        return fetchAllBlog()
    })
    .then((res) => {
        cl(res)
        createBlogCards(res)
        // sweetAlert(res, 'success')
    })
    .catch((err) => {
        cl(err)
        sweetAlert(err, 'error')
    })