import * as chatRepo from '../repositories/chatRepositories'
import { CreateMessageValues } from '../utils/schema/chat'
import path from 'node:path'
import fs from 'node:fs'

export const createRoomPersonal = async (sender_id: string, receiver_id: string) => {
    return await chatRepo.createRoomPersonal(sender_id, receiver_id)
}

export const getRecentRooms = async (userId: string) => {
    return await chatRepo.getRooms(userId)
}

export const getRoomMessages = async (roomId: string) => {
    return await chatRepo.getRoomMessages(roomId)
}

export const createMessage = async (data: CreateMessageValues, userId: string, file: Express.Multer.File | undefined) => {
    const room = await chatRepo.findRoomById(data.room_id)

    if (room.is_group) {
        const member = await chatRepo.findMember(userId, room.id)

        if (!member) {

            if (file) {
                const pathFile = path.join(__dirname, "../../public/assets/uploads/attach_messages/", file.filename)

                if (fs.existsSync(pathFile)) {
                    fs.unlinkSync(pathFile)
                }
            }

            throw new Error("You are not a member of this group")
        }
    }

    return await chatRepo.createMessage(data, userId, file)
}