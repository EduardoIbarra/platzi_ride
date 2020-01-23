export class Ride {
    id?: string;
    title: string;
    start: string;
    wayPoints?: any[];
    end?: string;
}
export const DEFAULT_RIDE_OBJECT: Ride = {
    title: '',
    start: '',
};
