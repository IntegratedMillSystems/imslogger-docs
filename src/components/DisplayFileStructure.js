import React from 'react';

export function File(props) {
  return (
    <div>
      📝 {props.name}
    
      {props.altName && <span className="alt-name"> ({props.altName})</span>}
    </div>
  );
}

export function Folder(props) {
  return (
    <>
      <div>
        📁 {props.name}
      
        {props.altName && <span className="alt-name"> ({props.altName})</span>}
      </div>
      <div className="folder-contents">
        {props.children}
      </div>
    </>
  );
}

export function DisplayFileStructure(props) {
  return (
    <div className="display-file-structure">
      {props.children}
    </div>
  )
}