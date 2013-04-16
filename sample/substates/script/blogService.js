﻿angular.module('sample').service('blog', function ($timeout) {
    var monthlong = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.getPost = function (title) {
        var result;
        angular.forEach(posts, function (post) {
            if (post.title === title)
                result = post;
        });
        result.views++;
        return $timeout( function() {
            return result;
        },500);
    };

    this.getRecentPosts = function () {
        return $timeout(function () {
            return posts.slice(0, 5);
        }, 700);
    };

    this.getPostsByCategory = function (category) {
        var result = [];
            if (post.category === category)
        });
            return result;
        }, 2000);
    };

    this.getPostsByArchive = function (month) {
        var result = [];
            var postMonth = monthlong[post.date.getMonth()] + ' ' + post.date.getFullYear();
        });
            return result;
        }, 500);
    };
    this.getArchives = function () {
        var months = [];
            var month = monthlong[post.date.getMonth()] + ' ' + post.date.getFullYear();
        });
            return months;
        }, 500);
    };
    this.getCategories = function () {
        var categories = [];
            if (categories.indexOf(post.category) === -1)
        });
            return categories;
        }, 500);
    };
});