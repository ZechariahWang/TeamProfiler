import express from "express";
import Team from "../models/team.model.js";
import mongoose from 'mongoose';

export const getTeams = async (req, res) => {
    try {
        const Teams = await Team.find({});
        res.status(200).json({success: true, data: Teams});
    } catch (error) {
        console.log("Error in fetching teams: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const createTeam = async (req, res) => {
    const Team = req.body; // user will send this data

    if (!Team.name) {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newTeam = new Team(Team);

    try {
        await newTeam.save();
        res.status(201).json({success:true, data: newTeam});
    } catch (error) {
        console.log("Error in creating team: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateTeam = async (req, res) => {
    const {id} = req.params;
    const Team = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid team ID"});
    }

    try {
        const updateTeam = await Team.findByIdAndUpdate(id, Team, {new:true});
        res.status(200).json({success: true, data: updateTeam});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const deleteTeam = async (req, res) => {
    const {id} = req.params;
    console.log("ID: ", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid team ID"});
    }

    try {
        await Team.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Team Deleted"});
    } catch (error) {
        console.log("Error in deleting team: ", error.message);
        res.status(404).json({success: false, message: "Server Error"});
    }
}