import express from 'express';
import AyurvedicTreatmentController from '../controllers/AyurvedicTreatmentController.js';

const router = express.Router();

// Define the routes for the treatment operations
router.post('/', AyurvedicTreatmentController.createTreatment);
router.get('/', AyurvedicTreatmentController.getAllTreatments);
router.get('/:id', AyurvedicTreatmentController.getTreatmentById);
router.put('/:id', AyurvedicTreatmentController.updateTreatment);
router.delete('/:id', AyurvedicTreatmentController.deleteTreatment);

export default router;
