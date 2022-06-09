const axios = require("axios")
const fs = require('fs');
const {METADATA} = require('./meta')
const rangokey = "2c8fc18f-7253-4470-a196-97c1c3a1196a";
const tokens = METADATA.tokens;
const swappers = METADATA.swappers;
let lastid = -1;
const update = async()=>{
    let rawdata = fs.readFileSync('./status.json');
    let status = JSON.parse(rawdata);
    lastid = status.lastid;
    downloadOne();
}
const changeMetadata = async()=>{
    let newMetadata = {...METADATA};
    for(let i=0;i<newMetadata.swappers.length;i++){
        const imgUrl = newMetadata.swappers[i].logo;
        const lastIndex = imgUrl.lastIndexOf("/");
        let imgName = imgUrl.substring(lastIndex+1,imgUrl.length);
        if(imgName.indexOf(".png")<0){
            imgName = imgName +".png"
        }     
        newMetadata.swappers[i].logo = "https://beta.tide.exchange/meta/img/swappers/"+imgName;
    }

    for(let i=0;i<newMetadata.tokens.length;i++){
        const imgUrl = newMetadata.tokens[i].image;
        const lastIndex = imgUrl.lastIndexOf("/");
        let imgName = imgUrl.substring(lastIndex+1,imgUrl.length);
        if(imgName.indexOf(".png")<0){
            imgName = imgName +".png"
        }     
        newMetadata.tokens[i].image = "https://beta.tide.exchange/meta/img/tokens/"+imgName;
    }

    fs.writeFileSync('./newMetadata.json', JSON.stringify(newMetadata));

}
const downloadSwagger = async()=>{
    for(let i=0;i<swappers.length;i++){
        const imgUrl = swappers[i].logo;
        const lastIndex = imgUrl.lastIndexOf("/");
        let imgName = imgUrl.substring(lastIndex+1,imgUrl.length);
        if(imgName.indexOf(".png")<0){
            imgName = imgName +".png"
        }     
        const flagCon = await downloadImage(imgUrl+"?apiKey="+rangokey,"./img/swappers/"+imgName)
        console.log(imgUrl)
    }
    console.log("Completed");
}
const downloadOne = async()=>{
    lastid = lastid + 1;
    const imgUrl = tokens[lastid].image
    const lastIndex = imgUrl.lastIndexOf("/");
    let imgName = imgUrl.substring(lastIndex+1,imgUrl.length);
    if(imgName.indexOf(".png")<0){
        imgName = imgName +".png"
    }     
    const flagCon = await downloadImage(imgUrl+"?apiKey="+rangokey,"./img/tokens/"+imgName)
    console.log('Download ',lastid,"/",tokens.length,imgName);
    let data = JSON.stringify({lastid});
    fs.writeFileSync('./status.json', data);
    if(lastid<tokens.length-1 && flagCon){
        setTimeout(()=>{downloadOne()},10);
    }
    if(flagCon==false){
        console.log("Got some error while downloading..");
    }
    if(lastid==tokens.length-1) {
        console.log("Download completed.");
    }
}
const downloadImage = async(url, filepath)=>{
    let response;
    try{
        response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });
    }catch(error){
        if(error.response.status==404){
            console.log("No images",url)
            return(true);
        }else{
            return(false)
        }
    }
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .once('close', () => resolve(filepath)); 
    });
    return(true);
}

//update();
//downloadSwagger();
//changeMetadata();