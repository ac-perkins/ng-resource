(function() {
    'use strict';

    angular.module('app')
      .factory('BlogPostService', BlogPostService);

      BlogPostService.$inject = ['$resource'];

      function BlogPostService($resource) {
        return $resource('https://tiy-blog-api.herokuapp.com/api/Posts/:id', {}, {
          remove: {
              method: 'DELETE',
              headers: {
                 Authorization: "c8LjPqUHIPIxxrEOnJMPhKa5FX6HERPb118FDBvgYYxvn062a7CCLOwXs4ueG9Ti"
              }
          },
          save: {
              method: 'POST',
              headers: {
                 Authorization: "c8LjPqUHIPIxxrEOnJMPhKa5FX6HERPb118FDBvgYYxvn062a7CCLOwXs4ueG9Ti"
              }
          }
        });
      }

})();
