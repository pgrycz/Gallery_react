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
        render() {
            return (
                 <li><a href="#" className="menu__font">Add image</a></li>
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
                    <input className="fa fa-search search" aria-hidden="true" type="text" placeholder=" &#xf002; Search"/>
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
                <div contentEditable="true" className="edit">nazwa</div>
            );
        }
    }

    class EditTag extends Component {
        render() {
            return (
                <div contentEditable="true" className="edit">tag</div>
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

        handleFileUpload(proxy) {
          let data = new FormData();
          data.append('file', proxy.currentTarget.files[0]);
          data.append('name', 'Awesome Cat Pic');
          axios.post('http://localhost:9090/file', data);
        }

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
                    <input type="file" onChange={this.handleFileUpload} />

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
