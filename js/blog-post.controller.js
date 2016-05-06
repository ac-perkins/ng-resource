(function() {
    'use strict';

    angular.module('app')
        .controller('BlogPostController', BlogPostController);

    BlogPostController.$inject = ['BlogPostService'];
    function BlogPostController(BlogPostService) {
      var that = this;

      this.postId = "";
      this.postDetail = null;
      this.newPost = null;

      this.getPostDetails = function getPostDetails(){
        that.postDetail = BlogPostService.get({ id: that.postId }, function() {
          return that.postDetail;
        });
      };

      this.posts = BlogPostService.query( function() {
        console.log(that.posts);
      });

      this.deletePost = function deletePost(postId) {
        BlogPostService.remove({ id: postId }, function() {
          console.log(that.deletePost);
        });
      };

      this.makeNewPost = function makeNewPost() {
        console.log(that.newPost);
      BlogPostService.save(that.newPost, function() {

      });


    };




    }

})();
