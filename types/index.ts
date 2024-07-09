export type CreateUserType = {
    clerkId: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
}

export type ProductModelType = {
    _id: string;
    title: string;
    details: string;
    category: string;
    status: string;
    creator: UserModelType;
    upVotes: string[];
    comments: CommentModelType[];
}

export type UserModelType = {
    _id: string;
    clerkId: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
}

export type CommentModelType = {
    _id: string;
    user: UserModelType;
    content: string;
    replies: ReplyModelType[];
}

export type ReplyModelType = {
    _id: string;
    user: UserModelType;
    content: string;
    replyingTo: string;
}