import React, { useRef, useState } from 'react'
import { IMAGE } from '../utils/theme'
import Editor from "@monaco-editor/react";
import Dropdown from 'react-bootstrap/Dropdown';
import TopBar from '../common/TopBar';
import Sidebar from '../common/Sidebar';
const Home = () => {

  const [isToggle, setisToggle] = useState(false)

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
            <div className='right-comon'>
                <h3 className='page-title'>Chat</h3>
                <div className='home-layout'>
        <div className='left-side'>
            
            <div className='left-side-body'>
              <p>Translates your code into JavaScript, TypeScript, Python, Java, C++, or PHP.</p>
            </div>
            <div className='left-side-footer'>
               <img src={IMAGE.attachment} className='attached-img' />
               <textarea placeholder='Message Here'></textarea >
     
               <button>
                  <img src={IMAGE.uparrow} />
               </button>
            </div>
        </div>
        <div className='right-side'>
          <Editor
        height="75vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <button className='toogleBttn' onClick={()=>setisToggle(!isToggle)}>
        <img src={IMAGE.code} />
      </button>
      {isToggle && 
      <div className='toggleView'>
        <ul>
            <li>
              <img src={IMAGE.code1} />
              <label>Code Review</label>
            </li>
            <li>
              <img src={IMAGE.code1} />
              <label>Code Review</label>
            </li>
            <li>
              <img src={IMAGE.code1} />
              <label>Code Review</label>
            </li>
        </ul>
      </div>
}
        </div>
    </div>  
            </div>
        </div>
    </div>

  
  )
}

export default Home