import React, { useState } from 'react';
import './ProgramStructure.css';
import sc22_ps_bg_svg from '../img/sc22_ps_bg_svg.svg';
import sc22_ps_drop_img from '../img/sc22_ps_drop_img.png';
import { saveAs } from "file-saver";
import programStructurePDF from '../img/ProgramStructure.pdf';

function ProgramStructure() {

    const [showTable, setShowTable] = useState(false);

    const handleShowTable = () => {
        setShowTable(true);
    }

    const saveFile = () => {
        saveAs(
            programStructurePDF,
            "Summer Camp 2022 Program Structure.pdf"
        );
    }

    return (
        <div className="sc22_program_structure">
            <img src={sc22_ps_bg_svg} className="sc22_ps_bg_svg" alt="Program Structure img" />
            <h1 className="sc22_ps_title">Program Structure</h1>
            <div className="sc22_ps_content">
                <div className="sc22_ps_content_overlay"></div>
                <table class="table table-striped">
                    <thead>
                        <tr className="sc22_tr" >
                            <th className="sc22_th" scope="col">Session</th>
                            <th className="sc22_th" scope="col">Date</th>
                            <th className="sc22_th" scope="col">Topic</th>
                            <th className="sc22_th" scope="col">Classroom Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="sc22_td" scope="row">Session 1</th>
                            <td className="sc22_td" >19 Jun (Sun)</td>
                            <td className="sc22_td" >Orientation</td>
                            <td className="sc22_td" >-</td>
                        </tr>
                        <tr className="sc22_tr_even" >
                            <th className="sc22_td" scope="row">Session 2</th>
                            <td className="sc22_td" >20 Jun (Mon)</td>
                            <td className="sc22_td" >Block Programming (LED)
                                +Breadboard What is
                                a sensor?
                                Ultrasonic
                                Sensor +
                                Multimeter</td>
                            <td className="sc22_td" >LED Blink, Block Coding,
                                Traffic Light Controller
                                Temperature Sensor
                                Social Distancing Project</td>
                        </tr>
                        <tr>
                            <th className="sc22_td" scope="row">Session 3</th>
                            <td className="sc22_td" >21 Jun (Tue)</td>
                            <td className="sc22_td" >LED Blink, Block Coding,
                                Traffic Light Controller
                                Temperature Sensor
                                Social Distancing Project</td>
                            <td className="sc22_td" >Door Bell Project
                                Thief Detection
                                Flex Sensor Project</td>
                        </tr>
                        {
                            !showTable &&
                            <tr className="sc22_tr_even" >
                                <th className="sc22_td" scope="row">Session 4</th>
                                <td className="sc22_td" >22 Jun (Wed)</td>
                                <td className="sc22_td" >Content</td>
                                <td className="sc22_td" >Content</td>
                            </tr>
                        }
                        {
                            showTable &&
                            <>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 4</th>
                                    <td className="sc22_td" >22 Jun (Wed)</td>
                                    <td className="sc22_td" >Text Programming
                                        Variable
                                        C++/C
                                        Data Types + Operator
                                        If else Conditions</td>
                                    <td className="sc22_td" >2 LED Blink
                                        Ultrasonic Distance
                                        Find the Greatest
                                        Number</td>
                                </tr>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 5</th>
                                    <td className="sc22_td" >23 Jun (Thu)</td>
                                    <td className="sc22_td" >Loop for (Servo motor )
                                        Loop while
                                        Function</td>
                                    <td className="sc22_td" >Servo motor project
                                        Smart dustbin project
                                        Simple robot using
                                        button </td>
                                </tr>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 6</th>
                                    <td className="sc22_td" >24 Jun (Fri)</td>
                                    <td className="sc22_td" >Types of motor. Motor Driver
                                        driver L293D(Tinkercad)
                                        Creating first robot
                                        Interfacing</td>
                                    <td className="sc22_td" >Motor movements
                                        L298/Connect motor
                                        to motor Line following
                                        robot</td>
                                </tr>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 7</th>
                                    <td className="sc22_td" >28 Jun (Tue)</td>
                                    <td className="sc22_td" >Creating first robot Coding
                                        Creating second robot
                                        Interfacing. Creating second
                                        robot
                                        Coding</td>
                                    <td className="sc22_td" >Line following robot
                                        Obstacle avoiding robot
                                        Obstacle avoiding robot</td>
                                </tr>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 8</th>
                                    <td className="sc22_td" >29 Jun (Wed)</td>
                                    <td className="sc22_td" >Innovation project finalization
                                        Innovation project documentation
                                        Innovation project development mentorship</td>
                                    <td className="sc22_td" >-</td>
                                </tr>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 9</th>
                                    <td className="sc22_td" >30 Jun (Thu)</td>
                                    <td className="sc22_td" >Innovation project development
                                        mentorship & presentation
                                        Project development
                                        Final project development</td>
                                    <td className="sc22_td" >-</td>
                                </tr>
                                <tr className="sc22_tr_even" >
                                    <th className="sc22_td" scope="row">Session 10</th>
                                    <td className="sc22_td" >3 Jun (Sun)</td>
                                    <td className="sc22_td" >Project Exhibition by students</td>
                                    <td className="sc22_td" >-</td>
                                </tr>
                            </>
                        }
                    </tbody>
                </table>
                { 
                    window.innerWidth < 900 ?
                    <div className="sc22_ps_btn_download_cover">
                        <button onClick={saveFile}  className="sc22_ps_btn_download">Download</button>
                    </div> :
                    !showTable && <img onClick={handleShowTable} src={sc22_ps_drop_img} className="sc22_ps_drop_img" alt="Drop img" /> 
                }
            </div>
        </div>
    )
}

export default ProgramStructure