import { useState } from "react";
import { FaUpload, FaFileAlt } from "react-icons/fa";
import Button from "../ui/Button";
export default function UploadBox() {

  const [file, setFile] = useState(null);

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload() {

    if (!file) {
      alert("Please select a file");
      return;
    }

    alert(`Uploading ${file.name}`);

    // Later:
    // axios.post("/upload", formData)

  }
  function handleRemove() {
    setFile(null);
    }

  return (

    <div className="bg-slate-800 rounded-xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <FaUpload className="text-blue-500 text-3xl"/>

        <h2 className="text-white text-2xl font-bold">
          Upload Evidence
        </h2>

      </div>

      <label className="block border-2 border-dashed border-slate-600 rounded-xl p-12 cursor-pointer hover:border-blue-500 transition">

        <input
          type="file"
          className="hidden"
          onChange={handleFile}
        />

        <div className="text-center">

          <FaUpload className="mx-auto text-5xl text-blue-500 mb-4"/>

          <p className="text-white">
            Click to Upload
          </p>

          <p className="text-gray-400 mt-2">
            CSV • JSON • TXT • LOG
          </p>

        </div>

      </label>

      {file && (

        <div className="mt-6 flex items-center gap-3">

          <FaFileAlt className="text-green-400"/>

          <span className="text-white">

            {file.name}

          </span>

        </div>

      )}

      <div className="mt-8 flex gap-4">

  <Button
    onClick={handleUpload}
    className="px-6 py-3"
  >
    Upload Evidence
  </Button>

  {file && (
    <Button
      onClick={handleRemove}
      className="bg-red-600 hover:bg-red-700 px-6 py-3"
    >
      Remove File
    </Button>
  )}

</div>

    </div>

  );

}