import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// menuheader components **********************************
class Home extends Component {
    render() {
        return (
            <li><a href="#" className="menu__font">Home</a></li>
        );
    }
}

class StartHere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                display: 'none',
                position: 'absolute',
                width: '400px',
                height: '230px',
                backgroundColor: 'black',
                left: '350px',
                right: 0,
                top: '100px',
                bottom: 0,
                borderRadius: '10px'
            },
            name: '',
            tag: ''
        }
    }
    show = () => {
        if (this.state.style.display === 'block') {
            this.setState ( {
                style: {
                    display: 'none',
                    position: 'absolute',
                    width: '400px',
                    height: '230px',
                    backgroundColor: 'black',
                    left: '350px',
                    right: 0,
                    top: '100px',
                    bottom: 0,
                    borderRadius: '10px'
                }
            } );
        } else {
            this.setState ( {
                style: {
                    display: 'block',
                    position: 'absolute',
                    width: '400px',
                    height: '230px',
                    backgroundColor: 'black',
                    left: '350px',
                    right: 0,
                    top: '100px',
                    bottom: 0,
                    borderRadius: '10px'
                }
            } );
        }
    }
    changeName = (event) => {
        this.setState( {
            name: event.target.value
        } );
    }
    changeTag = (event) => {
        this.setState( {
            tag: event.target.value
        } );
    }
    changeFilename = () => {
        let string = this.state.name;
        let newName = string.substring(0, s.lastIndexOf(".")) + s.substring(s.lastIndexOf("."));
        return newName;
    }
    handleFileUpload = (proxy) => {
        let data = new FormData();
        // data.append('file', this.state.name);
        data.append('name', this.changeFilename);
        data.append('tag', this.state.tag);
        axios.post('http://localhost:9090/file', data);
    }
    render() {
        return (
            <ul>
                <li><a href="#" className="menu__font" onClick={this.show}>Add image</a></li>
                <li style={this.state.style}>
                    <div className="menu__centering">
                        <input type="file" 
                               className="menu__inputs--upload"/>
                        <input type="text" 
                               className="menu__inputs--upload" 
                               value={this.state.name} 
                               onChange={this.changeName} 
                               id="image__name" 
                               placeholder="Dodaj nazwę"/>
                        <input type="text" 
                               className="menu__inputs--upload" 
                               value={this.state.tag} 
                               onChange={this.changeTag} 
                               id="tag__name" 
                               placeholder="Dodaj tag"/>
                        <input type="submit" 
                               value="Wyślij" 
                               className="menu__inputs--upload"
                               onClick={this.handleFileUpload}/>
                    </div>
                </li>
            </ul>
        );
    }
}

class About extends Component {
    render() {
        return (
            <li><a href="#" className="menu__font">About</a></li>
        );
    }
}

class Search extends Component {
    render() {
        return (
            <li>
                <input className="fa fa-search search"
                       aria-hidden="true" 
                       type="text" 
                       placeholder=" &#xf002; Search"/>
            </li>
        );
    }
}

export default {Home, StartHere, About, Search};