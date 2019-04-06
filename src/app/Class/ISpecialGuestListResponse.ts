import { ISpecialGuestDetails } from './ISpecialGuestDetails';

export interface ISpecialGuestListResponse {
    status: number;
    message: string;
    data: ISpecialGuestDetails[];
}
