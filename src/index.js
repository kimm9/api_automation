let axios = require('axios');

const headers ={
	headers: {'X-Custom-Header': 'Custom Header for NorthWestern'}
}

const getPostsandCount = () => {
  try {
    return axios
    .get(
    	'https://jsonplaceholder.typicode.com/posts'
    )
   	.then((response) =>{
   		return Object.entries(response.data).length
   	})
  } catch (error) {
    console.log(error)
  }
}

const aboveHundredPosts = (int) => {
	const numPosts = getPostsandCount()
	.then(response => {

		if(int > response) {
			return "this is larger 100"
		} else {
			return "nope"
		}
	})
}



// POST post

const createPost = () => {
	return axios
	.post('https://jsonplaceholder.typicode.com/posts', {
			userId: 1,
			title: "new post",
			body: '"new post message"',
			comment: ["comment1", "Comment2"]
	})
	.then((response) => {
		console.log(response.data)
	}, (error) => {
		console.log(error)
	})
}

// PUT post

const updatePost =() => {
	return axios
	.put('https://jsonplaceholder.typicode.com/posts/1', {
		id: 1,
	    title: 'Updated Title',
	    body: 'Updated Body',
	    userId: 1
	}, headers)
	.then((response) => {
		console.log(response.config.headers['X-Custom-Header'], response.data)
	}, (error) => {
		console.log(error)
	})
}



// //Delete Post

const deletePost = (postId) => {
	return axios
	.delete('https://jsonplaceholder.typicode.com/posts/'.concat(postId))
	.then((response) => {
		console.log(response.data)
	}, (error) => {
		console.log(error)
	})
}


//Fucntion that use the response from one call in the request for another

const updatePostwithComments = async (postId) => {
	const postAndComments = getPostandCommentsbyPostId(postId)
	.then((response) => {
		if(response[0].data && response[1].data )
			return axios
			.put('https://jsonplaceholder.typicode.com/posts/'.concat(postId), {
				id: response[0].data.id,
				title: response[0].data.title,
				body: response[0].data.body,
				comments: response[1].data
			})
			.then((response) =>{
				console.log(response.data)
			})
	})
}
//updatePostwithComments(1)


module.exports = { aboveHundredPosts, getPostsandCount, createPost, updatePostwithComments, deletePost, updatePost };