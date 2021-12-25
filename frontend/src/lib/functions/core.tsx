
export function randomCharacters(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



export function randomDigits(length: number) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



export function uniqueFromFs(directoryPath: string, length: number, context: string){
	let  content;
	while(true){
		if (context==="digits"){
			content = randomDigits(length)
		}else{
			content = randomCharacters(length);
		}

		
		if (!fs.existsSync(path.join(directoryPath,content))){
			break;
		}
	}
    return content;
        
}


export function uniqueDigitsFromFs(directoryPath: string, length: number){
    return uniqueFromFs(directoryPath, length, "digits");
}



export function uniqueCharactersFromFs(directoryPath: string, length: number){
    return  uniqueFromFs(directoryPath, length, "characters");
}