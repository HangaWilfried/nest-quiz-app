import { BaseEntity } from "typeorm";
export declare class Quiz extends BaseEntity {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
}
