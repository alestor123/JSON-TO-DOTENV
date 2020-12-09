module.exports = (json) => {
return JSON.stringify(json).replace(/{|}|"/g,'').replace(/:|"/g,'=').replace(/,/g,'\n') //please dont use this method it was made in a hurry use the proper method. will be update soon
}
