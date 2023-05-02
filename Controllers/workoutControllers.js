const express=require('express')
const mongoose=require('mongoose')
const Workouts=require('../Models/workoutModel')

const getWorkouts=async(req,res)=>{
    const user_id=req.user._id
    const workouts= await Workouts.find({user_id}).sort({createAt:-1})
    res.status(200).json(workouts)
}
const createWorkout=async(req,res)=>{
    const {title,load,reps}=req.body
    let errorFields=[]
    if(!title){
        errorFields.push('title')
    }
    if(!load){
        errorFields.push('load')
    }
    if(!reps){
        errorFields.push('reps')
    }
    if(errorFields.length > 0){
        res.status(400).json({error:'please fill in all fields',errorFields})
        return
    }
    
    try {
        const user_id=req.user._id 
        const newWorkout= await Workouts.create({title,load,reps,user_id})
        res.status(200).json(newWorkout)      
    } catch (error) {
        res.status(400).json({message:error.message})}}

const deleteWorkout=async(req,res)=>{
    const {id}= req.params
    const response= await Workouts.findOneAndDelete({_id:id})
    if(!response){
        res.status(400).json({error:'No Such WOrkout'})
    }
    res.status(201).json(response)}

module.exports={createWorkout,getWorkouts,deleteWorkout}