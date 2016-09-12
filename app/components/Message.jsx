import React, {PropTypes} from 'react'
import pureMixin from '../mixin/pureMixin.js'
import Immutable from 'immutable'
import Avatar from '../containers/Avatar.js'

import '../less/message.less'

class Message extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = pureMixin.bind(this);
    }
    handleDbclick(){
        let index = this.props.message.toJS().index,
            setSlideState = this.props.setSlideState,
            findSlideArr = this.props.findSlideArr;
            findSlideArr(index);
            setSlideState(true);
    }
    dealTimestamp(timestamp){
        let time = new Date(timestamp);
        let hours = time.getHours()>9 ? time.getHours() : '0'+time.getHours();
        let minu = time.getMinutes()>9 ? time.getMinutes() : '0'+time.getMinutes();
        let sec = time.getSeconds()>9 ? time.getSeconds() : '0'+time.getSeconds();
        return hours+':'+minu+':'+sec;
    }
    dealContent(content){
        let text = content,
            user = this.props.user;
        text = text.replace(/&/g,'&amp').replace(/\"/g,'&quot').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\'/g,'&apos;');
        let regLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        let regExp = /#\([\u4e00-\u9fa5a-z]+\)/g;
        text = text.replace(regExp, r => `<img src="images/expressions/${r.match(/[^#()]+/)[0]}.png" onerror="this.style.display=\'none\'"/>` );
        text = text.replace(regLink, r => `<a href="${r}" target="_blank">${r}</a>`);
        return text
    }
    // shouldComponentUpdate(nextProps){
    //     if(!Immutable.is(this.props.message,nextProps.message)){
    //         return true;
    //     }
    //     return false;
    // }
    render(){
        let { avatar, timestamp, content, nickname, type } = this.props.message.toJS();
        let time = this.dealTimestamp(timestamp),
            text = type === 'textMessage' ? this.dealContent(content):'',
            dir = this.props.dir || 'left';
        return (
            <div data-flex={'dir:'+dir}>
                <div data-flex={'dir:'+dir} data-flex-box = '0' className = 'message-container'>
                    <div data-flex-box = '0' data-flex = 'main:top cross:top' className = 'avatar-container'>
                        <Avatar
                            src = {avatar}
                            size = {39}
                            nickname = {nickname}
                            mode = {dir === 'left' ? 'menu':'profile'}
                        />
                    </div>
                    <div style = {{
                        padding:'0 10px',
                        textAlign:dir
                    }}>
                        <span className = 'nickname'>
                            {nickname + ' '+time}
                        </span>
                        <div className = 'message'>
                             {
                                 type === 'textMessage' ?
                                 <span  dangerouslySetInnerHTML={ {__html: text}}></span>
                                 :<span>
                                    <img src ={content} onClick = {()=>{this.handleDbclick()}} className = 'imageMessage'/>
                                  </span>
                             }
                             <div className = {dir === 'left' ? 'triangle-left-outer' : 'triangle-right-outer'}></div>
                             <div className = {dir === 'left' ? 'triangle-left-inner' : 'triangle-right-inner'}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Message.propType = {
    // message: PropTypes.object,
    dir: PropTypes.string,
    setSlideState: PropTypes.func,
    findSlideArr: PropTypes.func
}

export default Message;