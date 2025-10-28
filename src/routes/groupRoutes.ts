import express from 'express'
import multer from 'multer'
import { storageGroupPhoto } from '../utils/multer'
import verifyToken from '../middlewares/verifyToken'
import * as groupController from '../controllers/groupController'

const groupRoutes = express.Router()

const uploadPhoto = multer({
    storage: storageGroupPhoto,
    fileFilter(req, file, callback) {
        if (file.mimetype.startsWith('image/')) {
            callback(null, false)
        }

        callback(null, true)
    },
})

groupRoutes.get(
    "/groups",
    verifyToken,
    groupController.getDiscoverGroups
)

groupRoutes.get(
    "/own-groups",
    verifyToken,
    groupController.getOwnGroups
)

groupRoutes.get(
    "/groups/:id",
    verifyToken,
    groupController.findDetailGroup
)

groupRoutes.get(
    "/peoples",
    verifyToken,
    groupController.getDiscoverPeoples
)

groupRoutes.post(
    "/groups",
    verifyToken,
    uploadPhoto.single('photo'),
    groupController.createFreeGroup
)

groupRoutes.put(
    "/groups/:groupId",
    verifyToken,
    uploadPhoto.single('photo'),
    groupController.updateFreeGroup
)

groupRoutes.post(
    "/groups/join",
    verifyToken,
    groupController.createMemberGroup
)

export default groupRoutes