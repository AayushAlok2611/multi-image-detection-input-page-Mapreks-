import React, { useState } from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  return (
    <div className="app">
      <div className="heading">
		  <h2>
		  User Select Only 10 Photos
		  </h2>
	  </div>
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label"> Add Image
            <i className="material-icons">add_a_photo</i>        
          </label>

          <label className="upload">
            <Button
              onClick={() => {
                                                                //submit button post req
                console.log("Clicked and Submit");
              }}
              variant="contained"
              color="primary"
              size="large"
              className="material-icons"
              startIcon={<SaveIcon />}
            >
              Submit
            </Button>
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
    </div>
  );
};

export default App;
