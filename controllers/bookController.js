const Book = require('../models/book');
const asyncHandler = require('express-async-handler');

exports.index = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
});

exports.book_list = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : Book List');
});

exports.book_detail = asyncHandler((req, res, next) => {
    res.send(`NOT IMPLEMENTED : Book Detail : ${req.params.id}`);
});

exports.book_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create GET");
});

// Handle book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create POST");
});

exports.book_delete_get = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : Book Delete GET');
});

exports.book_delete_post = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : Book Delete POST');
});

exports.book_update_get = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : Book Update GET');
});

exports.book_update_post = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : Book Update POST');
});