import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";

import Editor, { useMonaco } from "@monaco-editor/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import files from "./files";
// import axios from 'axios';
// import copy_img from "../../Assets/copy_img.png";
// import reset_img from "../../Assets/reset_img.png";
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import "./PythonEditor.css";
import { useParams } from 'react-router-dom';


const LoadingComponent = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={22} width={22} />
);

function PythonEditor({ outputValue, setOutputValue, taskDone, setTaskDone, setCodes }) {

    const editorRef = useRef(null);

    const [pyCode, setPYCode] = useState('');

    const [fileName, setFileName] = useState('');
    const [codesArray, setCodesArray] = useState([]);

    // const file = files[fileName];
    const [file, setFile] = useState();

    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false);
    const [fontSize, setFontSize] = useState(18);

    const params = useParams();

    function handleEditorDidMount(value, file) {
        if (file.language === "python") setPYCode(value);
    }

    const getProjectCodes = async () => {
        try {
            const response = await axios.get(`/api/projects/code/${params.projectId}`);
            if (response.status === 200) {
                // console.log("Codes ", response.data.codesArray);
                setFile(response.data.codesArray[0]);
                setCodesArray(response.data.codesArray);
                setCodes(response.data.codesArray);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProjectCodes();
    }, []);

    useEffect(() => {
        codesArray.map((code,index) => {
            if(code.fileName === fileName) {
                setFile(code);
            }
        })
    },[fileName])

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div style={{ 
                background: "#4A4A4A", 
                borderTopLeftRadius: '10px', 
                borderTopRightRadius: '10px' 
                }} className="d-flex">
                {
                    codesArray &&
                    codesArray.map((file, index) => {
                        return (
                            <button
                                className="btn_file"
                                disabled={fileName === file.fileName}
                                onClick={() => setFileName(file.fileName)}
                            >
                                { file.fileName }
                            </button>
                        )
                    })
                }

            </div>
            {
                file &&
                <Editor
                path={file.fileName}
                defaultLanguage={file.language}
                defaultValue={file.code}
                onChange={(value) => handleEditorDidMount(value, file)}
                value={pyCode}
                theme={"vs-dark"}
                options={{
                    minimap: {
                        enabled: false,
                    },
                    fontSize: fontSize,
                    cursorStyle: "block",
                    cursorWidth: 1
                    // wordWrap: "on"
                }}
            />
            }
        </div>
    )
}

export default PythonEditor;