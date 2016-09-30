var mongoose = require('mongoose');

var CommentSchema - ({
	body: String,
	author: String,
	upvotes: { type: Number, default: 0 },
	post: { type: mongoose.Schema.Types.objectId, ref: 'Post' }
});

mongoose.model('Comment', CommentSchema);