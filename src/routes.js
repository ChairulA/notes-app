const { addNoteHandler, getAllNoteHanler, getNotebyIdHandler, editNoteByIdHandler, delateNoteById } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHanler,
    },
    {
        method: 'GET',
        path: '/note/{id}',
        handler: getNotebyIdHandler,
    },
    {
        method: 'PUT',
        path: '/mote/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELATE',
        path: '/note/{id}',
        handler: delateNoteById,
    }
];

module.exports = routes;