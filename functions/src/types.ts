
export interface Invite extends FirebaseFirestore.DocumentData {
    creatorName: string,
    libraryName: string,
    whenCreated: FirebaseFirestore.Timestamp,
    whenExpires: FirebaseFirestore.Timestamp,
}

export interface Showcase extends FirebaseFirestore.DocumentData {
    title: string,
}
