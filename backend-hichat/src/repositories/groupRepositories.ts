import prisma from "../utils/prisma";
import { GroupValues } from "../utils/schema/group";
import * as userRepositories from './userRepositories'

export const findGroupById = async (id: string) => {
    return await prisma.group.findFirstOrThrow({
        where: {
            id
        }
    })
}

export const getDiscoverGroups = async (name = "") => {
    return await prisma.group.findMany({
        where: {
            name: {
                contains: name,
                mode: "insensitive"
            }
        },
        select: {
           photo_url: true,
           id: true,
           name: true,
           about: true,
           room: {
            select: {
                _count: {
                    select: {
                        members: true
                    }
                }
            }
           }
        }
    })
}

export const getDiscoverPeoples = async (name = "", userId?: string) => {
    return await prisma.user.findMany({
        where: {
            id: {
                not: userId
            },
            name: {
                contains: name,
                mode: "insensitive"
            }
        },
        select: {
            id: true,
            name: true,
            photo_url: true,
        }
    })
}

export const upsertGroup = async (data: GroupValues, userId: string, photo?: string, groupId?: string) => {
     const owner = await userRepositories.findRole("OWNER")

     return await prisma.group.upsert({
        where: {
            id: groupId ?? ""
        },
        create: {
            photo: photo ?? "",
            name: data.name,
            about: data.about,
            room: {
                create: {
                    created_by: userId,
                    name: data.name,
                    members: {
                        create: {
                            user_id: userId,
                            role_id: owner.id
                        }
                    },
                    is_group: true
                }
            }
        },
        update: {
            photo: photo,
            name: data.name,
            about: data.about,
        }
     })
}

export const findDetailGroup = async (id: string, userId: string) => {
    return await prisma.group.findFirstOrThrow({
        where: {
            id: id,
            room: {
                created_by: userId
            }
        },
        select: {
            id: true,
            name: true,
            photo_url: true,
            about: true,
            room: {
                select: {
                    members: {
                        take: 1,
                        where: {
                            user_id: userId
                        },
                        select: {
                            user: {
                                select: {
                                    name: true,
                                    photo_url: true,
                                }
                            }
                        }
                    },
                    _count: {
                        select: {
                            members: true
                        }
                    }
                }
            }
        }
    })
}

export const getMyOwnGroups = async (userId: string) => {
    return await prisma.group.findMany({
        where: {
            room: {
                created_by: userId
            }
        },
        select: {
            id: true,
            photo_url: true,
            name: true,
            room: {
                select: {
                    _count: {
                        select: {
                            members: true
                        }
                    },
                    id: true
                }
            }
        }
    })
}

export const getTotalMembers = async (roomIds: string[]) => {
    return await prisma.roomMember.count({
        where: {
            room_id: {
                in: roomIds
            }
        }
    })
}

export const getMemberById = async (userId: string, groupId: string) => {
    return await prisma.roomMember.findFirst({
        where: {
            user_id: userId,
            room: {
                group: {
                    id: groupId
                }
            }
        }
    }) 
}

export const addMemberToGroup = async (roomId: string, userId: string) => {
    
    const role = await userRepositories.findRole("MEMBER")
    
    return await prisma.roomMember.create({
        data: {
            room_id: roomId,
            user_id: userId,
            role_id: role.id
        }
    })
}