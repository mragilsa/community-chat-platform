import multer from "multer"

export const storageUserPhoto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/uploads/photos')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = file.mimetype.split('/')[1]

    const filename = `photo-${uniqueSuffix}.${extension}`

    cb(null, filename)
  }
})

export const storageGroupPhoto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/uploads/groups')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = file.mimetype.split('/')[1]

    const filename = `photo-${uniqueSuffix}.${extension}`

    cb(null, filename)
  }
})

export const sto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/uploads/groups')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = file.mimetype.split('/')[1]

    const filename = `photo-${uniqueSuffix}.${extension}`

    cb(null, filename)
  }
})

export const storagePhotoAttach = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/uploads/attach_messages')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = file.mimetype.split('/')[1]

    const filename = `photo-${uniqueSuffix}.${extension}`

    cb(null, filename)
  }
})


