import { SortCriteriaType, SortFielsType } from "@/types";

export function getSortCriteria(sort: string) {
    const sortData: { [key: string]: { sortCriteria: SortCriteriaType, sortFields: SortFielsType } } = {
        "Most Comments": { sortCriteria: { commentsLength: -1 }, sortFields: { commentsLength: { $size: "$comments" } } },
        "Least Comments": { sortCriteria: { commentsLength: 1 }, sortFields: { commentsLength: { $size: "$comments" } } },
        "Most Upvotes": { sortCriteria: { upVotesLength: -1 }, sortFields: { upVotesLength: { $size: "$upVotes" } } },
        "Least Upvotes": { sortCriteria: { upVotesLength: 1 }, sortFields: { upVotesLength: { $size: "$upVotes" } } },
    }

    return sortData[sort] || sortData[0]
}