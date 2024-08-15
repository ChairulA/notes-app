const { nanoid } = require('nanoid');
const notes = require('./note');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};


const getAllNoteHanler = () => ({
    status: 'success',
    data: {
        notes,
    }
})

const getNotebyIdHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'failed',
        message: 'catatan tidak ditemukan'
    })
    response.code(404);
    return response;
}

const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        }
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil diperbarui',
        })
        response.code(200);
        return response;
    }
    const responese = h.responese({
        status: 'failed',
        message: 'gagal memperbarui catatan, id tidak ditemukan!'
    })
    responese.code(404);
    return responese;
}


const delateNoteById = (request, h) => {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes.splice(index, 1);
        const responese = h.responese({
            status: 'success',
            message: 'Catatan berhasil dihapus'
        })
        responese.code(200);
        return responese;
    }
    const responese = h.responese({
        status: 'failed',
        message: 'Id tidak ditemukan'
    })
    responese.code(404);
    return responese;
}



module.exports = { addNoteHandler, getAllNoteHanler, getNotebyIdHandler, editNoteByIdHandler, delateNoteById };