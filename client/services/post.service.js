(function() {
  'use strict'

  angular.module('app')
  .service('PostService', PostService)

  PostService.$inject = ['$http', '$q']

  function PostService($http, $q) {
    this.getAll = getAll
    this.getOne = getOne
    this.create = create
    this.remove = remove
    this.update = update

    function getAll() {
      let req = {
        method: 'GET',
        url: `api/classifieds/`
      }

      return $http(req).then(success, fail)

      function success(result) {
        return result.data
      }

      function fail(err) {
        return $q.reject(err)
      }
    }

    function getOne(id) {
      let req = {
        method: 'GET',
        url: `api/classifieds/${id}`
      }

      return $http(req).then(success, fail)

      function success(result) {
        return result.data
      }

      function fail(err) {
        return $q.reject(err)
      }
    }

    function create(post) {
      let req = {
        method: 'POST',
        url: `api/classifieds/`,
        data: post
      }

      return $http(req).then(success, fail)

      function success(result) {
        return result.data
      }

      function fail(err) {
        return $q.reject(err)
      }
    }

    function update(post) {
      let req = {
        method: 'PATCH',
        url: `api/classifieds/${post.id}`,
        data: post
      }

      return $http(req).then(success, fail)

      function success(result) {
        return result.data
      }

      function fail(err) {
        return $q.reject(err)
      }
    }

    function remove(id) {
      let req = {
        method: 'DELETE',
        url: `api/classifieds/${id}`
      }

      return $http(req).then(success, fail)

      function success(result) {
        return result.data
      }

      function fail(err) {
        return $q.reject(err)
      }
    }
  }
})()
