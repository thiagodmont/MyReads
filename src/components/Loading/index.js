import React from 'react'
import './styles.css'

const Loading = function(props) {
    return (
      <div className="loading">

        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>

        Hey! Aguarde só um pouquinho...
      </div>
    );
}

export default Loading;