import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
// import Editor from "@monaco-editor/react";

import add_icon from "../../../Asssets/add_icon.png";
import remove_step from "../assets/delete_icon.png";
import Loading from "../../../Components/Loading";
import black_edit_icon from "../assets/black_edit_icon.png";
import remove_component_img from "../assets/remove_component_img.png";

import Modal from "react-modal";
const customStyles = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  },
};

Modal.setAppElement("#root");

const EditorComponent = ({
  language,
  setLanguage,
  codeValue,
  setCodeValue,
}) => {
  function handleEditorChange(value, event) {
    // console.log("here is the current model value:", value);
    setCodeValue(value);
  }

  return (
    <>
      <select
        className="pc_language_select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="cpp">C++</option>
        <option value="python">Python</option>
      </select>
      <div>
        {/* <Editor
                    height="300px"
                    defaultLanguage={language}
                    defaultValue={codeValue}
                    theme="light"
                    onChange={handleEditorChange}
                /> */}
      </div>
    </>
  );
};

function ProjectCode() {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("File saved successfully");
  const [language, setLanguage] = useState("cpp");
  const [codeValue, setCodeValue] = useState("// Write your code...");
  const [fileName, setFileName] = useState("");
  const [codesArray, setCodesArray] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const params = useParams();

  const [editLanguage, setEditLangauge] = useState("");
  const [editCodeValue, setEditCodeValue] = useState("");
  const [editFileName, setEditFileName] = useState("");
  const [codeId, setCodeId] = useState("");
  const [getLoading, setGetLoading] = useState(false);

  const editorRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
  }

  const handleSaveCode = async (e) => {
    e.preventDefault();

    const data = {
      projectCodes: [
        {
          code: codeValue,
          fileName: fileName,
          language: "cpp",
        },
      ],
      projectId: params.projectId,
    };

    // console.log(data);
    try {
      setLoading(true);
      const existingCodes = await axios.get(
        `/api/projects/code/${params.projectId}`
      );
      // console.log(existingSteps.data);
      if (existingCodes.status === 200 && existingCodes.data !== null) {
        let codes = existingCodes.data;
        codes.codesArray.push({
          code: codeValue,
          fileName: fileName,
          language: language,
        });
        const newData = {
          projectCodes: codes,
        };

        const savedCodes = await axios.patch(
          "/api/projects/code/update",
          newData
        );
        if (savedCodes.status === 200) {
          getProjectCodes();
          setLoading(false);
          setSaved(true);
          setMessage("Code added successfully!");
        }
      } else {
        const savedCodes = await axios.post(`/api/projects/code/add`, data);
        if (savedCodes.status === 200) {
          getProjectCodes();
          setLoading(false);
          setSaved(true);
          setMessage("Code added successfully!");
        }
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setSaved(true);
      setMessage("Something went wrong!");
    }
  };

  const getProjectCodes = async () => {
    try {
      setGetLoading(true);
      const response = await axios.get(
        `/api/projects/code/${params.projectId}`
      );
      if (response.status === 200) {
        setGetLoading(false);
        // console.log("Codes ", response.data);
        setCodesArray(response.data.codesArray);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveCode = async (code) => {
    try {
      const remove_code = await axios.patch(
        `/api/projects/code/update/${params.projectId}`,
        code
      );
      if (remove_code.status) {
        // console.log(remove_code.data);
        getProjectCodes();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditCode = (code, index) => {
    setCodeId(code._id);
    setEditFileName(code.fileName);
    setEditCodeValue(code.code);
    setEditLangauge(code.language);
    openModal();
  };

  const handleOnEditCode = async (e) => {
    e.preventDefault();

    const data = {
      codeId: codeId,
      code: editCodeValue,
      fileName: editFileName,
      language: editLanguage,
    };

    // console.log(data);

    try {
      setLoading(true);
      const response = await axios.patch(
        `/api/projects/code/update-code/${params.projectId}`,
        data
      );
      if (response.status === 200) {
        getProjectCodes();
        setLoading(false);
        setMessage("Code updated successfully!");
        setSaved(true);
        closeModal();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    if (saved) {
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }
  }, [saved]);

  // useEffect(() => {
  //     console.log(language);
  // }, [language]);

  useEffect(() => {
    getProjectCodes();
  }, []);

  return (
    <div className="project_steps">
      <div className="add_steps_cover">
        <button className="add_steps_btn">
          <img
            src={add_icon}
            className="add_steps_icon"
            alt="add project img"
          />
          Add Code
        </button>
      </div>
      <div className="project_step_cover">
        <div className="project_step_remove">
          <img
            src={remove_step}
            className="remove_step"
            alt="remove step img"
          />
        </div>
        <form method="POST" onSubmit={handleSaveCode}>
          <div className="form-group">
            <label
              className="project_details_label"
              for="exampleFormControlInput1"
            >
              Code Name<em style={{ color: "#FA1C1C" }}>*</em>
            </label>
            <input
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              type="text"
              className="form-control project_step_input"
              id="exampleFormControlInput1"
              placeholder=""
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label
              className="project_details_label"
              for="exampleFormControlInput1"
            >
              Code Description<em style={{ color: "#FA1C1C" }}>*</em>
            </label>
            <div className="project_step_description">
              <EditorComponent
                language={language}
                setLanguage={setLanguage}
                codeValue={codeValue}
                setCodeValue={setCodeValue}
              />
            </div>
          </div>
          <div className="text-right">
            <button className="project_step_save_btn">
              {loading ? (
                <div style={{ width: "15%", margin: "0 auto" }}>
                  <Loading
                    type="spin"
                    color="#fff"
                    width="32px"
                    height="32px"
                  />
                </div>
              ) : (
                "Save"
              )}
            </button>
          </div>
          {saved && <div className="saved_message">{message}</div>}
        </form>
      </div>
      <div className="project_steps_list">Files Added</div>
      <div className="project_steps_list_cover">
        {getLoading ? (
          <div style={{ width: "15%", margin: "0 auto" }}>
            <Loading type="spin" color="#fff" width="32px" height="32px" />
          </div>
        ) : (
          codesArray.map((code, index) => {
            return (
              <div className="project_step_cover ps_list_item">
                <div className="ps_li_top">
                  <p className="ps_top_step_name">{code.fileName}</p>
                  <div className="ps_top_btns">
                    <img
                      onClick={() => handleEditCode(code, index)}
                      src={black_edit_icon}
                      className="step_edit_icon"
                      alt="step edit pic"
                    />
                    <img
                      onClick={() => handleRemoveCode(code)}
                      src={remove_step}
                      className="step_delete_icon"
                      alt="step delete pic"
                    />
                  </div>
                </div>
                <div className="ps_li_middle">
                  <div className="ps_middle_step_description">
                    <EditorComponent
                      language={code.language}
                      setLanguage={setLanguage}
                      codeValue={code.code}
                      setCodeValue={setCodeValue}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="project_step_cover code_edit_modal">
          <div className="project_step_remove">
            <img
              onClick={closeModal}
              src={remove_component_img}
              className="remove_step"
              alt="remove step img"
            />
          </div>
          <h2 className="code_edit_modal_title">Edit Code</h2>
          <form method="POST" onSubmit={handleOnEditCode}>
            <div className="form-group">
              <label
                className="project_details_label"
                for="exampleFormControlInput1"
              >
                Code Name<em style={{ color: "#FA1C1C" }}>*</em>
              </label>
              <input
                value={editFileName}
                onChange={(e) => setEditFileName(e.target.value)}
                type="text"
                className="form-control project_step_input"
                id="exampleFormControlInput1"
                placeholder=""
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label
                className="project_details_label"
                for="exampleFormControlInput1"
              >
                Code Description<em style={{ color: "#FA1C1C" }}>*</em>
              </label>
              <div className="project_step_description">
                <EditorComponent
                  language={editLanguage}
                  setLanguage={setEditLangauge}
                  codeValue={editCodeValue}
                  setCodeValue={setEditCodeValue}
                />
              </div>
            </div>
            <div className="text-right">
              <button className="project_step_save_btn">
                {loading ? (
                  <div style={{ width: "15%", margin: "0 auto" }}>
                    <Loading
                      type="spin"
                      color="#fff"
                      width="32px"
                      height="32px"
                    />
                  </div>
                ) : (
                  "Save"
                )}
              </button>
            </div>
            {saved && <div className="saved_message">{message}</div>}
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectCode;
