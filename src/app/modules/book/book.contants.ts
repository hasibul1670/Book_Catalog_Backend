export const bookFilterableFields: string[] = [
    'searchTerm',
    'id',
    'category',
];

export const bookSearchableFields: string[] = ['title','author','genre'];

export const bookRelationalFields: string[] = ['academicFacultyId'];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
    academicFacultyId: 'academicFaculty'
};
