import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// details components ************************************
class Image extends Component {
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

class EditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    componentWillReceiveProps(props) {
        this.setState( {
            name: props.name
        } );
    }
    render() {
        return (
            <div>
                <input type="text" className="edit" placeholder="change name"/>
                <button className="update__name">Update</button>
            </div>
        );
    }
}

class EditTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: this.props.tag
        }
    }
    componentWillReceiveProps() {
        this.setState( {
            tag: event.target.value
        } );
    }
    render() {
        return (
            <div>
                <input type="text" className="edit" placeholder="change tag name"/>
                <button className="update__tag">Update</button>
            </div>
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
            <button className="remove">Remove</button>
        );
    }
}

class Close extends Component {
    render() {
        return (
            <button className="close">Close</button>
        );
    }
}

export default {Image, Slider, EditName, EditTag, EditComment, Remove, Close};