import { GroupValues } from "../utils/schema/group";
import * as groupRepositories from '../repositories/groupRepositories'
import fs from 'node:fs'
import path from 'node:path'

export const getDiscoverGroups = async (name?: string) => {
    return await groupRepositories.getDiscoverGroups(name)
}

export const getDiscoverPeoples = async (name?: string, userId?: string) => {
    return await groupRepositories.getDiscoverPeoples(name, userId)
}

export const findDetailGroup = async (id: string, userId: string) => {
    return await groupRepositories.findDetailGroup(id, userId)
}

export const upsertGroup = async (data: GroupValues, userId: string, photo?: string,  groupId?: string) => {
    
    if (groupId && photo) {
        const group = await groupRepositories.findGroupById(groupId)

        const pathPhoto = path.join(__dirname, '../../public/assets/uploads/groups', group.photo)

        if (
            fs.existsSync(pathPhoto)
        ) {
            fs.unlinkSync(pathPhoto)
        }
    }
    
    const group = await groupRepositories.upsertGroup(data, userId, photo, groupId)

    return group
}

export const getMyOwnGroups = async (userId: string) => {
    const groups = await groupRepositories.getMyOwnGroups(userId)

    const totalGroups = groups.length

    const totalMembers = await groupRepositories.getTotalMembers(
        groups.map((item) => item.room.id)
    )

    return {
        lists: groups.map((item) => {
            return {
                id: item.id,
                photo_url: item.photo_url,
                name: item.name,
                total_members: item.room._count.members
            }
        }),
        total_groups: totalGroups,
        total_members: totalMembers
    }
}

export const addMemberGroup = async (groupId: string, userId: string) => {
    const checkMember = await groupRepositories.getMemberById(userId, groupId)

    if (checkMember) {
        throw new Error("You already joined group")
    }

    const group = await groupRepositories.findGroupById(groupId)

    await groupRepositories.addMemberToGroup(group.room_id, userId)

    return true
}