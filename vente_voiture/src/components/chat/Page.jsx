import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


  function Page({Cont, messages}) {
    return (
            <div className="card chat-app">
                <div id="plist" className="people-list">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span type="submit" className="input-group-text" > <FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                    <ul className="list-unstyled chat-list mt-2 mb-0">
                        
                        <li className="clearfix active">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                            <div className="about">
                                <div className="name">Aiden Chavez</div>
                                <div className="status"> <i className="fa fa-circle online"></i> online </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="chat">
                    <Cont messages = {messages}/>
                </div>
            </div>
    );
  }

export default Page;


