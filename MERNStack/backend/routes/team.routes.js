import express from "express";
import Team from "../models/team.model.js";
import mongoose from 'mongoose';
import { createTeam, getTeams } from "../controller/team.controller.js";
import { updateTeam } from "../controller/team.controller.js";
import { deleteTeam } from "../controller/team.controller.js";

const router = express.Router();

router.get("/", getTeams);
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

export default router;