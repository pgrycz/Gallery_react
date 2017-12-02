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
import MenuHeaders from './menuHeader.jsx';
import DetailsComponents from './details.jsx';

document.addEventListener('DOMContentLoaded', function(){

    // assembled menuheader components ***********************************
    class MenuHeader extends Component {
        render() {
            return (
                <menu className="header">
                    <MenuHeaders.Home/>
                    <MenuHeaders.StartHere/>
                    <MenuHeaders.About/>
                    <MenuHeaders.Search/>
                </menu>
            );
        }
    }

    // assembled single image components with details components
    class Details extends Component {
        render() {
            return (
                <div className="image__container">
                    <DetailsComponents.Slider/>
                    <DetailsComponents.Image/>
                    <div className="flex">
                        <DetailsComponents.EditName name={this.props.name}/>
                        <DetailsComponents.EditTag tag={this.props.tag}/>
                    </div>
                    <DetailsComponents.EditComment/>
                    <DetailsComponents.Remove/>
                    <DetailsComponents.Close/>
                </div>
            );
        }
    }

    class Name extends Component {
        render() {
            return (
                <div>

                </div>
            );
        }
    }

    // assembled single image components
    class ImageComponent extends Component {
        render() {
            return (
                <div>
                    <Name/>
                    <Details  name={this.props.name} tag={this.props.tag}/>
                </div>
            );
        }
    }

    // assembled single images components into gallery
    class Main extends Component {
        render() {
            return (
                <div>
                    <ImageComponent/>
                    {/* map of theese components */}
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
