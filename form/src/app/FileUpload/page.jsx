'use client'
import { Uploader } from "uploader"; 
import { UploadButton } from "react-uploader";
import { useState } from "react";

const uploader = Uploader({
  apiKey: "free" 
});

const options = { multi: true };

 export default function FileUpload() {
    const [file, setFile] = useState(null);
console.log(file);

 return<>

 <div className=" flex gap-4  items-center  w-[1000] ">
  <p>Upload your CV or Resume here :</p>
  <UploadButton uploader={uploader}
                options={options}
                onComplete={files => setFile(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button className="button-80 w-fit" onClick={onClick}>
        Upload
      </button>
    }
  </UploadButton>
 </div>

 </>
 };




