(function() {
  'use strict'

  angular.module('app')
    .component('editPost', {
      controller: EditPostController,
      templateUrl: 'posts/edit-post.template.html'
    })

  EditPostController.$inject = ['$state', 'PostService']

  function EditPostController($state, PostService) {
    const vm = this

    vm.$onInit = function() {
      vm.editPost = {}
      getSinglePost($state.params.id)
    }

    vm.updatePost = updatePost

    function getSinglePost(id) {
      PostService
        .getOne(id)
        .then(success, fail)

      function success(result) {
        vm.postTitle = result.title
        vm.editPost = result
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
  }
})()
