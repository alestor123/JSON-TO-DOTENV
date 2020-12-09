module.exports = (json) => {
return JSON.stringify(json).replace(/{|}|"/g,'').replace(/:|"/g,'=').replace(/,/g,'\n')
}