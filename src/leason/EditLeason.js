import React, { useRef } from 'react'
import { IMAGE } from '../utils/theme'
import Editor from "@monaco-editor/react";
import TopBar from '../common/TopBar';
import Sidebar from '../common/Sidebar';
import { NavLink } from 'react-router-dom';

const EditLeason = () => {

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
                                  <label>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Maecenas 
nec tellus quis felis gravida fermentum. 
Donec sed rhoncus nisl. Pellentesque a 
velit sit amet eros rhoncus facilisis at 
nec ex. Etiam lobortis et nisl id ultricies. 
Curabitur at accumsan tortor, ut
semper nibh. Vestibulum massa tortor, 
cursus eu elit sit amet, sagittis rhoncus
lectus. Phasellus porta ultricies lorem 
eget semper. Donec in consectetur
justo, quis consectetur nulla.</label>
                                 
                              </li>
                             
                            </ul>
                          </div>
                          
                      </div>
                      <div className='right-side'>
                       
                        <Editor
                      height="75vh"
                      defaultLanguage="javascript"
                      defaultValue='<?php
              ECHO "Hello World!<br>";
              echo "Hello World!<br>";
              EcHo "Hello World!<br>";
              ?> '
                      onMount={handleEditorDidMount}
                    />
               

                      </div>
                  </div> 
            </div>
        </div>
    </div>


    
  )
}

export default EditLeason