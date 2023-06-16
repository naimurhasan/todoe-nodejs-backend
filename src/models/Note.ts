import mongoose, {Schema, Document} from "mongoose";

export interface INote extends Document{
    title: string;
    content: string;
}

const NoteSchema: Schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});

const Note = mongoose.model<INote>('Note', NoteSchema);

export default Note;