export interface Note {
    NoteId?: number;
    OwnerId?: number;
    Title: string;
    Content: string;
    isStarred?: boolean;
    CreatedUtc?: Date;
    ModifiedUtc?: Date;
}