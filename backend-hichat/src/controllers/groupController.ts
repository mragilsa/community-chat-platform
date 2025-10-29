import e, { NextFunction, Request, Response } from "express";
import { CustomRequest } from "../types/CustomRequest";
import { groupSchema, joinGroup } from "../utils/schema/group";
import * as groupService from '../services/groupService'

export const getDiscoverGroups = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const {name} = req.query

        const data = await groupService.getDiscoverGroups(name as string ?? "")

        return res.json({
            success: true,
            message: "Get discover group success",
            data
        })
    } catch (error) {
        next(error)
    }
}

export const getOwnGroups = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await groupService.getMyOwnGroups(req.user?.id ?? "")

        return res.json({
            success: true,
            message: "Get my own groups success",
            data
        })
    } catch (error) {
        next(error)
    }
}

export const getDiscoverPeoples = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const {name} = req.query
        
        const data = await groupService.getDiscoverPeoples(name as string ?? "", req?.user?.id)

        return res.json({
            success: true,
            message: "Get discover peoples success",
            data
        })
    } catch (error) {
        next(error)
    }
}

export const findDetailGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const {id} = req.params
        
        const data = await groupService.findDetailGroup(id, req.user?.id ?? "")

        return res.json({
            success: true,
            message: "Get detail group success",
            data
        })
    } catch (error) {
        next(error)
    }
}

export const createFreeGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const parse = groupSchema.safeParse(req.body)
        
        if (!parse.success) {
            const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`)
        
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                detail: errorMessage
            })
        }

        if (!req.file) {
            return res.status(400).json({
                success: true,
                message: "File photo is required"
            })
        }

        const group = await groupService.upsertGroup(parse.data, req?.user?.id ?? "", req.file.filename)

        return res.json({
            success: true,
            message: "Create group success",
            data: group
        })
    } catch (error) {
        next(error)
    }
}

export const updateFreeGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {

        const {groupId} = req.params

        const parse = groupSchema.safeParse(req.body)
        
        if (!parse.success) {
            const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`)
        
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                detail: errorMessage
            })
        }

        const group = await groupService.upsertGroup(parse.data, req?.user?.id ?? "", req?.file?.filename, groupId)

        return res.json({
            success: true,
            message: "Update group success",
            data: group
        })
    } catch (error) {
        next(error)
    }
}

export const createMemberGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const parse = joinGroup.safeParse(req.body)
        
        if (!parse.success) {
            const errorMessage = parse.error.issues.map((err) => `${err.path} - ${err.message}`)
        
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                detail: errorMessage
            })
        }
        
        const data = await groupService.addMemberGroup(parse.data.group_id, req?.user?.id ?? "")

        return res.json({
            success: true,
            message: "Success join group",
            data
        })
    } catch (error) {
        next(error)
    }
}