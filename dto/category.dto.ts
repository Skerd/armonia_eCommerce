/** A platform category as a reference (D195): `name` is in the reader's language. */
export type CategorySimple = {
    _id: string;
    name: string;
    names?: {en?: string; sq?: string; de?: string; fr?: string; it?: string};
    slug: string;
};
