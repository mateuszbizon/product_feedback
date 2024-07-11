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

export type CreateProductResponseType = {
    data?: ProductModelType;
    message?: string;
    error?: string;
}

export type GetAllProductsResponseType = {
    data?: ProductModelType[];
    message?: string;
    error?: string;
}

export type RoadmapProductsType = {
    plannedProducts: ProductModelType[];
    liveProducts: ProductModelType[];
    inProgressProducts: ProductModelType[];
}

export type GetRoadmapProductsResponseType = {
    data?: RoadmapProductsType;
    message?: string;
    error?: string;
}