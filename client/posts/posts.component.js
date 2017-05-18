(function() {
  'use strict'

  angular.module('app')
  .component('posts', {
    controller: PostController,
    templateUrl: 'posts/posts.template.html'
  })

  PostController.$inject = ['PostService', '$state']

  function PostController(PostService, $state) {
    const vm = this

    vm.$onInit = onInit
    vm.createPost = createPost
    vm.deletePost = deletePost
    vm.sortBy = 'title'

    function onInit() {
      vm.posts = []
      getAllPosts()
    }

    function getAllPosts() {
      PostService
        .getAll()
        .then(success, fail)

      function success(result) {
        vm.posts = result
      }

      function fail(err) {
        console.log(err)
      }
    }

    function createPost(post) {
      PostService
        .create(post)
        .then(success, fail)

      function success(result) {
        vm.posts.push(result)
        vm.isNewPostVisible = !vm.isNewPostVisible
        delete vm.post
        vm.newPostForm.$setUntouched()
      }

      function fail(err) {
        console.log(err)
      }
    }

    function updatePost(post) {
      PostService
        .update(post)
        .then(success, fail)

      function success(result) {
        $state.go('posts')
      }

      function fail(err) {
        console.log(err)
      }
    }

    function deletePost(id) {
      PostService
        .remove(id)
        .then(success, fail)

      function success(result) {
        vm.posts.splice(vm.posts.indexOf(result), 1)
      }

      function fail(err) {
        console.log(err)
      }
    }
  }
})()
