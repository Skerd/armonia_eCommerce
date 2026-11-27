/** A platform category as a reference (D195): `name` is in the reader's language, the only one sent. */
export type CategorySimple = {
    _id: string;
    name: string;
    slug: string;
};

/** What the server reads of a referenced category to name it in the reader's language; `names` never leaves the server. */
export type CategorySimpleSource = CategorySimple & {
    names?: {en?: string; sq?: string; de?: string; fr?: string; it?: string};
};
