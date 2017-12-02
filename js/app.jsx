import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
    } from 'react-router';
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function(){

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
            console.log(this);
            this.setState( {
                name: event.target.value
            } );
        }
        changeTag = (event) => {
            console.log(this);
            this.setState( {
                tag: event.target.value
            } );
        }
        handleFileUpload(proxy) {
          let data = new FormData();
          data.append('file', event.target.files[0]);
          data.append('name', this.state.name);
          data.append('tag', this.state.tag);
          axios.post('http://localhost:9090/file', data);
          debugger;
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
                                   onChange={this.handleFileUpload} />
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

    // assembled menuheader components ***********************************
    class MenuHeader extends Component {
        render() {
            return (
                <menu className="header">
                    <Home/>
                    <StartHere/>
                    <About/>
                    <Search/>
                </menu>
            );
        }
    }

    // details components ************************************
    class Image extends Component {
        render() {
            return (
                <div>
                </div>
            );
        }
    }

    class EditName extends Component {
        render() {
            return (
                <div className="edit">nazwa</div>
            );
        }
    }

    class EditTag extends Component {
        render() {
            return (
                <div className="edit">tag</div>
            );
        }
    }

    class EditComment extends Component {
        render() {
            return (
                <textarea placeholder="komentarz"></textarea>
            );
        }
    }

    class Remove extends Component {
        render() {
            return (
                <div>Remove</div>
            );
        }
    }

    // assembled details components
    class Details extends Component {

        render() {
            return (
                <div className="image">
                    <Image/>
                    <div className="flex">
                        <EditName/>
                        <EditTag/>
                    </div>
                    <EditComment/>
                    <Remove/>
                </div>

            );
        }
    }

    // single image components ********************************
    class Name extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    class Close extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    class Slider extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    // folder components **************************************
    class AddImage extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    class AddFolder extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    class RemoveFolder extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    class Folder extends Component {
        render() {
            return (
                <div>
                    <AddImage/>
                    <AddFolder/>
                    <RemoveFolder/>
                </div>
            );
        }
    }

    // assembled single image components
    class ImageComponent extends Component {
        render() {
            return (
                <div>
                    <Slider/>
                    <Name/>
                    <Details/>
                    <Close/>
                </div>
            );
        }
    }

    // assembled single images components into gallery
    class ImagesComponent extends Component {
        render() {
            return (
                // map of uploaded images
                <ImageComponent/>
            );
        }
    }

    // assembled folder components
    class FoldersComponent extends Component {
        render() {
            return (
                <Folder/>
            );
        }
    }

    class Main extends Component {
        render() {
            return (
                <div>
                    <ImagesComponent/>
                    <FoldersComponent/>
                </div>
            );
        }
    }

    class Footer extends Component {
        render() {
            return (
                <div>
                    {/* contact, about */}
                </div>
            );
        }
    }

    // assembled app component
    class App extends Component {
        render() {
            return (
                <div>
                    <MenuHeader/>
                    <Main/>
                    <Footer/>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
