import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose)

const bookSchema = new mongoose.Schema(
    {
        _id: Number,
        title: { type: String, required: true },
        author: String,
        publishedYear: Number,
        genre: String,
    }, { timestamps: true, _id: false });

bookSchema.plugin(AutoIncrement, {inc_field: '_id'});

export const Book =  mongoose.model('Book', bookSchema);