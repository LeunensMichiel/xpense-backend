export interface Xpense {
    _id: string;
    title: string;
    date: Date;
    cost: number;
    category?: string;
    imageUrl?: string;
}