import * as React from 'react';
import {useCallback,useState,useEffect} from 'react'
import Button from "@mui/material/Button"
import {useDropzone} from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image';
import Box from "@mui/material/Box"
import getBase64FromFile from "../browser/getBase64FromFile";


export default function ImageFormView(props: ImageFormViewProps) {
	var FileListItems = function(files: any) {
		var b = new ClipboardEvent("").clipboardData || new DataTransfer()
		for (var i = 0, len = files.length; i<len; i++){ 
			b.items.add(files[i]);
		}
		return b.files
	}
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
	(document.getElementsByName(props.name)[0] as HTMLInputElement).files = FileListItems(acceptedFiles);
    getBase64FromFile(acceptedFiles[0]).then(base64=>{
      setImagePlaceholder(<img alt="dragged_image" src={ base64 } style={{ minWidth: "200px", maxWidth: "80vw", maxHeight: "60vh" }} />);
    });
    //console.log();
  }, [props]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  const defaultImagePlaceholder = <ImageIcon style={{ minWidth: "200px", maxWidth: "80vw" }} />;
  const [ imagePlaceholder, setImagePlaceholder ] = useState(defaultImagePlaceholder);
  
	useEffect(function(){
    document.body.addEventListener("paste",function(e){
		(document.getElementsByName(props.name)[0] as HTMLInputElement).files = FileListItems(e.clipboardData?.files);
      getBase64FromFile(e.clipboardData?.files[0] as File).then(base64=>{
        setImagePlaceholder(<img alt="dragged_image" src={ base64 } style={{ minWidth: "200px", maxWidth: "80vw" }} />);
      });
    });
  },[props])  
  
  useEffect(function(){
    let imagePlaceholder =  isDragActive?
     <Box component="span" sx={{ p: 2, border: '1px dashed grey', width: "200px", height: "200px" }}></Box>
    :<ImageIcon style={{ width: "200px", height: "200px" }} />;
    setImagePlaceholder(imagePlaceholder);
  },[isDragActive])

  return (
    <div {...getRootProps()}>
    <input {...getInputProps()} />
	<input name={ props.name } type="file" style={{ display: "none" }} />
    <Button sx={{ minWidth: "200px", maxWidth: "80vw" }}>
        { imagePlaceholder }
    </Button>
    </div>
  )
}


interface ImageFormViewProps{
	name: string
}
