import { useState } from "react";
import ImageFormView from "./lib/components/ImageFormView";
import Center from "./lib/components/Center";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { uniqueCharactersFromFs } from "./lib/functions/core";
import getArrayBufferFromFile from "./lib/browser/getArrayBufferFromFile";
import CircularProgress from "@mui/material/CircularProgress";

function App() {

	const [textIsDisplayed, displayText] = useState(false);
	const [generatedText, setGeneratedText] = useState(<div></div>);

  	return <>
		<Center style={{ height: "80vh" }}>
			<form id="pasting">
				<Center>
					<ImageFormView name="image" />
				</Center>

				<Center style={{ marginTop: "20px" }}>
					<Button variant="contained" onClick={e=>{
						displayText(true);
						setGeneratedText(
							<Center style={{ width: "100%", height: "100%", minHeight: "50vh" }}>
								<div style={{ padding: "20px" }}>
									<CircularProgress />
								</div>
							</Center>
						)
						let formdata = new FormData(document.getElementById("pasting") as HTMLFormElement);
						getArrayBufferFromFile(formdata.get("image") as File).then(bufferArray=>{
							let imageName = uniqueCharactersFromFs("/tmp",9)+'.png';
							let _path = path.join("/tmp",imageName);
							fs.writeFileSync(_path,Buffer.from(bufferArray));
							const spawn = childProcess.spawn;

							const process = spawn("python",["C:/img2text/resources/app/python/img2text.py",_path]);
							process.stdout.on("data",function(data){
								setGeneratedText(<div>
									<pre>
										{ data.toString() }
									</pre>
								</div>)

								fs.unlinkSync(_path);
							});
						});
					}}>Generate Text</Button>
				</Center>
			</form>

			<Dialog
				open={ textIsDisplayed }
				onClose={e=>{
					displayText(false);
				}}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					Generated Text
				</DialogTitle>
				<DialogContent>
					<div style={{ minWidth: "350px", minHeight: "50vh", maxHeight: "70vh"}}>
						{ generatedText }
					</div>
				</DialogContent>
				<DialogActions>
				<Button onClick={e=>{
					displayText(false);
				}}>Close</Button>
				{/* <Button onClick={handleClose} autoFocus>
					Agree
				</Button> */}
				</DialogActions>
			</Dialog>

		</Center>
  </>
}

export default App;
