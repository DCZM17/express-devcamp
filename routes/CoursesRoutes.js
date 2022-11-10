const express = require ('express')
const { 
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse
} = require ('../controllers/CourseController')


//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllCourses)
            .post(createCourse)

//crear rutas con parametro
router.route('/:id')
            .get(getSingleCourse)
            .put(updateCourse)
            .delete(deleteCourse)

module.exports = router