export interface Message {
    id?: number,
    timeOfSending: string,
    senderId: number,
    receiverId: number,
    message: string,
    type: string,
    rideId?: number
}
