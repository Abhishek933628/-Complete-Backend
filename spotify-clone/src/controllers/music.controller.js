const musicModel = require('../models/music.model');
const {uploadFile} = require('../services/storage.service');
const jwt = require('jsonwebtoken');
const albumModel= require("../models/album.model");



async function  createMusic(req,res) {
  
  const {title} = req.body;
  const file = req.file;


  const result = await uploadFile(file.buffer.toString('base64'))

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  })

  res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
  
    }
  })


}


async function  createAlbum(req,res) {

   const { title, musics} = req.body;

  const album = await albumModel.create({
   
    title,
    artist: req.user.id,
    music: musics,
  })

  res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      music: album.music,
      title: album.title,
      artist: album.artist,
  
    }
  })

}



async function getAllMusics(req, res) {
  const musics = await musicModel.find().limit(1).populate("artist")

  res.status(200).json({
    message: "Music fetched succcessfully",
    musics: musics,
  })
}

async function getAllAlbums(req,res) {
  const albums = await albumModel.find().select("title artist ").populate("artist", "username email").populate("music")


  res.status(200).json({
    message: "Album fetched succcessfully",
    albums: albums,
  })

}


async function getAllAlbumById(req,res) {
  const albumId = req.params.albumId;

  const album = await albumModel.findById(albumId).populate('artist','username email').populate('music')

  res.status(200).json({
    message: "Album fetched succcessfully",
    album: album,
  })


}





module.exports = { createMusic,createAlbum, getAllMusics, getAllAlbums,getAllAlbumById}