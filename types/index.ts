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

export type BasicResponse<Data> = {
    data?: Data;
    message?: string;
    error?: string;
}

export type CreateProductResponseType = ProductModelType;

export type GetAllProductsResponseType = ProductModelType[];

export type RoadmapProductsType = {
    plannedProducts: ProductModelType[];
    liveProducts: ProductModelType[];
    inProgressProducts: ProductModelType[];
}

export type GetRoadmapProductsResponseType = RoadmapProductsType;

export type GetSingleProductResponseType = ProductModelType;

export type EditProductFeedbackResponseType = ProductModelType;

export type CreateCommentResponseType = CommentModelType;

export type CreateReplyResponseType = ReplyModelType;

export type DeleteProductResponseType = ProductModelType;

export type UpVoteProductResponseType = ProductModelType;

export type SortCriteriaType = {
    [key: string]: 1 | -1
}

export type SortFielsType = {
    commentsLength?: {
        $size: string;
    };
    upVotesLength?: {
        $size: string;
    }
}