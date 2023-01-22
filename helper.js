//Get genre, title, composer name from file
exports.getPieceDetails = (file) => {
    const fileSplit = file.split('_')

    fileSplit[0] = fileSplit[0].split('/').pop()
    
    const genre = fileSplit[0]
    // console.log(fileSplit)
    const pieceTitle = fileSplit.splice(1, fileSplit.length - 3).join(" ")
    // console.log(pieceTitle)
    const composerName = fileSplit[fileSplit.length - 2]

    return {genre, pieceTitle, composerName}
}


