const BookInstance = require('../models/bookinstance');
const asyncHandler = require('express-async-handler');

exports.bookinstance_list = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : BookInstance List');
});

exports.bookinstance_detail = asyncHandler((req, res, next) => {
    res.send(`NOT IMPLEMENTED : BookInstance Detail : ${req.params.id}`);
});

exports.bookinstance_create_get = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : BookInstance Create GET');
});

exports.bookinstance_create_post = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : BookInstance Create POST');
});

exports.bookinstance_delete_get = asyncHandler((req, res, next) => {
    res.send('NOT IMPLEMENTED : BookInstance Delete GET');
});

exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance Delete POST");
});

exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
});

exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
});