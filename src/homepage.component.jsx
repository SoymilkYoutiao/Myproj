import React from 'react';
import './homepage.style.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <image></image>
                    <span className='subtitle'>主畫面</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <image></image>
                    <span className='subtitle'>建立菜單</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <image></image>
                    <span className='subtitle'>歷史菜單</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <image></image>
                    <span className='subtitle'>總菜色</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <image></image>
                    <span className='subtitle'>拍照</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;