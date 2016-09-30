var mongoose = require('mongoose');

var PostSchema = mew mongoose.schema({
	title: String,
	link: String,
	upvotes: { type: Number, default: 0 },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);