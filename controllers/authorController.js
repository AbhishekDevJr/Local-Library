const Author = require('../models/author');
const asyncHandler = require('express-async-handler');

exports.author_list = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED : Author List');
});

exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED : Author Detail : ${req.params.id}`);
});

exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send('NOT INPLEMENTED : Author Create Get');
});

exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED : Author Create Post');
});

exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED : Author Delete Get');
});

exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED : Author Delete Post');
});

exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED : Author Update Get');
});

exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED : Author Update Post');
});