import React, { useRef } from 'react'
import { IMAGE } from '../utils/theme'
import Editor from "@monaco-editor/react";
import TopBar from '../common/TopBar';
import Sidebar from '../common/Sidebar';
import { NavLink } from 'react-router-dom';

const Sample = () => {

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
  }


  return (

    <div className='dashboard-panel'>
        <TopBar/>
        <div className='container-fluid'>
            <Sidebar/>
            <div className='right-comon leason-view'>
              
               
                <div className='home-layout'>
                      <div className='left-side'>

                        <div className='left-back'>
                           <NavLink to="/leason-plan"><i className="fa-solid fa-angle-left"></i> Lesson Plan</NavLink>
                        </div>
                  
                        
                          <div className='left-side-body'>
                            <ul>
                              <li>
                                  <label>Sympony Leason</label>
                                  <ul>
                                      <li>
                                          <label>Chapter 1: Lorem Ipsum 
                                          Dolor Sit Ame</label>
                                      </li>
                                      <li>
                                          <label>Chapter 2: Lorem Ipsum 
                                          Dolor Sit Ame</label>
                                      </li>
                                  </ul>
                              </li>
                             
                            </ul>
                          </div>
                          
                      </div>
                      <div className='right-side'>
                        <div className='right-menu'>
                            <ul>
                              <li>
                                  <NavLink>Chat With Geek007</NavLink>
                              </li>
                              <li>
                                  <NavLink>Group Chat</NavLink>
                              </li>
                              <li>
                                  <select>
                                      <option>Select lesson plan</option>
                                  </select>
                              </li>
                            </ul>
                        </div>
                        <Editor
                      height="60vh"
                      defaultLanguage="javascript"
                      defaultValue='<?php
              ECHO "Hello World!<br>";
              echo "Hello World!<br>";
              EcHo "Hello World!<br>";
              ?> '
                      onMount={handleEditorDidMount}
                    />
                    <div className='code-button'>
                          <button className='outline-bttn'>Edit Leason</button>
                          <button className='solid-bttn'>Save Leason Plan</button>
                    </div>

                      </div>
                  </div> 
            </div>
        </div>
    </div>


    
  )
}

export default Sample